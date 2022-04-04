import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Chip from '../components/chip'

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://nextjs-time-api.vercel-support.app/api/time`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

function Page({ data }) {
  console.log({data})
  return (
    <div className={styles.container}>
      <main>
        HELLO {data.now}
        <Chip text="I am Chip. Click Me"/>
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



export default Page
