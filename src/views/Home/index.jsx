import CTA from '../../components/home/cta'
import FAQ from '../../components/home/faq'
import Feature from '../../components/home/feature'
import Hero from '../../components/home/hero'


 function Home() {
  return (
    <div>
      <main className='mx-auto xl:max-w-6xl' >
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