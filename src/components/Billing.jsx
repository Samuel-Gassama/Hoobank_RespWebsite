import React from 'react'
import styles from '../style'
import { layout } from '../style'
import { apple , bill, google}  from '../assets'
 



const Billing = () => (

 <section id= 'product'  className={layout.sectionReverse}>
  <div className={layout.sectionImgReverse}> 
    <img src={bill} alt= "billing" className='w-[100%] h-[100%] relative z-[5]' /> 
    
     {/* gradient start */}
     <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
  </div>

  <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
      Easily control your <br className='sm:block hidden'/> billing and invoicing
    </h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
    Say goodbye to the hassle of managing billing and invoicing manually. 
    Our efficient and user-friendly billing system empowers you to handle financial transactions effortlessly. 
    Generate professional invoices, track payments, and get paid faster. With customizable templates and automated reminders, you'll never miss a payment again. 
    Stay organized and in control of your finances with our seamless billing and invoicing solution. 
    Focus on what matters most – growing your business – while we take care of the rest. 
    Experience the convenience of modern billing and invoicing tools today.
    </p>

    <div className='flex flex-row flex-wrap sm:mt-10 mt-6'> 
      <img src={apple} alt='apple_store' className='w-[128px] h-[42px] mr-5 cursor-pointer object-contain'  />
      <img src={google} alt='google_play' className='w-[128px] h-[42px] mr-5 cursor-pointer object-contain'  />

    </div>
  </div>
 </section>
)

export default Billing