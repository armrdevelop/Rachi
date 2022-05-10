import Head from 'next/head'
import { GetStaticProps } from 'next'

import styles from 'styles/home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <div>Hello World</div>
    </div>
  )
}
