// import Head from 'next/head'
import CTA from '../../components/cta'
import FAQ from '../../components/faq'
import Feature from '../../components/feature'
import Hero from '../../components/hero'

export default function Home() {
  return (
    <div>
      <head>
        <title>DigiSync</title>
        {/* <meta name="description" content="Generated by create " /> */}
      </head>

      <main >
        <section id='hero'>
          <Hero/>
        </section>

        <section id='feature'>
          <Feature/>
        </section>

        <section id="faq">
          <FAQ/>
        </section>

        <section id='cta'>
          <CTA/>
        </section>

      </main>

    </div>
  )
}