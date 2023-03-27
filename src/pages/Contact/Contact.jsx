import {useRef} from 'react'
import emailjs from '@emailjs/browser'

import style from './contact.module.css'


export default function Contact() {
    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'default_service',
            'contact',
            refForm.current,
            'UMvFpiPWhDXrd2QRF'
        )
        .then(() => {
            alert("Message successfully sent!")
            refForm.current.reset()
        },
        () => {
            alert("Failed to send the message, please try again.")
        })
        .catch(e => console.log(e))
    }

    return (
        <div className={style.contact_form}>
            <div className={style.info_container}>
                <div className={style.contact_info}>
                    <h1 className={style.form_header}>Contact</h1>
                    <p>Looking forward to hearing from you</p>
                </div>
                <div className={style.contact_info}>
                    <h3>Phone</h3>
                    <p>1 (337) 884-7885</p>
                </div>
                <div className={style.contact_info}>
                    <h3>Email</h3>
                    <p>gavinbarham@yahoo.com</p>
                </div>
            </div>
            <div>
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className={style.input}>
                            <label htmlFor='name'>Name</label>
                            <input type="text" name="name" required/>
                        </li>
                        <li className={style.input}>
                            <label htmlFor='email'>Email</label>
                            <input type="email" name="email" required/>
                        </li>
                        <li className={style.input}>
                            <label htmlFor='subject'>Subject</label>
                            <input type="text" name="subject" required/>
                        </li>
                        <li className={style.input}>
                            <label htmlFor='message'>Message</label>
                            <textarea className={style.text_area} name="message" required/>
                        </li>       
                    </ul>
                    <div className={style.input}>
                        <button className={style.send} type="submit">send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}