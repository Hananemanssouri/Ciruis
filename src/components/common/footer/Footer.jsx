import React from 'react'
import "./footer.css"
import { blog } from '../../../dummydata'
const Footer = () => {
  return (
    <>
        {/* <section className='newletter'>
            <div className="container flexSB">
                <div className="left row">
                <h1>Newsletter - Bleiben Sie auf dem Laufenden und erhalten Sie die neuesten Informationen</h1>
                <span>Far far away, behind the word mountains</span>
                </div>
                <div className="right row">
                    <input type="text" placeholder='E-Mail Adresse eingeben '/>
                    <i className='fa fa-paper-plane'></i>

                </div>
            </div>

        </section> */}
        <footer>
            <div className="container padding">
                <div className="box logo">
                    <h1>CIRIUS</h1>
                    <span>Online lernen und Zertifikate erwerben</span>
                    <p>Lernen Sie in Ihrem eigenen Tempo und erwerben Sie Online-Zertifizierungen, um Ihre Karriere anzukurbeln.</p>
                    <i className='fab fa-facebook-f icon'></i>
                    <i className='fab fa-twitter icon'></i>
                    <i className='fab fa-instagram icon'></i> 


                </div>
                <div className="box link">
                 <h3>Erkunden Sie</h3>
                    <ul>
                    <li>Über uns</li>
                    
                    <li>Alle Kurse</li>
                    <li>Preisgestaltung</li>
                    <li>Kontaktieren Sie uns</li>
                    </ul>
                </div>
                {/* <div className='box link'>
                    <h3>Quick Links</h3>
                    <ul>
                    <li>Contact Us</li>
                    <li>Pricing</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy</li>
                    <li>Feedbacks</li>
                    </ul>
                </div> */}
                {/* <div className="box">
                    <h3> Recent Post </h3>
                    {blog.slice(0,3).map((val)=>{
                        return (
                        <div className="items flexSB">
                            <div className="img">
                                <img src={val.cover} alt="" />
                            </div>
                            <div className="text">
                            <span>
                                <i className='fa fa-user'></i>
                                <label htmlFor=''>{val.type}</label>
                            </span>
                            <span>
                                <i className='fa fa-calendar-alt'></i>
                                <label htmlFor=''>{val.date}</label>
                            </span>
                            <h4>{val.title}</h4>
                           
                            </div>
                        </div>
                        )
                    })}
                </div> */}
                <div className="box last">
                <h3>Haben Sie eine Frage?</h3>
                    <ul>
                        <li>
                            <i className='fa fa-map'></i>
                            ESSALAM oujda N°: 14 marokko
                        </li>
                        <li>
                            <i className='fa fa-phone-alt'></i>
                            +212 673229922
                        </li>
                        <li>
                            <i className='fa fa-paper-plane'></i>
                            Ciruis@gmail.com
                        </li>
                    </ul>
                </div>
            </div>
            
        </footer>
        <div className="legal">
        <p>
        Copyright  | Diese Vorlage wurde erstellt mit <i className='fa fa-heart'></i> by Hanane Manssouri
        </p>
        </div>
    </>
  )
}

export default Footer