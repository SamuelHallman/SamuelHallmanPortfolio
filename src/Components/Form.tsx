import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

interface FormProps {

      }

      const Form: React.FC<FormProps> = () => {
            const form = useRef<HTMLFormElement>(null);
            const [name, setName] = useState("");
            const [email, setEmail] = useState("");
            const [message, setMessage] = useState("");

            const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                  setName(e.target.value);
            }
            const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                  setEmail(e.target.value);
            }
            const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  setMessage(e.target.value);
            }

            const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            if (!name || !email || !message) {
                  alert('Please fill out all required fields.')
                  return;
            }

            emailjs
            .sendForm(
                  'service_l1h85mp',
                  'template_jnb6wva',
                  form.current!,
                  'cwpUG3_DAFgTCu0Mh'
            )
            .then(
                  (result) => {
                  console.log(result.text);
                  setName('');
                  setEmail('');
                  setMessage('');
                  },
                  (error) => {
                  console.log(error.text);
                  }
                  );
            };
      
      return (
            <>
            <hr />
            <form ref={form} onSubmit={sendEmail} method='post' className='FORM' > <span id='contacText'> Contact Here</span> <br/>
                  <label htmlFor="name" className='labels'>Name*</label>
                  <input 
                  type="text" 
                  name='to_name' 
                  className='formInput' 
                  placeholder='Add name'
                  value={name}
                  onChange={handleNameChange}
                  />
                  <label htmlFor="email" className='labels'>Email*</label>
                  <input 
                  type="email" 
                  name='from_name' 
                  className='formInput' 
                  placeholder='example@gmail.com'
                  value={email}
                  onChange={handleEmailChange}
                  />
                  <label htmlFor="message" className='labels'>Message*</label>
                  <textarea 
                  name="message" 
                  className='formInput' 
                  cols={30} rows={10} 
                  placeholder='Type here...'
                  value={message}
                  onChange={handleMessageChange}
                  />
                  <button id='formSubmit' type='submit'>Send</button>
                  <p id='formsText'></p>
            </form>
            </>
            )
}

export default Form;