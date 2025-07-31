interface PlatformDownload {
  platform: 'mac' | 'windows' | 'linux'
  downloadUrl: string
  size: number
  filename: string
}

interface LatestVersionInfo {
  version: string
  productName: string
  buildTime: string
  downloads: PlatformDownload[]
}

/**
 * 获取最新版本信息
 */
export async function getLatestVersion(): Promise<LatestVersionInfo | null> {
  try {
    const response = await fetch('/versions/latest.json')
    if (!response.ok) return null
    
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Failed to get latest version:', error)
    return null
  }
}

/**
 * 格式化文件大小
 */
export function formatFileSize(bytes: number): string {
  const units = ['B', 'KB', 'MB', 'GB']
  let size = bytes
  let unitIndex = 0
  
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024
    unitIndex++
  }
  
  return `${size.toFixed(1)} ${units[unitIndex]}`
}

/**
 * 获取平台对应的下载链接
 */
export function getPlatformDownloadUrl(downloads: PlatformDownload[], platform: 'mac' | 'windows' | 'linux'): string | null {
  const download = downloads.find(d => d.platform === platform)
  return download?.downloadUrl || null
}