import '../../styles/index.scss'
import styles from '../../styles/style'
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from './components'

const LandingPage = () => {
  return (
    <>
      <div className=" w-full overflow-hidden">
        <Navbar />
        <div className={` ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={` ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            {/* <CardDeal /> */}
            <Testimonials />
            {/* <Clients /> */}
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
