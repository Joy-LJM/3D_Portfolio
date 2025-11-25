import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'

export default function About() {
  return (
    <section id="about" className={`${styles.padding} relative z-0`}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m a front-end developer with nearly three years of hands-on experience building responsive, user-friendly web applications. I specialize in React, JavaScript, and modern UI frameworks, and I’m currently expanding my skill set toward full-stack development.
<br/>
<br/>
        I’m passionate about great design, smooth user flows, and learning new technologies—especially anything related to AI and smart interfaces. Coding for me is a mix of creativity and problem-solving, and I enjoy improving a little every day.
      </motion.p>

      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </section>
  )
}