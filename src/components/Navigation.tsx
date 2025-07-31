import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { IconMenu2, IconX, IconWorld } from '@tabler/icons-react'
import { useTranslation } from 'react-i18next'
import { getAllLanguageInfo, setUserLanguage } from '../utils/languageUtils'

const Navigation = () => {
  const { t, i18n } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: t('nav.home'), href: '#hero' },
    { name: t('nav.features'), href: '#features' },
    // { name: t('nav.gameplay'), href: '#gameplay' },
    { name: t('nav.costumes'), href: '#costumes' },
    { name: t('nav.download'), href: '#download' },
  ]

  const languages = getAllLanguageInfo()

  const changeLanguage = (lng: string) => {
    // 保存用户语言选择到 localStorage
    setUserLanguage(lng as 'zh' | 'en' | 'ja')
    i18n.changeLanguage(lng)
    setIsLangMenuOpen(false)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-morphism mx-2 sm:mx-4 mt-2 sm:mt-3'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 120 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src="/images/icon圆.png"
              alt="敲好运 Logo"
              className="w-12 h-12 rounded-full shadow-lg ring-2 ring-white/30"
              whileHover={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
            />
            <div>
              <h1 className="text-xl font-display font-bold text-gradient bg-gradient-to-r from-capy-600 via-lotus-600 to-pond-600 bg-clip-text">
                {t('hero.title')}
              </h1>
              <p className="text-sm text-gray-600 font-cute">
                {t('hero.subtitle')}
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-capy-600 font-medium font-cute transition-colors duration-200 relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-capy-500 to-lotus-500 rounded-full"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
            
            {/* Language Selector */}
            <div className="relative">
              <motion.button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="p-2 rounded-full hover:bg-white/20 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconWorld size={20} className="text-gray-600" />
                <span className="text-sm font-cute text-gray-600">
                  {languages.find(lang => lang.code === i18n.language)?.flag}
                </span>
              </motion.button>
              
              {isLangMenuOpen && (
                <motion.div
                  className="absolute top-12 right-0 glass-morphism rounded-2xl p-2 min-w-32"
                  initial={{ opacity: 0, scale: 0.8, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -10 }}
                >
                  {languages.map((lang) => (
                    <motion.button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-xl text-left font-cute transition-colors ${
                        i18n.language === lang.code
                          ? 'bg-capy-100 text-capy-700'
                          : 'hover:bg-white/20 text-gray-600'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{lang.flag}</span>
                      <span className="text-sm">{lang.name}</span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Language Selector */}
            <motion.button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="p-2 rounded-lg hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconWorld size={20} className="text-gray-600" />
            </motion.button>
            
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <IconX size={24} className="text-gray-600" />
              ) : (
                <IconMenu2 size={24} className="text-gray-600" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={isMobileMenuOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="glass-morphism-dark mx-4 mb-4 rounded-2xl p-4">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="block px-4 py-3 text-white hover:text-capy-300 hover:bg-white/10 rounded-xl transition-colors font-cute"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => setIsMobileMenuOpen(false)}
              whileHover={{ x: 10 }}
            >
              {item.name}
            </motion.a>
          ))}
          
          {/* Mobile Language Options */}
          {isLangMenuOpen && (
            <div className="mt-4 pt-4 border-t border-white/20">
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full flex items-center gap-2 px-4 py-2 rounded-xl text-left font-cute transition-colors ${
                    i18n.language === lang.code
                      ? 'bg-capy-500 text-white'
                      : 'text-white hover:bg-white/10'
                  }`}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{lang.flag}</span>
                  <span className="text-sm">{lang.name}</span>
                </motion.button>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navigation 