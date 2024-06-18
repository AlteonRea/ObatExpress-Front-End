import React from 'react'
import {
  apple,
  bill,
  google,
  deliveryTracking,
} from '../../../assets/LandingPage'
import styles, { layout } from '../../../styles/style'
import Button from '../../../common/Button'

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={deliveryTracking}
        alt="bill"
        className="w-[100%] relative z-5"
      />

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Track Your Deliveries <br /> In Real Time
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Stay informed with live updates on your deliveries. Our advanced
        tracking system ensures you know the status of your package every step
        of the way.
      </p>
      <div className="flex flex-wrap sm:mt-10 mt-6">
        <Button />
      </div>
    </div>
  </section>
)

export default Billing
