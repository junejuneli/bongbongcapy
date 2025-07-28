import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import CostumeGallery from './components/CostumeGallery'
import Download from './components/Download'
import Footer from './components/Footer'
import FloatingCapy from './components/FloatingCapy'
import LanguageDetector from './components/LanguageDetector'
import { getRecommendedLanguage } from './utils/languageUtils'
import ClickEffect from './components/ClickEffect'

function App() {
  const { i18n } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // 初始化语言检测和设置
  useEffect(() => {
    // 获取推荐的语言（优先用户设置，其次浏览器检测）
    const recommendedLanguage = getRecommendedLanguage()
    i18n.changeLanguage(recommendedLanguage)
  }, [i18n])

  // 根据当前语言设置html的lang属性
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = i18n.language
    }
  }, [i18n.language])

  if (!mounted) return null

  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Navigation />
      <LanguageDetector />
      <main>
        <Hero />
        <Features />
        <CostumeGallery />
        <Download />
      </main>
      <Footer />
      <FloatingCapy />
      <ClickEffect />
    </motion.div>
  )
}

export default App 