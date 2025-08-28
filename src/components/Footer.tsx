import { motion } from 'framer-motion'
import { IconHeart, IconMail, IconBrandGithub, IconBrandTwitter, IconBrandDiscord } from '@tabler/icons-react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: t('footer.sections.game.title'),
      links: [
        { name: t('footer.sections.game.download'), href: '#download' },
        { name: t('footer.sections.game.features'), href: '#features' },
        { name: t('footer.sections.game.gameplay'), href: '#gameplay' },
        { name: t('footer.sections.game.costumes'), href: '#costumes' }
      ]
    },
    {
      title: t('footer.sections.support.title'),
      links: [
        { name: t('footer.sections.support.guide'), href: '#' },
        { name: t('footer.sections.support.faq'), href: '#' },
        { name: t('footer.sections.support.tech'), href: '#' },
        { name: t('footer.sections.support.feedback'), href: '#' }
      ]
    },
    {
      title: t('footer.sections.community.title'),
      links: [
        { name: t('footer.sections.community.qq'), href: '#' },
        { name: t('footer.sections.community.wechat'), href: '#' },
        { name: t('footer.sections.community.forum'), href: '#' },
        { name: t('footer.sections.community.blog'), href: '#' }
      ]
    }
  ]

  const socialLinks = [
    { icon: IconBrandGithub, href: '#', label: 'GitHub' },
    { icon: IconBrandTwitter, href: '#', label: 'Twitter' },
    { icon: IconBrandDiscord, href: '#', label: 'Discord' },
    { icon: IconMail, href: 'mailto:contact@bongbongcapy.com', label: 'Email' }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-capy-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-lotus-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* 主要内容区域 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* 品牌信息 */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="/images/icon圆.png"
                  alt="敲好运 Logo"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gradient bg-gradient-to-r from-capy-400 to-lotus-400 bg-clip-text text-transparent font-display">
                    敲好运
                  </h3>
                  <p className="text-gray-400 font-cute">BongBongCapy</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 font-body">
                {t('footer.description')}
              </p>

              {/* 社交链接 */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-capy-500 hover:to-lotus-500 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* 链接区域 */}
            <div className="lg:col-span-3 grid md:grid-cols-3 gap-8">
              {footerLinks.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + sectionIndex * 0.1 }}
                >
                  <h4 className="text-lg font-semibold mb-6 text-white font-display">
                    {section.title}
                  </h4>
                  <ul className="space-y-4">
                    {section.links.map((link, linkIndex) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 + sectionIndex * 0.1 + linkIndex * 0.05 }}
                      >
                        <a
                          href={link.href}
                          className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline font-body"
                        >
                          {link.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* 分隔线 */}
        <div className="border-t border-white/10" />

        {/* 版权信息 */}
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 font-body">
              <span>{t('footer.copyright', { year: currentYear })}</span>
              <span>{t('footer.made')}</span>
              <IconHeart size={16} className="text-red-400 animate-pulse" />
              <span>{t('footer.for')}</span>
            </div>
            
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors font-body">{t('footer.links.privacy')}</a>
              <a href="#" className="hover:text-white transition-colors font-body">{t('footer.links.terms')}</a>
              <a href="#" className="hover:text-white transition-colors font-body">{t('footer.links.cookies')}</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 