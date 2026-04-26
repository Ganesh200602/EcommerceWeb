// import Head from "next/head";
// import Image from "next/legacy/image";
// import styles from "../styles/Home.module.css";
// export default function Home() {
//   return (
//     <div className="">
//       <Head>
//         <title>Codeswear.com - Wear The Code</title>
//         <meta name="description" content="Codeswear" />
//         <link rel="icon" href="/codes.png" />
//       </Head>
//       <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[500px] 2xl:h[200px] ">
//         <Image
//           // className="  rounded-full "
//           src="/banner.webp"
//           alt="banner"
//           layout="fill"
//           // position="absolute"
//           // objectFit="contain"
//           // width={100}
//           // height={200}
//           // position="absolute"
//           // layout="responsive"
//           // objectFit="contain"
//         />
//       </div>
//       <section className="text-gray-600 body-font">
//         <div className="container px-5 py-24 mx-auto">
//           <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
//             <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
//               Codeswear
//             </h1>
//             <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//               Officiis, enim?.
//             </p>
//           </div>
//           <div className="flex flex-wrap -m-4">
//             <div className="xl:w-1/3 md:w-1/2 p-4">
//               <div className="border border-gray-200 p-6 rounded-lg">
//                 <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     className="w-6 h-6"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
//                   </svg>
//                 </div>
//                 <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
//                   Shooting Stars
//                 </h2>
//                 <p className="leading-relaxed text-base">
//                   Fingerstache flexitarian street art 8-bit waist co, subway
//                   tile poke farm.
//                 </p>
//               </div>
//             </div>
//             <div className="xl:w-1/3 md:w-1/2 p-4">
//               <div className="border border-gray-200 p-6 rounded-lg">
//                 <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     className="w-6 h-6"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle cx="6" cy="6" r="3"></circle>
//                     <circle cx="6" cy="18" r="3"></circle>
//                     <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
//                   </svg>
//                 </div>
//                 <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
//                   The Catalyzer
//                 </h2>
//                 <p className="leading-relaxed text-base">
//                   Fingerstache flexitarian street art 8-bit waist co, subway
//                   tile poke farm.
//                 </p>
//               </div>
//             </div>
//             <div className="xl:w-1/3 md:w-1/2 p-4">
//               <div className="border border-gray-200 p-6 rounded-lg">
//                 <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     className="w-6 h-6"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
//                     <circle cx="12" cy="7" r="4"></circle>
//                   </svg>
//                 </div>
//                 <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
//                   Neptune
//                 </h2>
//                 <p className="leading-relaxed text-base">
//                   Fingerstache flexitarian street art 8-bit waist co, subway
//                   tile poke farm.
//                 </p>
//               </div>
//             </div>
//             <div className="xl:w-1/3 md:w-1/2 p-4">
//               <div className="border border-gray-200 p-6 rounded-lg">
//                 <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     className="w-6 h-6"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
//                   </svg>
//                 </div>
//                 <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
//                   Melanchole
//                 </h2>
//                 <p className="leading-relaxed text-base">
//                   Fingerstache flexitarian street art 8-bit waist co, subway
//                   tile poke farm.
//                 </p>
//               </div>
//             </div>
//             <div className="xl:w-1/3 md:w-1/2 p-4">
//               <div className="border border-gray-200 p-6 rounded-lg">
//                 <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     className="w-6 h-6"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
//                   </svg>
//                 </div>
//                 <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
//                   Bunker
//                 </h2>
//                 <p className="leading-relaxed text-base">
//                   Fingerstache flexitarian street art 8-bit waist co, subway
//                   tile poke farm.
//                 </p>
//               </div>
//             </div>
//             <div className="xl:w-1/3 md:w-1/2 p-4">
//               <div className="border border-gray-200 p-6 rounded-lg">
//                 <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     className="w-6 h-6"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
//                   </svg>
//                 </div>
//                 <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
//                   Ramona Falls
//                 </h2>
//                 <p className="leading-relaxed text-base">
//                   Fingerstache flexitarian street art 8-bit waist co, subway
//                   tile poke farm.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Codeswear | Wear The Code</title>
        <meta
          name="description"
          content="Codeswear - Premium coding merchandise for developers. Hoodies, T-shirts, mugs & stickers."
        />
        <link rel="icon" href="/codes.png" />
      </Head>

      {/* HERO SECTION */}
      {/* <section className="relative bg-blue-200  h-[450px] sm:h-[550px] lg:h-[620px]">
       <Image
  src="/banner.png"
  width={1800}
  height={850}
  objectFit="cover"
  alt="Banner"
/>


        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center  px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Wear The Code
            </h1>
            <p className="max-w-xl mx-auto mb-6 text-lg">
              Premium merchandise designed for programmers & developers
            </p>
            <Link href="/products">
              <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-md font-semibold">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </section> */}
 <Image
  src="/banner.png"
  width={1800}
  height={850}
  objectFit="cover"
  alt="Banner"
/>
      {/* FEATURED CATEGORIES */}
      <section className=" container mx-auto px-5 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Shop By Category
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "T-Shirts", img: "/tshirt.jpg", link: "/tshirt" },
            { name: "Hoodies", img: "/hoodies.png", link: "/hoddies" },
            { name: "Mugs", img: "/mugs.webp", link: "/mugs" },
            { name: "Stickers", img: "/stickers.jpg", link: "/stickers" }
          ].map((cat) => (
            <Link key={cat.name} href={cat.link}>
              <div className="cursor-pointer border rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="relative h-48">
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4 text-center font-semibold">
                  {cat.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY CODESWEAR */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Codeswear?
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Feature
              title="Premium Quality"
              desc="High-quality fabric & prints made to last."
            />
            <Feature
              title="Coder Designed"
              desc="Every design is inspired by developer culture."
            />
            <Feature
              title="Fast Delivery"
              desc="Quick shipping with secure packaging."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to upgrade your coder style?
        </h2>
        <p className="mb-6 text-gray-600">
          Explore exclusive coding merchandise now.
        </p>
        <Link href="/products">
          <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800">
            Explore Products
          </button>
        </Link>
      </section>
    </>
  );
}

/* Small reusable component */
function Feature({ title, desc }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
