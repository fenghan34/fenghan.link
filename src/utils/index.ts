export const clientSideCallback = <T>(callback: () => T) => {
  if (typeof window !== 'undefined' && typeof document === 'object') {
    return callback()
  }
}
