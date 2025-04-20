import React from 'react'
import "./contact.css"
import Back from '../common/back/Back'

const Contact = () => {
const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6562.390103142716!2d-1.9309523075622614!3d34.6750263557107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sma!4v1741650863856!5m2!1sfr!2sma" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
        <Back title="Kontaktieren Sie uns"/>
        <section className='contact padding'>
            <div className="container shadow flexSB">
                <div className="left row">
                    <iframe src={map}></iframe>
                </div>
                <div className="right row">
                    <h1>Kontaktieren Sie uns</h1>
                    <p>Kontaktieren Sie uns Wir sind offen für jeden Vorschlag oder einfach nur für ein Gespräch</p>
                    <div className="items grid2">
                        <div className="box">
                        <h4>ANSCHRIFT:</h4>
                        <p> ESSALAM oujda N°: 14 marokko</p>
                        </div>
                        <div className='box'>
                            <h4>EMAIL:</h4>
                            <p> Ciruis@gmail.com</p>
                        </div>
                        <div className='box'>
                            <h4>PHONE:</h4>
                            <p> +212 673229922</p>
                        </div>
                    </div>
                    <form action="">
                        <div className="flexSB">
                            <input type='text' placeholder='Name' />
                            <input type='email' placeholder='Email' />
                        </div>
                        <input type='text' placeholder='Betreff' />
                        <textarea cols='30' rows='10'>
                        Erstellen Sie hier eine Nachricht...
                        </textarea>
                        <button className='primary-btn'>NACHRICHTEN SENDEN</button>

                    </form>
                    {/* <h3>Folgen Sie uns hier</h3>
                    <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span> */}
                </div>
            </div>

        </section>
    </>
  )
}

export default Contact