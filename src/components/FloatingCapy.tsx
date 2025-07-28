import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconX } from '@tabler/icons-react'
import { useTranslation } from 'react-i18next'

const FloatingCapy = () => {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)
  const [currentMessage, setCurrentMessage] = useState(0)

  const messages = t('floating.messages', { returnObjects: true }) as string[]

  useEffect(() => {
    // 页面加载后延迟显示
    const showTimer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    // 定期更换消息
    const messageTimer = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % messages.length)
    }, 8000)

    return () => {
      clearTimeout(showTimer)
      clearInterval(messageTimer)
    }
  }, [])

  // 自动隐藏
  useEffect(() => {
    if (isVisible) {
      const hideTimer = setTimeout(() => {
        setIsVisible(false)
      }, 10000) // 10秒后自动隐藏

      return () => clearTimeout(hideTimer)
    }
  }, [isVisible, currentMessage])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 20,
            duration: 0.6 
          }}
        >
          {/* 消息气泡 */}
          <motion.div
            className="absolute bottom-20 right-0 max-w-xs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-4 border-2 border-capy-200 relative">
              <p className="text-gray-700 text-sm leading-relaxed">
                {messages[currentMessage]}
              </p>
              
              {/* 气泡尾巴 */}
              <div className="absolute bottom-[-8px] right-6 w-4 h-4 bg-white border-r-2 border-b-2 border-capy-200 transform rotate-45" />
            </div>
          </motion.div>

          {/* 卡皮巴拉容器 */}
          <motion.div
            className="relative"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, 0, -5, 0] 
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            {/* 关闭按钮 */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-600 hover:bg-gray-700 text-white rounded-full flex items-center justify-center text-xs transition-colors z-10"
            >
              <IconX size={12} />
            </button>

            {/* 卡皮巴拉图片 */}
            <motion.div
              className="w-24 h-24 bg-gradient-to-br from-capy-400 to-capy-600 rounded-full shadow-2xl cursor-pointer overflow-hidden border-4 border-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                // 点击时换一条消息
                setCurrentMessage(prev => (prev + 1) % messages.length)
              }}
            >
              <img
                src="/images/icon圆.png"
                alt="卡皮巴拉"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* 光晕效果 */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-capy-300 to-lotus-300 rounded-full opacity-20 blur-lg -z-10"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />

            {/* 心形粒子效果 */}
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 text-lotus-400"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: [0, Math.cos((i * 60) * Math.PI / 180) * 40],
                  y: [0, Math.sin((i * 60) * Math.PI / 180) * 40],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeOut"
                }}
              >
                💖
              </motion.div>
            ))}
          </motion.div>

          {/* 点击提示 */}
          <motion.div
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 whitespace-nowrap font-cute"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {t('floating.click')}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FloatingCapy 