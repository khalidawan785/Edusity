import React from 'react'
import './Contact.css'
import msg_icon from '../../Images/msg-icon.png'
import mail_icon from '../../Images/mail-icon.png'
import phone_icon from '../../Images/phone-icon.png'
import location_icon from '../../Images/location-icon.png'
import white_arrow from '../../Images/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "bd749bfd-ec18-4cc6-a114-d945bc3d9f29");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };

    return (
            <div className="contact">
                <div className="contact-col">
                    <h2>Send us a message<img src={msg_icon} alt="" /></h2>
                    <p>
                       Feel free to reach out through contact form or find our contact information below.
                        Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community. 
                    </p>
                    <ul>
                        <li><img src={mail_icon} alt="" /><p>Contact@GreatStack.dev</p></li>
                        <li><img src={phone_icon} alt="" /><p>+1 123-456-7890</p></li>
                        <li><img src={location_icon} alt="" /><p>77 Massachusetts Ave, Cambridge MA 02139, United States</p></li>
                    </ul>
                </div>
                <div className="contact-col">
                    <form onSubmit={onSubmit}>
                        <label>Your name</label>
                        <input type='text' name='name' placeholder='Enter your name' required/>

                        <label>Phone Number</label>
                        <input type='tel' name='phone' placeholder='Enter your mobile number' required/>

                        <label>Your Email</label>
                        <input type='email' name='email' placeholder='Enter your email id' required/>

                        <label>Write your message here</label>
                        <textarea  name='message' placeholder='Enter your message'  rows="6"/>
                    
                        <button type='submit' className='btn dark-btn'>submit now<img src={white_arrow} alt="" /></button>
                    </form>
                    <p>{result}</p>
                </div>
            </div>
    )
}

export default Contact
