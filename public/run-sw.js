window.addEventListener('load', async () => {
  if (navigator.serviceWorker) {
    try {
      const reg = await navigator.serviceWorker.register('/sw.js')
      console.log('SW success register:', reg)
    } catch (error) {
      console.log('SW rerister with error:', error)
    }
  }
})