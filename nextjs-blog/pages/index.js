import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostData } from '../lib/posts'

export async function getStaticprops() {
  const allPostsData = getSortedPostData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostData }) {
  return (
    <Layout home>
    <Head>
    <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
    <p>Trying to figure it out!</p>
    <p>
      (This is a sample website - you'll be building a site like this on{' '}
      <a href= "https://nextjs.org/learn">our Next.js tutorial</a>.)
    </p>
    </section> 
    
    <section className={`${utilStyles.headingMd} ${utilStyles.passing1px}`}>
    <h2 className={utilStyles.headingLg}>Blog</h2>
    <ul className={utilStyles.list}>
      {allPostData.map(({ id, date, title }) => (
      <li className={utilStyles.listItem} key={id}>
      {title}
      <br />
      {id}
      <br />
      {date}
      </li>
      ))}
    </ul>
  </section>
  </Layout>
  )
}
