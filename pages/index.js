import styles from '@/styles/Home.module.css'
import {Inter} from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <script
          src='https://cdn.onesignal.com/sdks/OneSignalSDK.js'
          async=''
        ></script>

        <link rel='manifest' href='/manifest.json' />
        <meta name='theme-color' content='#fff' />

        {/* <Script
          src='https://cdn.onesignal.com/sdks/OneSignalSDK.js'
          strategy="worker"
        /> */}
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src='/next.svg'
            alt='Next.js Logo'
            width={180}
            height={37}
            priority
          />
        </div>
        <h1>
          {' '}
          Go to <Link href='/page2'> Page2 </Link>
        </h1>
      </main>
    </>
  )
}
