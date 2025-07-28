import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconSparkles, IconCrown, IconShirt, IconHeart } from '@tabler/icons-react'
import { useTranslation } from 'react-i18next'
import { costumes } from '../data/costumes'

const CostumeGallery = () => {
  const { t, i18n } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState('headwear')

  const categories = [
    { id: 'headwear', name: t('costumes.categories.headwear'), icon: IconCrown },
    { id: 'clothing', name: t('costumes.categories.clothing'), icon: IconShirt },
    { id: 'merit', name: t('costumes.categories.merit'), icon: IconHeart },
  ]

  const filteredCostumes = costumes.filter(costume => costume.category === selectedCategory)

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'from-yellow-400 to-yellow-600'
      case 'epic': return 'from-purple-400 to-purple-600'
      case 'rare': return 'from-blue-400 to-blue-600'
      default: return 'from-gray-400 to-gray-600'
    }
  }

  const getRarityBorder = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'border-yellow-400 shadow-yellow-400/50'
      case 'epic': return 'border-purple-400 shadow-purple-400/50'
      case 'rare': return 'border-blue-400 shadow-blue-400/50'
      default: return 'border-gray-400 shadow-gray-400/50'
    }
  }

  return (
    <section id="costumes" className="section-padding relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-lotus-50 via-transparent to-pond-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* 标题区域 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 glass-morphism rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <IconSparkles size={20} className="text-lotus-600" />
            <span className="text-lotus-700 font-cute font-semibold">{t('costumes.badge')}</span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-display font-bold mb-4 sm:mb-6">
            <span className="text-gradient">{t('costumes.title')}</span>
            <br />
            <span className="text-gray-800">{t('costumes.subtitle')}</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-body px-4">
            {t('costumes.description')}
          </p>
        </motion.div>

        {/* 分类选择器 */}
        <motion.div
          className="flex justify-center mb-8 sm:mb-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-wrap justify-center glass-morphism rounded-full p-1 sm:p-2 shadow-xl border border-white/40 gap-1 sm:gap-0">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full font-cute font-medium transition-all duration-300 text-sm sm:text-base ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-lotus-500 to-pond-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-lotus-600 hover:bg-white/30'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <category.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                </motion.div>
                <span className="hidden xs:inline">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* 服装网格 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredCostumes.map((costume, index) => (
                              <motion.div
                  key={costume.id}
                  className={`card-float p-2 sm:p-3 cursor-pointer group border-2 ${getRarityBorder(costume.rarity)}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => console.log('查看服装:', costume.name[i18n.language as keyof typeof costume.name])}
                >
                {/* 稀有度标签 */}
                <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getRarityColor(costume.rarity)}`}>
                  {t(`costumes.rarity.${costume.rarity}`)}
                </div>

                {/* 服装图片 - 更小的尺寸 */}
                <div className="aspect-square mb-2 sm:mb-3 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <motion.img
                    src={costume.image}
                    alt={costume.name[i18n.language as keyof typeof costume.name]}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/icon圆.png'
                    }}
                    whileHover={{ rotate: [0, 2, -2, 0] }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {/* 服装信息 */}
                <div className="text-center">
                  <h3 className="font-bold text-gray-800 mb-1 sm:mb-2 group-hover:text-lotus-600 transition-colors font-cute text-xs sm:text-sm">
                    {costume.name[i18n.language as keyof typeof costume.name]}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2 font-body leading-tight hidden sm:block">
                    {costume.description[i18n.language as keyof typeof costume.description]}
                  </p>
                </div>

                {/* 悬停效果 */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-lotus-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />

                {/* 微妙的光晕效果 */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-capy-200 via-lotus-200 to-pond-200 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"
                  initial={false}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* 底部提示 */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg text-gray-600 mb-6 font-body">
            {t('costumes.more')}
          </p>
          <motion.a
            href="#download"
            className="btn-primary inline-flex items-center gap-3 font-cute"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <IconCrown size={20} />
            </motion.div>
            {t('costumes.cta')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default CostumeGallery 