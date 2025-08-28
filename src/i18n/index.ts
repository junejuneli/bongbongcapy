import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// 导入语言文件
import zh from '../locales/zh.json'
import en from '../locales/en.json'
import ja from '../locales/ja.json'

const resources = {
  zh: {
    translation: zh
  },
  en: {
    translation: en
  },
  ja: {
    translation: ja
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh', // 默认语言
    fallbackLng: 'zh',
    debug: false,
    
    interpolation: {
      escapeValue: false // React 已经处理了 XSS
    },
    
    detection: {
      // 检测顺序：用户手动设置 > 浏览器语言 > 默认中文
      order: ['localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      // 缓存用户选择到 localStorage
      caches: ['localStorage'],
      // 检测的键名
      lookupLocalStorage: 'i18nextLng',
      lookupSessionStorage: 'i18nextLng',
      // 浏览器语言映射
      convertDetectedLanguage: (lng) => {
        // 支持的语言列表
        const supportedLanguages = ['zh', 'en', 'ja']
        
        // 如果是完整语言代码，提取主要语言部分
        const mainLang = lng.split('-')[0].toLowerCase()
        
        // 检查是否支持该语言
        if (supportedLanguages.includes(mainLang)) {
          return mainLang
        }
        
        // 如果不支持，返回默认中文
        return 'zh'
      }
    }
  })

export default i18n 