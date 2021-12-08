export const clientSideCallback = <T>(callback: () => T) => {
  if (typeof window !== 'undefined' && typeof document === 'object') {
    return callback()
  }
}

export function formatPostDate(date: string, lang?: string) {
  if (typeof Date.prototype.toLocaleDateString !== 'function') {
    return date
  }

  return new Date(date).toLocaleDateString(lang, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
