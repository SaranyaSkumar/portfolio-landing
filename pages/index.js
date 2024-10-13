// pages/index.js
import Head from 'next/head';
import Layout from './components/layout'; // Import the Layout component
import Main from './components/main';  // Ensure this matches your file name
import Appointment from './components/appointment'; // Import the Appointment component
import ExperienceHighlights from './components/experience';
import Testimonials from './components/testimonials';
import Gallery from './components/gallery';
import Footer from './components/footer';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Sijah Sadique</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative z-10" >
      <div className='w-half inset-0 bg-white bg-opacity-30 backdrop-blur-md'>
          <Main />
          <Appointment />
          <ExperienceHighlights/>
          <Testimonials />
          <Gallery />
          <Footer />
        </div>

      </main>

      {/* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" />
        </a>
      </footer> */}
    </Layout>
  );
}
