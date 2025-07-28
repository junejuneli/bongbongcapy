import { motion } from 'framer-motion'
import { IconClock, IconHeart, IconSparkles, IconGift, IconDeviceGamepad2, IconCoffee } from '@tabler/icons-react'
import { useTranslation } from 'react-i18next'

const Features = () => {
  const { t } = useTranslation()
  
  const features = [
    {
      icon: IconCoffee,
      title: t('features.items.companion.title'),
      description: t('features.items.companion.description'),
      color: 'capy',
      gradient: 'from-capy-400 to-capy-600'
    },
    {
      icon: IconHeart,
      title: t('features.items.healing.title'),
      description: t('features.items.healing.description'),
      color: 'lotus',
      gradient: 'from-lotus-400 to-lotus-600'
    },
    {
      icon: IconSparkles,
      title: t('features.items.blessing.title'),
      description: t('features.items.blessing.description'),
      color: 'pond',
      gradient: 'from-pond-400 to-pond-600'
    },
    {
      icon: IconGift,
      title: t('features.items.collection.title'),
      description: t('features.items.collection.description'),
      color: 'capy',
      gradient: 'from-capy-500 to-lotus-500'
    },
    {
      icon: IconDeviceGamepad2,
      title: t('features.items.idle.title'),
      description: t('features.items.idle.description'),
      color: 'lotus',
      gradient: 'from-lotus-500 to-pond-500'
    },
    {
      icon: IconClock,
      title: t('features.items.time.title'),
      description: t('features.items.time.description'),
      color: 'pond',
      gradient: 'from-pond-500 to-capy-500'
    }
  ]

  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-lotus-200 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pond-200 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* 标题区域 */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-capy-100 to-lotus-100 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <IconSparkles size={20} className="text-capy-600" />
            <span className="text-capy-700 font-semibold font-cute">{t('features.badge')}</span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-display font-bold mb-4 sm:mb-6">
            <span className="text-gradient">{t('features.title')}</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-body px-4">
            {t('features.subtitle')}
          </p>
        </motion.div>

        {/* 特色网格 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="card-float p-4 sm:p-6 lg:p-8 text-center group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* 图标 */}
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r ${feature.gradient} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <feature.icon size={32} className="sm:w-10 sm:h-10 text-white" />
              </motion.div>

              {/* 标题 */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-capy-600 group-hover:to-lotus-600 group-hover:bg-clip-text transition-all duration-300 font-cute">
                {feature.title}
              </h3>

              {/* 描述 */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-body">
                {feature.description}
              </p>

              {/* 装饰性底边 */}
              <motion.div
                className={`h-1 bg-gradient-to-r ${feature.gradient} rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>

        {/* 底部CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a
            href="#download"
            className="btn-primary inline-flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconHeart size={20} />
            {t('features.cta')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Features 