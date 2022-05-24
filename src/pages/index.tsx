import Head from 'next/head'
import { GetStaticProps } from 'next'

import styles from 'styles/home.module.scss'
import { Header } from 'components/Header'

export default function Home() {
  return (
    <div className="site-content">
      <Header />
    </div>
  )
}
