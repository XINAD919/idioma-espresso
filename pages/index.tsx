import PublicLayout from "@/components/PublicLayout";
import Head from "next/head";
import Image from "next/image";

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
        <div className='h-full'>
          <section className='' id='home'>
            <div className='w-full'>
              <Image
                src={"/welcome-idioma.png"}
                alt='Welcome to Idioma Espresso'
                width={"1000"}
                height={"1000"}
                style={{ width: "100%" }}
                priority
              />
            </div>
          </section>
          <section className='' id='about-us'>
            <h2 className='m-4'>About Us</h2>

            <h3 className='mb-2'>Our Story</h3>
            <div className='w-full h-fit border px-2 py-4 rounded-md bg-[#f8f4f1]'>
              <span className='tex'>
                Our story began on the first day of class when our group was
                formed. We were all brainstorming ideas for our business
                project, and Yenifer introduced the concept of a coffee shop
                where people could interact with foreigners, practice languages,
                and enjoy themed rooms for various languages. We made some
                modifications, adding our own ideas, and thus &quot;Idioma
                Espresso&quot; was born. It&apos;s a place where you can learn,
                have fun with various language activities, savor delicious food,
                and enjoy a great atmosphere.
              </span>
            </div>
          </section>
          <section className='' id='producs-and-services'>
            <h2 className='mb-4 text-2xl md:text-3xl'>Products and Services</h2>
            <div className=''>
              <h3 className='mb-4 text-center '>Products</h3>
              <div className='grid grid-cols-2 place-items-center gap-4'>
                <div className='md:col-span-1 col-span-2'>
                  <Image
                    src={"/menu-dia.png"}
                    alt={"nigth time menu"}
                    width={300}
                    height={200}
                  />
                </div>
                <div className='md:text-2xl text-xl md:col-span-1 col-span-2'>
                  <span>
                    We have a menu not so common in the day, it has exact
                    products from the cafeteria such as coffees, cakes, light
                    snacks among other drinks and the atmosphere in the day is
                    with quiet music where you can do all kinds of activities
                    like reading, writing etc.
                  </span>
                </div>
                <div className='md:text-2xl text-xl'>
                  <span>
                    In the course of the day begins the change of menu where now
                    is no longer a place for all kinds of people, and our menus
                    begin to see liquor as beers, cocktails and change meals for
                    hamburgers dogs etc.
                  </span>
                </div>
                <div className=''>
                  <Image
                    src={"/menu-noche.png"}
                    alt={"nigth time menu"}
                    width={300}
                    height={200}
                  />
                </div>
              </div>
            </div>

            <div className='mt-4'>
              <h3 className='text-center'>Services</h3>
              <div className=' grid grid-cols-2 gap-4 place-items-center '>
                <div className=''>aqui una imagen</div>
                <div className='text-xl py-4'>
                  <span>
                    in addition to our product services and delicious meals and
                    drinks we offer quite interesting activities and services
                    for all our customers such as paint, crochet, dance lessons
                    from every part of the world and karaoke night. it should be
                    noted that in the only thing that would be invested a small
                    amount of serious money for the inscription of painting and
                    crochet because we bought preciously the materials for
                    people who are and neither that we need nor that over and
                    the only thing that we request in addition that is that they
                    could have consumed some product of our cafeteria rest all
                    this completely at your disposal.
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className='' id='locations'>
            <h2 className='mb-4'>Locations</h2>
            <div className='px-4 py-2'>
              <span className=''>
                Our vision is to initially expand Idioma Espresso across the
                national territory, establishing multiple franchises in various
                cities. Subsequently, we aspire to take this concept to other
                countries, with the aim of making a global impact and providing
                a enriching experience for more language learners, one cup at a
                time.
              </span>
              <div className='mt-12'>
                <iframe
                  width='100%'
                  height='450'
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJfxWngikoRI4R4XzjGK11u10&key=${process.env.API_KEY}`}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </section>
          <section
            className=' h-full flex flex-col justify-center items-center'
            id='videos'
          >
            <h2 className='mb-8'>Videos</h2>
            <div className='flex gap-4 md:flex-row flex-col md:w-full items-center justify-center'>
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
