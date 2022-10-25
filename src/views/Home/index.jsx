import CTA from '../../components/cta'
import FAQ from '../../components/faq'
import Feature from '../../components/feature'
import Hero from '../../components/hero'


 function Home() {
  return (
    <div>
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
export default Home;