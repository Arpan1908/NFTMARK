import React from 'react'
import styles,{layout} from "./style";
import { spaceship,card } from '../assets';

function Logout() {
  return (
    <div>
        <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Join Our Community Now!!!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Buys and Sell NFTs from all around the world with us
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:mr-0  my-10 relative`}>
        <img src={spaceship} className="w-[100%] h-[100%] relative z-[5]" alt="" srcset="" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"/>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>


  </section>
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Discover new NFTs from all around the Globe <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:mr-0  my-10 relative`}>
        <img src={card} className="w-[100%] h-[100%] relative z-[5]" alt="" srcset="" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"/>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>

    
  </section>
    </div>
    
  )
}

export default Logout