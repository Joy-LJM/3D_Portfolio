import { motion } from 'framer-motion'
import { styles } from '../styles'
import { slideIn } from '../utils/motion'

export default function Contact() {
  const contactInfo = {
    contacts: [
      {
        name: 'GitHub',
        url: 'https://github.com/Joy-LJM',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/jiamin-luo/',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg'
      },
      {
        name: 'GMail',
        url: '`mailto:joy00ff00@gmail.com`',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg'
      }
    ]
  }

  return (
    <section id="contact" className={`${styles.padding} xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-1 bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="flex flex-col gap-8">
          <div className="mt-8">
            <div className="flex flex-wrap gap-4">
              {contactInfo.contacts.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#915EFF] transition-colors"
                >
                  <img src={social.icon} alt={social.name} className="w-7 h-7" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="flex-1 bg-tertiary rounded-2xl p-8 flex flex-col justify-center"
      >
        <div className="text-center">
          <h3 className="text-white text-2xl font-bold mb-4">Let's Connect!</h3>
          <p className="text-secondary mb-8">
            I'm always open to discussing new opportunities, creative projects, or just having a chat about technology.
          </p>
          <div className="space-y-4">
            <p className="text-white-100">
              💼 Looking for collaboration opportunities
            </p>
            <p className="text-white-100">
              🌟 Open to freelance projects
            </p>
            <p className="text-white-100">
              📚 Always learning and growing
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}