import CTA from '~/components/home/LandingPage/cta';
import FAQ from '~/components/home/LandingPage/faq';
import Feature from '~/components/home/LandingPage/feature';
import Hero from '~/components/home/LandingPage/hero';

 function Home() {
  return (
    <div>
      <main className='mx-auto xl:max-w-6xl' >
        <section id='hero'>
          <Hero/>
        </section>

        {/* <section id="connect handles">
          <Handles/>
        </section> */}

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