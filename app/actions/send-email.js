"use server"

export async function sendEmail(formData) {
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // Validate inputs
  if (!name || !email || !message) {
    return { success: false, error: "All fields are required" }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address" }
  }

  try {
    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured")
      return {
        success: false,
        error: "Email service is not configured. Please add RESEND_API_KEY to environment variables.",
      }
    }

    // Send email using Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <contact@rahulb.dev>",
        to: process.env.CONTACT_EMAIL || "MonsieurR9@proton.me",
        reply_to: email,
        subject: `Portfolio Contact: Message from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error("Resend API error:", error)
      return { success: false, error: "Failed to send email. Please try again later." }
    }

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: "An unexpected error occurred. Please try again later." }
  }
}
