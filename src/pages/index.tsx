import Head from 'next/head'
import { GetStaticProps } from 'next'

import styles from 'styles/home.module.scss'
import { Header } from 'components/Header'

type PageProps = {
  title: string
}
export default function Home() {
  return (
    <div className="site-content">
      <Header />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const title = 'Rachi - Tudo que você precisa em um só lugar'
  return { props: { title } }
}
