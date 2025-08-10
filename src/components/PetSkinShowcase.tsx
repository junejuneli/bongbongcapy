import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { 
  IconSparkles, 
  IconHeart, 
  IconStar,
  IconWand
} from '@tabler/icons-react'

interface SkinData {
  id: number
  name: string
  image: string
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
  category: string
  description: string
}

const PetSkinShowcase = () => {
  const { t } = useTranslation()
  const [selectedSkin, setSelectedSkin] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const skins: SkinData[] = [
    { id: 1, name: t('petSkins.skin1', { defaultValue: '财神卡皮' }), image: '/images/skins/外观1.png', rarity: 'legendary', category: t('petSkins.category.festival', { defaultValue: '节日' }), description: t('petSkins.desc1', { defaultValue: '手持金元宝，Money+1，老板看了想加薪' }) },
    { id: 2, name: t('petSkins.skin2', { defaultValue: '功德大师' }), image: '/images/skins/外观2.png', rarity: 'epic', category: t('petSkins.category.zen', { defaultValue: '禅意' }), description: t('petSkins.desc2', { defaultValue: '功德+1，坐莲花打坐，老板都不好意思让你加班' }) },
    { id: 3, name: t('petSkins.skin3', { defaultValue: '夏日摸鱼王' }), image: '/images/skins/外观3.png', rarity: 'rare', category: t('petSkins.category.vacation', { defaultValue: '度假' }), description: t('petSkins.desc3', { defaultValue: '墨镜汉堡配泳圈，上班如度假，摸鱼界的MVP' }) },
    { id: 4, name: t('petSkins.skin4', { defaultValue: '干饭水豚' }), image: '/images/skins/外观4.png', rarity: 'rare', category: t('petSkins.category.foodie', { defaultValue: '美食' }), description: t('petSkins.desc4', { defaultValue: '头顶橘子手拿葱，柯基屁股做垫子，萌到老板舍不得骂' }) },
    { id: 5, name: t('petSkins.skin5', { defaultValue: '开箱盲盒达人' }), image: '/images/skins/外观5.png', rarity: 'epic', category: t('petSkins.category.gamer', { defaultValue: '玩家' }), description: t('petSkins.desc5', { defaultValue: '哈哈！开出电视机和巧克力便便，欧皇本豚就是我' }) },
    { id: 6, name: t('petSkins.skin6', { defaultValue: '新年发财豚' }), image: '/images/skins/外观6.png', rarity: 'epic', category: t('petSkins.category.newyear', { defaultValue: '新年' }), description: t('petSkins.desc6', { defaultValue: '锣鼓喧天红包来，敲响新年第一桶金' }) },
    { id: 7, name: t('petSkins.skin7', { defaultValue: '环保打工豚' }), image: '/images/skins/外观7.png', rarity: 'common', category: t('petSkins.category.eco', { defaultValue: '环保' }), description: t('petSkins.desc7', { defaultValue: '开垃圾车也要戴绿帽，打工豚的自我修养' }) },
  ]

  const rarityColors = {
    common: 'from-gray-400 to-gray-600',
    rare: 'from-blue-400 to-blue-600',
    epic: 'from-purple-400 to-purple-600',
    legendary: 'from-yellow-400 to-orange-600'
  }

  const rarityGlow = {
    common: 'shadow-gray-400/50',
    rare: 'shadow-blue-400/50',
    epic: 'shadow-purple-400/50',
    legendary: 'shadow-yellow-400/50'
  }

  useEffect(() => {
    if (!isAutoPlay) return
    const interval = setInterval(() => {
      setSelectedSkin((prev) => (prev + 1) % skins.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlay, skins.length])


  const getCardPosition = (index: number) => {
    const diff = index - selectedSkin
    const totalSkins = skins.length
    const adjustedDiff = diff > totalSkins / 2 ? diff - totalSkins : diff < -totalSkins / 2 ? diff + totalSkins : diff
    
    return {
      x: adjustedDiff * 120,
      z: -Math.abs(adjustedDiff) * 100,
      scale: 1 - Math.abs(adjustedDiff) * 0.15,
      opacity: Math.max(0.3, 1 - Math.abs(adjustedDiff) * 0.3),
      rotateY: adjustedDiff * -15
    }
  }

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-capy-50 via-lotus-50 to-pond-50">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {i % 3 === 0 ? (
              <IconSparkles size={16} className="text-capy-400/40" />
            ) : i % 3 === 1 ? (
              <IconHeart size={14} className="text-lotus-400/40" />
            ) : (
              <IconStar size={15} className="text-pond-400/40" />
            )}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 标题部分 */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <IconWand size={28} className="text-lotus-500" />
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold">
              <span className="text-gradient bg-gradient-to-r from-capy-500 via-lotus-500 to-pond-500 bg-clip-text">
                {t('petSkins.title', { defaultValue: '水豚换装秀' })}
              </span>
            </h2>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <IconSparkles size={28} className="text-capy-500" />
            </motion.div>
          </motion.div>
          <p className="text-lg text-gray-600 font-body max-w-2xl mx-auto">
            {t('petSkins.subtitle', { defaultValue: '解锁各种可爱装扮，打造独一无二的水豚伙伴' })}
          </p>
        </motion.div>

        {/* 3D 卡片展示区 */}
        <div className="relative h-[560px] perspective-1000">
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence mode="sync">
              {skins.map((skin, index) => {
                const position = getCardPosition(index)
                const isActive = index === selectedSkin
                
                return (
                  <motion.div
                    key={skin.id}
                    className="absolute"
                    style={{
                      zIndex: skins.length - Math.abs(index - selectedSkin),
                      perspective: 1000,
                    }}
                    initial={false}
                    animate={{
                      x: position.x,
                      z: position.z,
                      scale: position.scale,
                      opacity: position.opacity,
                      rotateY: position.rotateY,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    onClick={() => {
                      if (!isActive) {
                        setIsAutoPlay(false)
                        setSelectedSkin(index)
                      }
                    }}
                  >
                    <motion.div
                      className={`relative w-96 h-[420px] rounded-2xl overflow-hidden ${
                        isActive ? 'cursor-default' : 'cursor-pointer'
                      } transform-gpu`}
                      whileHover={!isActive ? { scale: 1.02 } : {}}
                    >
                      {/* 稀有度光效 */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${rarityColors[skin.rarity]} opacity-90`} />
                      
                      {/* 卡片内容 */}
                      <div className="relative h-full p-4 flex flex-col items-center justify-between">
                        {/* 稀有度标签 */}
                        <motion.div 
                          className="absolute top-4 right-4 z-20"
                          animate={isActive ? {
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.1, 1],
                          } : {}}
                          transition={{
                            duration: 2,
                            repeat: isActive ? Infinity : 0,
                          }}
                        >
                          <div className={`px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm shadow-lg ${rarityGlow[skin.rarity]}`}>
                            <span className={`text-xs font-bold bg-gradient-to-r ${rarityColors[skin.rarity]} bg-clip-text text-transparent uppercase`}>
                              {skin.rarity}
                            </span>
                          </div>
                        </motion.div>

                        {/* 分类标签 */}
                        <div className="absolute top-4 left-4 z-20">
                          <div className="px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm">
                            <span className="text-xs font-medium text-gray-700">
                              {skin.category}
                            </span>
                          </div>
                        </div>

                        {/* 装扮图片 */}
                        <motion.div 
                          className="relative w-80 h-80"
                          animate={isActive ? {
                            y: [0, -10, 0],
                          } : {}}
                          transition={{
                            duration: 3,
                            repeat: isActive ? Infinity : 0,
                            ease: "easeInOut"
                          }}
                        >
                          <img
                            src={skin.image}
                            alt={skin.name}
                            className="w-full h-full object-contain drop-shadow-2xl"
                            style={{
                              filter: isActive ? 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' : 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))'
                            }}
                          />
                          
                          {/* 悬浮光环 */}
                          {isActive && (
                            <motion.div
                              className="absolute inset-0 -z-10"
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0.8, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                              }}
                            >
                              <div className={`w-full h-full rounded-full bg-gradient-to-r ${rarityColors[skin.rarity]} blur-2xl`} />
                            </motion.div>
                          )}
                        </motion.div>

                        {/* 装扮信息 */}
                        <div className="text-center space-y-0 -mt-4">
                          <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                            {skin.name}
                          </h3>
                          <p className="text-base text-white/90 px-4">
                            {skin.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

        </div>

        {/* 缩略图导航 */}
        <div className="flex justify-center gap-3 mt-12">
          {skins.map((skin, index) => (
            <motion.button
              key={skin.id}
              onClick={() => {
                setIsAutoPlay(false)
                setSelectedSkin(index)
              }}
              className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                index === selectedSkin 
                  ? 'border-capy-500 shadow-lg shadow-capy-500/50' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={skin.image}
                alt={skin.name}
                className="w-full h-full object-cover"
              />
              {index === selectedSkin && (
                <motion.div
                  className="absolute inset-0 bg-capy-500/20"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PetSkinShowcase