import { useEffect, useState } from "react";
import InputField from "@/components/InputField";
import TextareaField from "@/components/TextareaField";
import emailjs from "@emailjs/browser";
import Layout from "@/components/Layout";
import TextReveal from "@/components/TextReveal";
import Head from "next/head";
import TransitionEffect from "@/components/Transition";

const ContactForm = () => {
  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await emailjs.send(
        "service_va28km3",
        "template_6otp5qq",
        values,
        "nrJi1Tv6CqinXxOQW"
      );

      console.log("SUCCESS!", response);

      setValues({
        user_name: "",
        user_email: "",
        message: "",
      });

      setStatus("SUCCESS");
    } catch (error) {
      console.log("FAILED", error);
      setStatus("ERROR");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      const timer = setTimeout(() => {
        setStatus("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Head>
        <title>Rahul | Contact</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <Layout>
        <TextReveal
          revealText="Contact Me!"
          className="lg:text-7xl sm:mb-8 sm:top-14 sm:text-6xl xs:text-5xl sm:relative text-white font-Poppins font-bold tracking-wider text-8xl relative left-1/2 bottom-10 transform -translate-x-1/2 -translate-y-1/2 text-center"
        />

        <div className="lg:mt-48 lg:mr-48 pt-6 pb-8 bg-light rounded p-5 sm:max-w-md sm:mx-auto">
          {status && (
            <StatusMessage status={status} onClose={() => setStatus("")} />
          )}
          <form onSubmit={handleSubmit}>
            <h3 className="text-gray-700 mb-7 text-xl font-semibold">
              Send me a message
            </h3>
            <InputField
              value={values.user_name}
              handleChange={handleChange}
              label="Name"
              name="user_name"
              type="text"
            />
            <InputField
              value={values.user_email}
              handleChange={handleChange}
              label="E-Mail"
              name="user_email"
              type="email"
            />
            <TextareaField
              value={values.message}
              handleChange={handleChange}
              label="Message"
              name="message"
            />
           
          </form>
        </div>
      </Layout>
    </>
  );
};


  );
};

export default ContactForm;
