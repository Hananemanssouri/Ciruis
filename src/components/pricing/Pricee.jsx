import React from 'react'
import "./price.css"
import Back from '../common/back/Back'
import PriceCard from './PriceCard'
import Faqq from './Faqq'

const Pricee = () => {
  return (
    <div>
        <Back title="Wählen Sie den richtigen Plan"/>
        
        <section className='price padding'>
            <div className="container grid">
               <PriceCard/>
            </div>

        </section>
        
    </div>
  )
}

export default Pricee