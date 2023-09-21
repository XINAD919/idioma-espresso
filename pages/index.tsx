import PublicLayout from "@/components/PublicLayout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home|Idioma Espresso</title>
        <meta name='description' content='sample page idoma espresso' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PublicLayout>
        <div className='h-screen'>
          <section className='' id='home'></section>
          <section className='' id='about-us'>
            <h2 className='mb-8'>About Us</h2>
          </section>
          <section className='' id='producs-and-services'>
            <h2 className='mb-8'>Products and Services</h2>
          </section>
          <section className='' id='locations'>
            <h2 className='mb-8'>Locations</h2>
          </section>
          <section
            className=' h-screen flex flex-col justify-center items-center'
            id='videos'
          >
            <h2 className='mb-8'>Videos</h2>
            <div className='flex  gap-4'>
              <iframe
                width='560'
                height='315'
                src='https://www.youtube.com/embed/_LGICP29iHg?si=VjzaFIkQm_UHlPut'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              ></iframe>
              <iframe
                width='560'
                height='315'
                src='https://www.youtube.com/embed/R78IADipbZI?si=pyzGm1Pe-K-0dODI'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              ></iframe>
            </div>
          </section>
        </div>
      </PublicLayout>
    </>
  );
}
