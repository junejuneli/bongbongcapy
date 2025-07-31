import { motion } from 'framer-motion'
import { Download as DownloadIcon, Apple, Monitor, Star, Users, Trophy } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { getLatestVersion, formatFileSize, getPlatformDownloadUrl } from '../utils/version'

interface PlatformDownload {
  platform: 'mac' | 'windows' | 'linux'
  downloadUrl: string
  size: number
  filename: string
}

const Download = () => {
  const { t } = useTranslation()
  const [downloads, setDownloads] = useState<PlatformDownload[]>([])
  const [currentVersion, setCurrentVersion] = useState<string>('')
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchLatestVersion = async () => {
      try {
        const versionInfo = await getLatestVersion()
        console.log('versionInfo', versionInfo);
        
        if (versionInfo) {
          setDownloads(versionInfo.downloads)
          setCurrentVersion(versionInfo.version)
        }
      } catch (error) {
        console.error('Failed to fetch version info:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchLatestVersion()
  }, [])
  
  const stats = [
    { icon: Users, number: '10K+', label: t('download.stats.users') },
    { icon: Star, number: '4.9', label: t('download.stats.rating') },
    { icon: Trophy, number: '3', label: t('download.stats.awards') }
  ]

  const platforms = [
    {
      name: t('download.platforms.windows.name'),
      icon: Monitor,
      description: t('download.platforms.windows.description'),
      platform: 'windows' as const,
      available: true
    },
    {
      name: t('download.platforms.macos.name'),
      icon: Apple,
      description: t('download.platforms.macos.description'),
      platform: 'mac' as const,
      available: true
    },
    {
      name: t('download.platforms.linux.name'),
      icon: Monitor,
      description: t('download.platforms.linux.description'),
      platform: 'linux' as const,
      available: true
    }
  ]

  const features = t('download.features', { returnObjects: true }) as string[]

  const handleDownload = (platform: 'mac' | 'windows' | 'linux') => {
    const downloadUrl = getPlatformDownloadUrl(downloads, platform)
    if (downloadUrl) {
      // 创建隐藏的下载链接来避免页面跳动
      const link = document.createElement('a')
      link.href = downloadUrl
      link.download = '' // 让浏览器决定文件名
      link.style.display = 'none'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const getPlatformInfo = (platform: 'mac' | 'windows' | 'linux') => {
    const download = downloads?.find(d => d.platform === platform)
    return download ? {
      available: true,
      size: formatFileSize(download.size)
    } : {
      available: false,
      size: ''
    }
  }

  return (
    <section id="download" className="section-padding relative overflow-hidden bg-gradient-to-br from-capy-50 via-lotus-50 to-pond-50">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lotus-200 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pond-200 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-3/4 left-3/4 w-80 h-80 bg-capy-200 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* 统计数据 */}
        <motion.div
          className="grid grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-capy-500 to-lotus-500 rounded-2xl mb-4 shadow-lg">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 主要下载区域 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 左侧：下载信息 */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-capy-100 to-pond-100 rounded-full mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <DownloadIcon className="w-5 h-5 text-capy-600" />
              <span className="text-capy-700 font-semibold font-cute">{t('download.badge')}</span>
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">
              <span className="text-gradient">{t('download.title')}</span>
              <br />
              <span className="text-gray-800">{t('download.subtitle')}</span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 font-body">
              {t('download.description')}
            </p>

            {/* 特色亮点 */}
            <motion.div
              className="grid gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-3 text-lg font-body"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                >
                  <span>{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* 右侧：平台选择 */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {platforms.map((platform, index) => {
              const platformInfo = getPlatformInfo(platform.platform)
              return (
                <motion.div
                  key={platform.name}
                  className={`card-float p-8 ${
                    platformInfo.available 
                      ? 'cursor-pointer hover:shadow-2xl' 
                      : 'opacity-60'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={platformInfo.available ? { y: -5, scale: 1.02 } : {}}
                >
                  <div className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-4">
                    <div className="flex items-center gap-4 sm:gap-6 flex-1 min-w-0">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center ${
                        platformInfo.available 
                          ? 'bg-gradient-to-r from-capy-500 to-lotus-500' 
                          : 'bg-gray-400'
                      }`}>
                        <platform.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2 flex items-center gap-3 font-display">
                          {platform.name}
                          <span className="text-sm font-normal bg-capy-100 text-capy-700 px-2 py-1 rounded-full min-w-[3rem] text-center">
                            {currentVersion ? `v${currentVersion}` : 'v0.0.0'}
                          </span>
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 font-body min-h-[1.25rem]">
                          {platform.description}
                          <span className="ml-2 text-xs text-gray-500 inline-block min-w-[3rem]">
                            {platformInfo.size ? `(${platformInfo.size})` : '(--.--)'}
                          </span>
                        </p>
                      </div>
                    </div>
                    
                    {platformInfo.available ? (
                      <motion.button
                        className="btn-primary px-3 py-2 sm:px-6 sm:py-3 text-sm sm:text-base whitespace-nowrap flex-shrink-0 disabled:opacity-50 min-w-[6rem] sm:min-w-[8rem]"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleDownload(platform.platform)}
                        disabled={loading}
                      >
                        <DownloadIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                        <span className="min-w-[3rem] text-center">
                          {loading ? 'Loading' : t('download.download')}
                        </span>
                      </motion.button>
                    ) : (
                      <div className="px-3 py-2 sm:px-6 sm:py-3 bg-gray-200 text-gray-500 rounded-full font-semibold font-cute text-sm sm:text-base whitespace-nowrap flex-shrink-0 min-w-[6rem] sm:min-w-[8rem] text-center">
                        {t('download.waiting')}
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* 底部额外信息 */}
        <motion.div
          className="text-center mt-20 p-8 card-float"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4 font-display">{t('download.requirements.title')}</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="font-semibold text-capy-600 mb-3 font-cute">{t('download.requirements.windows')}</h4>
              <ul className="space-y-2 text-gray-600 font-body text-sm">
                <li>• {t('download.requirements.items.os_windows')}</li>
                <li>• {t('download.requirements.items.memory')}</li>
                <li>• {t('download.requirements.items.storage')}</li>
                <li>• {t('download.requirements.items.network')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lotus-600 mb-3 font-cute">{t('download.requirements.macos')}</h4>
              <ul className="space-y-2 text-gray-600 font-body text-sm">
                <li>• {t('download.requirements.items.os_macos')}</li>
                <li>• {t('download.requirements.items.memory')}</li>
                <li>• {t('download.requirements.items.storage')}</li>
                <li>• {t('download.requirements.items.network')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-pond-600 mb-3 font-cute">{t('download.requirements.linux')}</h4>
              <ul className="space-y-2 text-gray-600 font-body text-sm">
                <li>• {t('download.requirements.items.os_linux')}</li>
                <li>• {t('download.requirements.items.memory')}</li>
                <li>• {t('download.requirements.items.storage')}</li>
                <li>• {t('download.requirements.items.network')}</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Download