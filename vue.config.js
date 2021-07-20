module.exports = {
  pwa: {
    themeColor: "#ffc107",
    iconPaths: {
      favicon32: 'icons/favicon-32x32.png',
      favicon16: 'icons/favicon-16x16.png',
      appleTouchIcon: 'icons/apple-touch-icon-152x152.png',
      maskIcon: 'icons/safari-pinned-tab.svg',
      msTileImage: 'icons/msapplication-icon-144x144.png'
    },
    manifestOptions: {
      name: "Yolior",
      short_name: "Yolior",
      description: "Доставка еды в Славгороде",
      theme_color: "#ffc107",
      background_color: "#ffffff",
      display: "standalone",
      orientation: "portrait",
      start_url: ".",
      icons: [{
        'src': '/icons/android-chrome-192x192.png',
        'sizes': '192x192',
        'type': 'image/png'
      },
      {
        'src': '/icons/android-chrome-512x512.png',
        'sizes': '512x512',
        'type': 'image/png'
      },
      {
        'src': '/icons/android-chrome-maskable-192x192.png',
        'sizes': '192x192',
        'type': 'image/png', 'purpose': 'maskable'
      },
      {
        'src': '/icons/android-chrome-maskable-512x512.png',
        'sizes': '512x512',
        'type': 'image/png',
        'purpose': 'maskable'
      }]
    }
  }
}