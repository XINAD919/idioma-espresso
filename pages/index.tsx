import PublicLayout from "@/components/PublicLayout";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Idioma Espresso</title>
        <meta name='description' content='sample page idoma espresso' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PublicLayout>
        <div className='h-full'>
          <section className='mt-16 md:m-0' id='home'>
            <div className='w-full'>
              <Image
                src={"/welcome.png"}
                alt='Welcome to Idioma Espresso'
                width={"1000"}
                height={"1000"}
                style={{ width: "100%" }}
              />
            </div>
          </section>
          <section className='' id='about-us'>
            <h2 className='m-4'>About Us</h2>

            <h3 className='mb-2 text-center'>Our Story</h3>
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
            <div className=''>
              <h3 className='text-center'>logo and slogan</h3>
              <div className='flex flex-col justify-center items-center'>
                <Image
                  src={"/logo.png"}
                  alt='logo idioma espresso'
                  width='200'
                  height='200'
                  className='m-auto'
                />
                <p className='text-xl text-center md:text-2xl font-semibold'>
                  Where Learning and Fun Brew Together!
                </p>
              </div>
            </div>
          </section>
          <section className='my-8' id='producs-and-services'>
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
                <div className='md:text-2xl text-xl md:col-span-1 col-span-2  px-4 py-2 rounded-md'>
                  <span>
                    We have a menu not so common in the day, it has exact
                    products from the cafeteria such as coffees, cakes, light
                    snacks among other drinks and the atmosphere in the day is
                    with quiet music where you can do all kinds of activities
                    like reading, writing etc.
                  </span>
                </div>
                <div className='md:text-2xl text-xl px-4 py-2 rounded-md md:col-span-1 col-span-2'>
                  <span>
                    In the course of the day begins the change of menu where now
                    is no longer a place for all kinds of people, and our menus
                    begin to see liquor as beers, cocktails and change meals for
                    hamburgers dogs etc.
                  </span>
                </div>
                <div className=' md:col-span-1 col-span-2'>
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
              <h3 className='text-center my-8'>Services</h3>
              <div className=' grid grid-cols-2 gap-4 place-items-center '>
                <div className='flex items-center justify-center  md:col-span-1 col-span-2'>
                  <Image
                    src={"/notice.png"}
                    alt='notice'
                    width={1000}
                    height={1000}
                    style={{ width: "70%" }}
                  />
                </div>
                <div className='text-xl px-4 py-2 rounded-md  md:col-span-1 col-span-2 '>
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
            <div className=''>
              <div className='px-4 py-2 rounded-md '>
                <span className=''>
                  Our vision is to initially expand Idioma Espresso across the
                  national territory, establishing multiple franchises in
                  various cities. Subsequently, we aspire to take this concept
                  to other countries, with the aim of making a global impact and
                  providing a enriching experience for more language learners,
                  one cup at a time.
                </span>
              </div>
              <div className='mt-6'>
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
          <section id='differentiation'>
            <h2 className='mb-4'>How we&apos;re different</h2>
            <span>
              We consider that our main competition could be those ventures that
              have a very similar idea to ours either in locations,
              applications, companies, services among others, for us it is
              essential how customers feel in this space for that reason we
              decided not only to be a business which focuses on learning
              languages and cultures, we also want our customers to have fun
              while learning.
              <br />
              <br />
              We know that for some people it is easier to learn through
              activities than just theory, in that point we decided to include
              painting, crochet, dance classes and Karaoke night as main
              activities so that our clients can enjoy, laugh and have fun while
              they want to learn a language.
              <br />
              <br />
              On the other hand we wanted to incorporate in our business
              different sceneries, a white wall for them to leave us a message
              if they want, candles which they can create themselves to relax
              with messages in the language they are learning, we also have
              calligraphy as we believe that it is not only important to learn
              how to speak it but also how to write it. We would like to show
              that although sometimes you have the same alphabet some things
              change and finally, we have the images related to languages and
              with this we seek to try to show the culture of each country,
              making a visual impact on our customers. We would like to show
              that although sometimes you have the same alphabet some things
              change and finally, we have the images related to languages and
              with this we seek to try to show the culture of each country,
              making a visual impact on our customers.
            </span>
          </section>
          <section
            className='h-full flex flex-col justify-center items-center mt-8'
            id='videos'
          >
            <h2 className='mb-8'>Videos</h2>
            <div className='flex gap-4 md:flex-row flex-col md:w-full items-center justify-center'>
              <iframe
                width='560'
                height='315'
                src='https://www.youtube.com/embed/Ui3e7QNEzUw?si=AUF3lwo5xLoyhilt'
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
