import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Head from './Head'
import "./header.css"
const Header = () => {
        
        const [click, setClick] = useState(false);

  return (
    <>
        <Head/>
        <header>
            <nav className='flexSB'>
            <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
                            <li>
                        <Link to='/'>Home</Link>
                        </li>
                        <li>
                        <Link to='/courses'>Alle Kurse</Link>
                        </li>
                        <li>
                        <Link to='/about'>Über</Link>
                        </li>
                        {/* <li>
                        <Link to='/team'>Team</Link>
                        </li> */}
                        <li>
                        <Link to='/pricing'>Preisgestaltung</Link>
                        </li>
                        {/* <li>
                        <Link to='/journal'>Zeitschrift</Link>
                        </li> */}
                        <li>
                        <Link to='/contact'>Kontakt</Link>
                        </li>
            </ul>
            <div className='start'>
                     <div className='button'>ZERTIFIKAT ERHALTEN</div>
            </div>
            <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
            </nav>
        </header>

    </>
  )
}

export default Header