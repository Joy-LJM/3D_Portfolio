import { motion } from 'framer-motion'
import { styles } from '../styles'
import { slideIn } from '../utils/motion'

export default function Contact() {
  const contactInfo = {
    email: 'your-email@example.com',
    location: 'City, Country',
    socialMedia: [
      {
        name: 'GitHub',
        url: 'https://github.com/yourusername',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/yourusername',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/yourusername',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg'
      },
      {
        name: 'Instagram',
        url: 'https://instagram.com/yourusername',
        icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg'
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

        <div className="mt-12 flex flex-col gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-tertiary rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-medium">Email</h4>
                <a href={`mailto:${contactInfo.email}`} className="text-secondary hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-tertiary rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-tertiary rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-medium">Location</h4>
                <p className="text-secondary">{contactInfo.location}</p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-8">
            <h4 className="text-white font-medium mb-6 text-xl">Follow Me</h4>
            <div className="flex flex-wrap gap-4">
              {contactInfo.socialMedia.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 bg-tertiary rounded-full flex items-center justify-center hover:bg-[#915EFF] transition-colors"
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