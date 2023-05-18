import '@/styles/globals.css'
import {useEffect} from 'react'

export default function App({Component, pageProps}) {
  useEffect(() => {
    window.OneSignal = window.OneSignal || []
    console.log('🚀 window.OneSignal', window.OneSignal)
    OneSignal.push(function () {
      OneSignal.init({
        appId: 'ff826b93-6cf7-4be2-aa41-c1567a95aade',
        safari_web_id:
          'web.onesignal.auto.61cc1b76-79db-483e-a0b9-263210abb193',
        notifyButton: {
          enable: true,
        },
        // allowLocalhostAsSecureOrigin: true,
        // subdomainName: 'bng123',
      })
    })
    return () => {
      window.OneSignal = undefined
    }
  }, []) // <-- run this effect once on mount
  return <Component {...pageProps} />
}
