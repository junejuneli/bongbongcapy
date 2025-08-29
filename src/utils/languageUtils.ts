// 支持的语言列表
export const SUPPORTED_LANGUAGES = ['zh', 'en', 'ja'] as const
export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number]

// 语言信息映射
export const LANGUAGE_INFO = {
  zh: {
    name: '中文',
    nativeName: '中文',
    flag: '🇨🇳',
    code: 'zh'
  },
  en: {
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    code: 'en'
  },
  ja: {
    name: '日本語',
    nativeName: '日本語',
    flag: '🇯🇵',
    code: 'ja'
  }
} as const

/**
 * 检测浏览器语言
 * @returns 检测到的语言代码
 */
export const detectBrowserLanguage = (): SupportedLanguage => {
  // 获取浏览器语言
  const browserLanguage = navigator.language || navigator.languages?.[0] || 'zh'
  
  // 提取主要语言部分（去掉地区代码）
  const mainLang = browserLanguage.split('-')[0].toLowerCase()
  
  // 检查是否支持该语言
  if (SUPPORTED_LANGUAGES.includes(mainLang as SupportedLanguage)) {
    return mainLang as SupportedLanguage
  }
  
  // 如果不支持，返回默认中文
  return 'zh'
}

/**
 * 获取用户设置的语言
 * @returns 用户设置的语言代码，如果没有设置则返回null
 */
export const getUserLanguage = (): SupportedLanguage | null => {
  const userLanguage = localStorage.getItem('i18nextLng')
  
  if (userLanguage && SUPPORTED_LANGUAGES.includes(userLanguage as SupportedLanguage)) {
    return userLanguage as SupportedLanguage
  }
  
  return null
}

/**
 * 设置用户语言
 * @param language 语言代码
 */
export const setUserLanguage = (language: SupportedLanguage): void => {
  localStorage.setItem('i18nextLng', language)
}

/**
 * 获取URL中的语言参数
 * @returns URL中的语言代码，如果没有或无效则返回null
 */
export const getLanguageFromURL = (): SupportedLanguage | null => {
  const urlParams = new URLSearchParams(window.location.search)
  const urlLang = urlParams.get('lang')
  
  if (urlLang && SUPPORTED_LANGUAGES.includes(urlLang as SupportedLanguage)) {
    return urlLang as SupportedLanguage
  }
  
  return null
}

/**
 * 设置URL中的语言参数
 * @param language 语言代码
 */
export const setLanguageInURL = (language: SupportedLanguage): void => {
  const url = new URL(window.location.href)
  url.searchParams.set('lang', language)
  window.history.replaceState({}, '', url.toString())
}

/**
 * 获取推荐的语言
 * @returns 推荐的语言代码
 */
export const getRecommendedLanguage = (): SupportedLanguage => {
  // 1. 优先使用URL参数中的语言
  const urlLanguage = getLanguageFromURL()
  if (urlLanguage) {
    return urlLanguage
  }
  
  // 2. 其次使用用户设置的语言
  const userLanguage = getUserLanguage()
  if (userLanguage) {
    return userLanguage
  }
  
  // 3. 最后使用浏览器检测的语言
  return detectBrowserLanguage()
}

/**
 * 检查是否是首次访问
 * @returns 是否是首次访问
 */
export const isFirstVisit = (): boolean => {
  return !getUserLanguage()
}

/**
 * 获取语言显示信息
 * @param language 语言代码
 * @returns 语言显示信息
 */
export const getLanguageInfo = (language: SupportedLanguage) => {
  return LANGUAGE_INFO[language]
}

/**
 * 获取所有支持的语言信息
 * @returns 所有支持的语言信息数组
 */
export const getAllLanguageInfo = () => {
  return SUPPORTED_LANGUAGES.map(lang => LANGUAGE_INFO[lang])
} 