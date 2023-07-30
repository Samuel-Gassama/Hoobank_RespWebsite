import React from 'react'
import {card} from '../assets'
import styles , { layout } from '../style'
import Button from './Button'

const CardDeal = () => (

<section className={layout.section}>
  <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
      Find a better card deal <br className='sm:block hidden'/> in a few easy steps.    </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}> 
        Searching for the ideal credit card can be overwhelming, but it doesn't have to be. 
        Our user-friendly platform makes finding the best card deal a breeze. With a few easy steps, 
        you can compare a wide range of credit cards tailored to your preferences and needs. 
        Finding your dream card has never been this effortless!
        </p>
     <Button styles= "mt-10 rounded-[10px]"/>
  </div>

  <div className={layout.sectionImg}>
    <img src= { card } alt= "card"  className=''/>



  </div>
</section>

)
  

export default CardDeal