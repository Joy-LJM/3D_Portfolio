import { motion } from 'framer-motion'
import { styles } from '../styles'
import { technologies } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const TechCard = ({ index, name, icon }: { index: number; name: string; icon: string }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.1, 0.75)}
    className="w-28 h-28 green-pink-gradient p-[1px] rounded-full shadow-card"
  >
    <div className="bg-tertiary rounded-full py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
      <img src={icon} alt={name} className="w-16 h-16 object-contain" />
      <h3 className="text-white text-[14px] font-bold text-center">{name}</h3>
    </div>
  </motion.div>
)

export default function Tech() {
  return (
    <section id="tech" className={`${styles.padding} relative z-0`}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies I work with</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {technologies.map((technology, index) => (
          <TechCard key={technology.name} index={index} {...technology} />
        ))}
      </div>
    </section>
  )
}