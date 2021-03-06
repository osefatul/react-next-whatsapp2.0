import Head from "next/head";
import Image from "next/image";

import Sidebar from "../componoents/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>WhatsApp 2.0 using NextJs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />
    </div>
  );
}
