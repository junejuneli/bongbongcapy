import { motion } from 'framer-motion'
import { IconSparkles, IconHeart, IconStar, IconDownload, IconPlayerPlay } from '@tabler/icons-react'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 lg:pt-0">
      {/* 背景图片 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url('/图片/背景图1438.jpg')`,
        }}
      />
      
      {/* 渐变覆盖层 */}
      <div className="absolute inset-0 bg-gradient-to-br from-pond-100/80 via-lotus-100/60 to-capy-100/80" />
      
      {/* 浮动元素装饰 */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-lotus-300 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* 左侧文字内容 */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
          >
            {/* 标题 */}
            <div className="space-y-4">
              <motion.div
                className="flex items-center justify-center lg:justify-start gap-2 text-capy-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconSparkles size={24} />
                </motion.div>
                <span className="text-lg font-cute font-medium">{t('hero.tagline')}</span>
                <motion.div
                  whileHover={{ rotate: -360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconSparkles size={24} />
                </motion.div>
              </motion.div>
              
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-display font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <span className="text-gradient bg-gradient-to-r from-capy-600 via-lotus-600 to-pond-600 bg-clip-text">
                  {t('hero.title')}
                </span>
                <br />
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-700 font-cute">
                  {t('hero.subtitle')}
                </span>
              </motion.h1>
            </div>

            {/* 描述 */}
            <motion.div
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <p>
                {t('hero.description.line1', { 
                  highlight1: t('hero.description.highlight1') 
                }).split(t('hero.description.highlight1')).map((part, index) => (
                  <span key={index}>
                    {part}
                    {index === 0 && (
                      <span className="text-capy-600 font-semibold font-cute">
                        {t('hero.description.highlight1')}
                      </span>
                    )}
                  </span>
                ))}
              </p>
              <p className="mt-2">{t('hero.description.line2')}</p>
              <p className="mt-2">
                {t('hero.description.line3', { 
                  highlight2: t('hero.description.highlight2') 
                }).split(t('hero.description.highlight2')).map((part, index) => (
                  <span key={index}>
                    {part}
                    {index === 0 && (
                      <span className="text-lotus-600 font-semibold font-cute">
                        {t('hero.description.highlight2')}
                      </span>
                    )}
                  </span>
                ))}
              </p>
            </motion.div>

            {/* 特色标签 */}
            <motion.div
              className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              {[
                { icon: IconHeart, text: t('hero.features.healing'), color: 'lotus' },
                { icon: IconStar, text: t('hero.features.collection'), color: 'capy' },
                { icon: IconSparkles, text: t('hero.features.blessing'), color: 'pond' },
              ].map((item) => (
                <motion.div
                  key={item.text}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass-morphism font-cute font-medium text-sm sm:text-base`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon size={18} className={`text-${item.color}-600`} />
                  </motion.div>
                  <span className={`text-${item.color}-700`}>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA按钮 */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <motion.a
                href="#download"
                className="btn-primary font-cute inline-flex items-center gap-3 text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconDownload size={18} />
                </motion.div>
                {t('hero.cta.download')}
              </motion.a>
              <motion.a
                href="#gameplay"
                className="btn-secondary font-cute inline-flex items-center gap-3 text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconPlayerPlay size={18} />
                </motion.div>
                {t('hero.cta.learn')}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* 右侧宣传图 */}
          <motion.div
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="relative"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 1, -1, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.img
                src="/图片/主宣传图1232.jpg"
                alt={t('hero.title')}
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto rounded-3xl shadow-2xl"
                whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
                transition={{ duration: 0.8 }}
              />
              
              {/* 装饰性光晕 */}
              <div className="absolute -inset-4 bg-gradient-to-r from-capy-200 via-lotus-200 to-pond-200 rounded-3xl blur-xl opacity-60 -z-10" />
            </motion.div>

            {/* 浮动装饰元素 */}
            <motion.div
              className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-lotus-400 to-lotus-600 rounded-full flex items-center justify-center shadow-lg"
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ 
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
              whileHover={{ scale: 1.2 }}
            >
              <IconHeart size={24} className="text-white" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pond-400 to-pond-600 rounded-full flex items-center justify-center shadow-lg"
              animate={{ rotate: -360, scale: [1, 1.2, 1] }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity }
              }}
              whileHover={{ scale: 1.3 }}
            >
              <IconStar size={20} className="text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 滚动提示 - 调整位置避免与图片重合 */}
      <motion.div
        className="absolute bottom-8 sm:bottom-12 lg:bottom-16 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ 
          y: [0, 8, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-capy-400/60 rounded-full flex justify-center glass-morphism/50">
                      <motion.div
              className="w-1 h-3 bg-capy-400/70 rounded-full mt-2"
            animate={{ 
              y: [0, 10, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero 