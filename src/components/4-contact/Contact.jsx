
import  './contact.css';
import Lottie from "lottie-react" ;
import contactAnimation from "../../../src/Animations/email.json";

const Contact =()=>{
    return (
        <section className='contact-us'>
            <h1 className='title'>
                <span className='icon-envelope'></span>
                Contact me
            </h1>
            <p className='subtitle'>
                contact me for more information and get notified when i publish new something 

            </p>
            <div style={{justifyContent:"space-between"}} className="flex">
                <form className=''>

                    <div className='flex'>
                    <label htmlFor='email'> Email Address: </label>
                    <input required type='email' name="" id="email"/>
                    </div>

                    <div className="flex" style={{marginTop:"24px"}}>
                    <label htmlFor='message'>Your message:</label>
                    <textarea required name="message" id="message"></textarea>
                    </div> 

                    <button  className='submit'>Submit</button>
                </form>
                <div className="  animation">
                    <Lottie 
                    className='contact-animation'
                  
                    style={{height:250}}
                    animationData = {contactAnimation}
                    />
                </div>
            </div>

        </section>
    );

}

export default Contact;