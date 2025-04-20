import React from 'react'
import "./hero.css"
import Title from "../../common/title/Title"

const Hero = () => {
  return (
    <>
        <section className='hero'>
            <div className="container">
                <div className="row">
                  <Title subtitle='Willkommen in der CiRIUS-Center-Welt' title='Online lernen und Zertifikate erwerben' />
                    <p>Lernen Sie in Ihrem eigenen Tempo und erwerben Sie Online-Zertifizierungen, um Ihre Karriere anzukurbeln. Erweitern Sie Ihre Fähigkeiten mit interaktiven Kursen, auf die Sie überall und jederzeit zugreifen können!</p>
                <div className="button">
                    <button className='primary-btn'>
                    JETZT STARTEN<i className='fa fa-long-arrow-alt-right'></i>
                    </button>
                    <button>
                    KURSE ANSEHEN <i className='fa fa-long-arrow-alt-right'></i>
              </button>
                </div>
                </div>
            </div> 
        </section>
        <div className='marigin'></div>
    </>
  )
}

export default Hero