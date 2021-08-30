import { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { githubGreen, linkedInIcon } from '../../Assets/Images/Icons';
import './Contact.css';

function Contact() {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [resultVis, setResultVis] = useState(false);
  const [result, setResult] = useState(0);

  const handleChange = (e) => {
    setResultVis(false);
    setResult(0);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const res= await emailjs.sendForm('gmail', 'template_d38wos3', e.target,'user_fNbL7kytUyuA4WrHiz6F8');
    console.log(res.status);
    setResult(res.status);
    e.target.reset();
  }

  const toggleVisibility = () => {
    setResultVis((prev)=>!prev);
  }

  const setMessageResultClass = () => {
    return resultVis ? "message-status" : "message-status invisible";
  }

  const setMessage = () => {
    if(!result) {
      return "Sending...";
    } else if (result >= 200 && result<300 ) {
      return "Message Sent";
  } else {
    return "Unable to Send";
  }
}

  return (
    <section id="contact-section">
    <div className="comp-screen-co">
      
      <div className="title-co">
        <h1 className="co-title">Contact Me</h1>
      </div>

      <div className="contact-form-div">
        <form className="contact-me-form" onSubmit={handleSubmit}>
          <div className="label-input-div">
            <label htmlFor="name-input" className="contact-form-label">Name:</label>
            < input 
              type="text"
              name="name" 
              id="name-input"
              className="message-input"
              onChange={handleChange}
              />
          </div>

          <div className="label-input-div">
            <label htmlFor="email-input" className="contact-form-label">Email:</label>
            < input 
              type="text" 
              name="email"
              id="email-input"
              className="message-input"
              onChange={handleChange}
              />
          </div>

          <div className="label-input-div">
            <label htmlFor="message-input" className="contact-form-label">Message:</label>
            < textarea 
              id="message-input"
              className="message-input"
              name="message"
              onChange={handleChange}
              />
          </div>

          <div className="message-status-div">
            <p className={setMessageResultClass()}>{setMessage()}</p>
          </div>
          
          <button className="send-button" onClick={toggleVisibility}>Send</button>
        </form>
      </div>

      <div className="contact-icons-div">
        <a href="https://github.com/girlwithcodes" target="_blank" rel="noopener noreferrer">{githubGreen}</a>
        <a href="https://www.linkedin.com/in/heather-mantooth-grlwcds/" target="_blank" rel="noopener noreferrer">{linkedInIcon}</a>
      </div>

      <div className="nav-links-sk">
        <Link to="/" className="home-button">Home</Link>
        <Link to="/about-me" className="about-me-button">About Me</Link>
        <Link to="/skills" className="my-skills-button">My Skills</Link>
        <Link to="/projects" className="my-projects-button">My  Projects</Link>
      </div>
    </div>
  </section>
  )
}

export default Contact;