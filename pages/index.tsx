import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useMutation } from '../convex/_generated/react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const createRace = useMutation('createRace');
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Tug of War Typeracer | LMHS Coding Club</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to LMHS Coding Club's <a href="https://tugofwartyperacer.lmhscodingclub.com">Tug of War Typeracer</a>
        </h1>

        <p className={styles.description}>

        </p>
        <button className={styles.button} onClick={async () => { 
          const id = await createRace(); 
          router.push(`/race?id=${id}`); 
        }}>
          Create a Race
        </button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.convex.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/convex.svg" alt="Convex Logo" width={90} height={18} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
