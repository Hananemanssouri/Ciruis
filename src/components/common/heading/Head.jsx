import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import "./header.css"



const Head = () => {
  return (
    <>
        <section className='head'>
            <div className="container flexSB">
                <div className="container flexSB">
                    <div className="logo" id='titre'>
                        <h1>CIRIUS</h1>
                        <span>Online lernen und Zertifikate erwerben</span>
                       

                    </div>
                    <div className='social'>
                        <i className='fab fa-facebook-f icon'></i>
                        <i className='fab fa-instagram icon'></i>
                        <i className='fab fa-twitter icon'></i>
                        <i className='fab fa-youtube icon'></i>
                    </div>
                </div>

            </div>

        </section>

    </>
  )
}

export default Head