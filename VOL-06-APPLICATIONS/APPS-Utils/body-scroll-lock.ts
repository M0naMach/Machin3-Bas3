let activeBodyScrollLocks = 0
let previousBodyOverflow: string | null = null

export function lockBodyScroll() {
  if (typeof document === 'undefined' || !document.body) return

  if (activeBodyScrollLocks === 0) {
    previousBodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
  }

  activeBodyScrollLocks += 1
}

export function unlockBodyScroll() {
  if (typeof document === 'undefined' || !document.body) return
  if (activeBodyScrollLocks === 0) return

  activeBodyScrollLocks -= 1

  if (activeBodyScrollLocks === 0) {
    document.body.style.overflow = previousBodyOverflow ?? ''
    previousBodyOverflow = null
  }
}
