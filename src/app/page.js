import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Expertise from '../components/Expertise'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import Activities from '../components/Activities'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hydrosol Afrique</title>
        <meta name="description" content="Expertise géotechnique en Afrique" />
      </Head>
      <Header />
      <Hero />
      <Services />
      <Activities />
      <Expertise />
      <Projects />
      <Contact />
      <Partners />
      <Footer />
    </>
  )
}