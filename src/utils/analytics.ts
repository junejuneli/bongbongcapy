/**
 * Umami 事件追踪工具函数
 */

export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof umami !== 'undefined') {
    umami.track(eventName, eventData)
  }
}

export const trackPageView = (url?: string, title?: string) => {
  if (typeof umami !== 'undefined') {
    umami.track({ url, title })
  }
}

export const identifyUser = (userId?: string, userData?: Record<string, any>) => {
  if (typeof umami !== 'undefined') {
    umami.identify(userId, userData)
  }
}

// 预定义的事件类型
export const AnalyticsEvents = {
  // 导航相关
  NAVIGATION_CLICK: 'navigation-click',
  MOBILE_NAVIGATION_CLICK: 'mobile-navigation-click',
  LANGUAGE_CHANGE: 'language-change',
  MOBILE_LANGUAGE_CHANGE: 'mobile-language-change',
  
  // CTA 按钮
  HERO_CTA_CLICK: 'hero-cta-click',
  FEATURES_CTA_CLICK: 'features-cta-click',
  COSTUME_GALLERY_CTA_CLICK: 'costume-gallery-cta-click',
  
  // 下载相关
  APP_DOWNLOAD: 'app-download',
  DOWNLOAD_ERROR: 'download-error',
  
  // 功能交互
  FEATURE_CARD_CLICK: 'feature-card-click',
  PET_SKIN_SELECT: 'pet-skin-select',
  PET_SKIN_THUMBNAIL_CLICK: 'pet-skin-thumbnail-click',
  COSTUME_CATEGORY_SELECT: 'costume-category-select',
  COSTUME_SELECT: 'costume-select',
  
  // 游戏引擎交互
  PET_INTERACTION: 'pet-interaction',
  GAME_EVENT_EMIT: 'game-event-emit',
  
  // 社交和外链
  SOCIAL_LINK_CLICK: 'social-link-click',
  FOOTER_LINK_CLICK: 'footer-link-click',
  
  // 页面行为
  PAGE_VIEW_WITH_LANGUAGE: 'page-view-with-language',
  
  // 错误追踪
  IMAGE_LOAD_ERROR: 'image-load-error',
  VERSION_FETCH_ERROR: 'version-fetch-error',
} as const

// 便捷的错误追踪方法
export const trackError = (errorType: string, errorDetails?: Record<string, any>): void => {
  trackEvent('error', {
    error_type: errorType,
    ...errorDetails
  })
}