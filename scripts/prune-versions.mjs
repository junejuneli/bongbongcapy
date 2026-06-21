import { existsSync, readdirSync, rmSync, statSync } from 'node:fs'
import { basename, join, resolve } from 'node:path'

const versionsDir = resolve('public', 'versions')
const keepCount = Number.parseInt(process.env.KEEP_VERSION_COUNT || '3', 10)
const versionPattern = /^\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?$/

function compareVersions(a, b) {
  const parse = (version) => version.split(/[+-]/)[0].split('.').map(Number)
  const left = parse(a)
  const right = parse(b)

  for (let index = 0; index < Math.max(left.length, right.length); index += 1) {
    const delta = (right[index] || 0) - (left[index] || 0)
    if (delta !== 0) return delta
  }

  return b.localeCompare(a)
}

if (!existsSync(versionsDir)) {
  console.log(`Versions directory not found: ${versionsDir}`)
  process.exit(0)
}

const versionDirs = readdirSync(versionsDir)
  .map((entry) => join(versionsDir, entry))
  .filter((entryPath) => statSync(entryPath).isDirectory())
  .map((entryPath) => basename(entryPath))
  .filter((entry) => versionPattern.test(entry))
  .sort(compareVersions)

const removed = versionDirs.slice(keepCount)

for (const version of removed) {
  rmSync(join(versionsDir, version), { recursive: true, force: true })
}

console.log(`Kept versions: ${versionDirs.slice(0, keepCount).join(', ') || 'none'}`)
console.log(`Removed versions: ${removed.join(', ') || 'none'}`)
