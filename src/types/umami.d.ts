declare global {
  type UmamiTrackPayload = string | Record<string, unknown> | ((...args: unknown[]) => unknown)
  type UmamiEventData = Record<string, unknown>

  interface Window {
    umami?: {
      track: (eventName?: UmamiTrackPayload, eventData?: UmamiEventData) => void
      identify: (userId?: string | UmamiEventData, userData?: UmamiEventData) => void
    }
  }
  
  const umami: {
    track: (eventName?: UmamiTrackPayload, eventData?: UmamiEventData) => void
    identify: (userId?: string | UmamiEventData, userData?: UmamiEventData) => void
  }
}

export {}
