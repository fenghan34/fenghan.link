export const clientSideCallback = <T>(callback: () => T) => {
  if (typeof window !== 'undefined') {
    return callback()
  }
}
