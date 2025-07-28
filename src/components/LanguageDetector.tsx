import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconLanguage } from '@tabler/icons-react'
import { isFirstVisit, detectBrowserLanguage, getLanguageInfo } from '../utils/languageUtils'

const LanguageDetector = () => {
  const [showDetector, setShowDetector] = useState(false)
  const [detectedLang, setDetectedLang] = useState('')

  useEffect(() => {
    // 检查是否是首次访问
    if (isFirstVisit()) {
      // 检测浏览器语言
      const detected = detectBrowserLanguage()
      
      // 如果检测到的语言不是默认中文，显示检测提示
      if (detected !== 'zh') {
        setDetectedLang(detected)
        setShowDetector(true)
        
        // 3秒后自动隐藏
        setTimeout(() => {
          setShowDetector(false)
        }, 3000)
      }
    }
  }, [])

  const getLanguageMessage = (lang: string) => {
    const messageMap = {
      zh: '检测到您使用中文，已自动切换到中文界面',
      en: 'Detected English, switched to English interface',
      ja: '日本語を検出し、日本語インターフェースに切り替えました'
    }
    return messageMap[lang as keyof typeof messageMap] || messageMap.zh
  }

  const handleConfirm = () => {
    setShowDetector(false)
  }

  const handleChange = () => {
    setShowDetector(false)
    // 用户可以通过导航栏的语言选择器手动切换
  }

  if (!showDetector) return null

  const langInfo = getLanguageInfo(detectedLang as 'zh' | 'en' | 'ja')
  const message = getLanguageMessage(detectedLang)

  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <div className="glass-morphism rounded-2xl p-4 shadow-2xl max-w-sm">
          <div className="flex items-center gap-3 mb-3">
            <IconLanguage size={20} className="text-capy-600" />
            <span className="text-lg font-display font-semibold text-gray-800">
              语言检测
            </span>
          </div>
          
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">{langInfo.flag}</span>
            <span className="font-cute text-gray-700">{langInfo.name}</span>
          </div>
          
          <p className="text-sm text-gray-600 font-body mb-4">
            {message}
          </p>
          
          <div className="flex gap-2">
            <motion.button
              onClick={handleConfirm}
              className="flex-1 px-3 py-2 bg-capy-500 text-white rounded-lg text-sm font-cute hover:bg-capy-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              确认
            </motion.button>
            <motion.button
              onClick={handleChange}
              className="flex-1 px-3 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-cute hover:bg-gray-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              切换语言
            </motion.button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default LanguageDetector 