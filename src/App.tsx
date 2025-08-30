import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import PetSkinShowcase from './components/PetSkinShowcase'
import CostumeGallery from './components/CostumeGallery'
import Download from './components/Download'
import Footer from './components/Footer'
import LanguageDetector from './components/LanguageDetector'
import { getRecommendedLanguage } from './utils/languageUtils'
import ClickEffect from './components/ClickEffect'
import { trackEvent, trackPageView, AnalyticsEvents } from './utils/analytics'

declare global {
  interface Window {
    GameEvent: {
      emit: (event: string, data?: any) => void;
    };
    /**
     * // 敲击
     * window.GameEvent.emit('press-pet')
     * // 切换随机装扮
     * window.GameEvent.emit('change-random-skin',{owned:false})
     * // 切换指定的装扮
     * window.GameEvent.emit('render-skin',{type: 'ownId'})
     */
  }
}

function App() {
  const { i18n } = useTranslation();
  // 初始化语言检测和设置
  useEffect(() => {
    // 获取推荐的语言（优先用户设置，其次浏览器检测）
    const recommendedLanguage = getRecommendedLanguage()
    i18n.changeLanguage(recommendedLanguage)
  }, [i18n])

  // 根据当前语言设置html的lang属性和追踪页面视图
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = i18n.language
      
      // 追踪页面视图和语言设置
      trackPageView(window.location.pathname, document.title)
      trackEvent(AnalyticsEvents.PAGE_VIEW_WITH_LANGUAGE, { 
        language: i18n.language,
        user_agent: navigator.userAgent,
        screen_resolution: `${screen.width}x${screen.height}`,
        viewport: `${window.innerWidth}x${window.innerHeight}`
      })
    }
  }, [i18n.language])

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
        <PetSkinShowcase />
        <CostumeGallery />
        <Download />
      </main>
      <Footer />
      <ClickEffect />
    </motion.div>
  )
}

export default App 