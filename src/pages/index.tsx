import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next'

import styles from 'styles/home.module.scss'
import { Header } from 'components/Header'

type PageProps = {
  title: string
}
const Home: NextPage<PageProps> = ({ title }) => (
  <div className="site-content">
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
  </div>
)

export const getStaticProps: GetStaticProps = async () => {
  const title = 'Rachi - Tudo que você precisa em um só lugar'
  return { props: { title } }
}

export default Home
