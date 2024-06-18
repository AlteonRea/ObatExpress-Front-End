import React from 'react'
import { features } from '../../../constants'
import styles, { layout } from '../../../styles/style'
import Button from '../../../common/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] 
    ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-black-gradient`}
    >
      <FontAwesomeIcon
        icon={icon}
        className="text-white h-[50%] w-[50%] object-contain"
      />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-black text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
)
const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Focus on your business
          <br className="sm:block hidden" /> we'll handle delivery.
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With our seamless delivery solution, we take care of the complex
          logistics, allowing you to dedicate your time and resources to what
          truly matters. <br /> ~ growing your business.
        </p>

        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Business
