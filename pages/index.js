import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/Link'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Winery</title>
        <meta name="description" content="Winery" />

      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Winery app
        </h1>
    <div>
          <Link
            href="/admin/grape/add-grape"
            className={styles.card}
          >
            add new grape
            </Link>

            <Link
            href="/admin/grape/grapes-list"
            className={styles.card}
          >
            Grape Types
            </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
