import { useEffect, useState } from "react"
import InputField from "../components/InputField";
import TextareaField from "../components/TextareaField";
import emailjs from '@emailjs/browser';
import Layout from './../components/Layout';
import TextAnimation from "../components/TextAnimation";


const contact = () => {
  const [values, setValues] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_w0v9tz4', 'template_vqdesaj', values, 'o4DidyseC-z8KvUdn')
      .then(response => {
        console.log('SUCCESS!', response);
        setValues({
          user_name: '',
          user_email: '',
          message: ''
        });
        
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED...', error);
      });
  }

  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }
  return (
    <Layout>
       <TextAnimation
            text="Contact Me!"
            className="mb-16"
            />
    <div className="lg:mt-48 lg:mr-48 pt-6 pb-8 bg-light shadow-xl rounded p-5">
      {status && renderAlert()}
      <form onSubmit={handleSubmit}>
        <h3 className="text-dark mb-7 text-xl font-semibold">Send me a message</h3>
        <InputField value={values.user_name} handleChange={handleChange} label="Name" name="user_name" type="text" />
        <InputField value={values.user_email} handleChange={handleChange} label="E-Mail" name="user_email" type="email"  />
        <TextareaField value={values.message} handleChange={handleChange} label="Your Message Here" name="message" />

        <button type="submit"
          className="mt-4 bg-dark text-light rounded px-4 py-2 "
        >Send 
      
        </button>
      </form>
    </div>
    </Layout>
  
  )
}

const renderAlert = () => (
<div className="px-4 py-3 leading-normal text-white bg-blue-100 rounded mb-5 text-center">
  <p>your message has been sent successfully!</p>
</div>

)

export default contact;