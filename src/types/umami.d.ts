declare global {
  interface Window {
    umami?: {
      track: (eventName?: string | object | Function, eventData?: object) => void
      identify: (userId?: string | object, userData?: object) => void
    }
  }
  
  const umami: {
    track: (eventName?: string | object | Function, eventData?: object) => void
    identify: (userId?: string | object, userData?: object) => void
  }
}

export {}