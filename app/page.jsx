import Image from "next/image";
import Main from './page/page'
import Head from "next/head";
import Link from "next/link";
import OG from "../public/ogtags.png";
export default function Home() {
  return (
    <main>
      
       <Head>
        <link rel="icon" href="./favicon.svg" />
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        /> */}
        <meta property="og:title" content="AI Carz" />
        <meta
          property="og:description"
          content="DISCOVER YOUR PERFECT RIDE WITH AI CARZ"
        />
        <meta property="og:image" content="/publicAseet/images/ogtags.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:url" content="https://www.aicarz.com/" />
      </Head>
     <Main/>
    </main>
   
  );
}


export async function generateMetadata() {
  return {
    title: `AI Carz`,
    description: `DISCOVER YOUR PERFECT RIDE WITH AI CARZ`,
    openGraph: {
      title: `AI Carz`,
      description: `DISCOVER YOUR PERFECT RIDE WITH AI CARZ`,
      images: [
        {
          url: "/publicAseet/images/ogtags.png",
          alt: "Car Image",
          width: 300,
          height: 300,
          
        },
      ],
    },
  };
}