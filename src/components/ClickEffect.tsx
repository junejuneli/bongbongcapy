import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ClickEffectItem {
  id: string
  x: number
  y: number
  image: string
  timestamp: number
}

// 特效图片列表
const effectImages = [
  '/capy_skins/qf_hz5/qf_hz5_q_1_gd.png',
  '/capy_skins/qf_hz5/qf_hz5_q_2_money.png',
  '/capy_skins/qf_hz5/qf_hz5_q_3_boom.png',
  '/capy_skins/qf_hz5/qf_hz5_q_4_lucky.png',
  '/capy_skins/qf_hz5/qf_hz5_q_5_sq.png',
  '/capy_skins/qf_hz5/qf_hz5_q_6_dingdan.png',
  '/capy_skins/qf_hz5/qf_hz5_q_7_haha.png',
  '/capy_skins/qf_hz5/qf_hz5_q_8_shanguang.png',
  '/capy_skins/qf_hz5/qf_hz5_q_9_dayan.png',
  '/capy_skins/qf_hz5/qf_hz5_q_10_zhonzhi.png',
  '/capy_skins/qf_hz5/qf_hz5_q_11_jinbi.png',
  '/capy_skins/qf_hz5/qf_hz5_q_12_facai.png'
]

const ClickEffect = () => {
  const [effects, setEffects] = useState<ClickEffectItem[]>([])

  // 计算最佳显示位置，避免超出屏幕边界
  const calculateOptimalPosition = (clickX: number, clickY: number) => {
    const effectSize = 80 // 特效图片大小
    const margin = 20 // 边距
    const maxOffset = 60 // 最大偏移距离

    // 在点击位置周围随机偏移
    const randomOffsetX = (Math.random() - 0.5) * maxOffset * 2
    const randomOffsetY = (Math.random() - 0.5) * maxOffset * 2

    let x = clickX + randomOffsetX
    let y = clickY + randomOffsetY

    // 确保不超出屏幕边界
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight

    x = Math.max(margin, Math.min(x, screenWidth - effectSize - margin))
    y = Math.max(margin, Math.min(y, screenHeight - effectSize - margin))

    return { x, y }
  }

  // 处理点击事件
  const handleClick = useCallback((event: MouseEvent) => {
    // 看看有没有 iframe 内嵌
    if (window.GameEvent) {
      window.GameEvent.emit('press-pet')
    }

    const { clientX, clientY } = event
    const { x, y } = calculateOptimalPosition(clientX, clientY)

    // 随机选择特效图片
    const randomImage = effectImages[Math.floor(Math.random() * effectImages.length)]

    const newEffect: ClickEffectItem = {
      id: `effect-${Date.now()}-${Math.random()}`,
      x,
      y,
      image: randomImage,
      timestamp: Date.now()
    }

    setEffects(prev => [...prev, newEffect])

    // 2秒后自动移除特效
    setTimeout(() => {
      setEffects(prev => prev.filter(effect => effect.id !== newEffect.id))
    }, 2000)
  }, [])

  // 添加全局点击监听
  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [handleClick])

  // 清理过期特效
  useEffect(() => {
    const cleanup = setInterval(() => {
      const now = Date.now()
      setEffects(prev => prev.filter(effect => now - effect.timestamp < 3000))
    }, 1000)

    return () => clearInterval(cleanup)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      <AnimatePresence>
        {effects.map((effect) => (
          <motion.div
            key={effect.id}
            className="absolute w-20 h-20"
            style={{
              left: effect.x - 40, // 居中显示
              top: effect.y - 40,
            }}
            initial={{
              opacity: 0,
              scale: 0,
              y: 20
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1.2, 1, 0.8],
              y: [0, -30, -50]
            }}
            exit={{
              opacity: 0,
              scale: 0,
              y: -60
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              times: [0, 0.2, 0.8, 1]
            }}
          >
            <motion.img
              src={effect.image}
              alt="点击特效"
              className="w-full h-full object-contain drop-shadow-lg"
              animate={{
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 0.6,
                repeat: 1,
                ease: "easeInOut"
              }}
              onError={(e) => {
                // 图片加载失败时的处理
                (e.target as HTMLImageElement).style.display = 'none'
              }}
            />

            {/* 光晕效果 */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-capy-400/30 via-lotus-400/30 to-pond-400/30 rounded-full blur-lg -z-10"
              animate={{
                scale: [0, 1.5, 2],
                opacity: [0.6, 0.3, 0]
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut"
              }}
            />

            {/* 星星粒子效果 */}
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: [0, Math.cos((i * 72) * Math.PI / 180) * 30],
                  y: [0, Math.sin((i * 72) * Math.PI / 180) * 30],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
              />
            ))}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default ClickEffect