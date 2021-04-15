import Head from 'next/head';
import Image from 'next/image';
import {useState} from 'react';
import VideoBG from '../components/VideoBG';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [loading, setLoading] = useState(true)

  return (
    <div className={styles.container}>
      <Head>
        <title>Hot Knives | STATIC BLOOM OUT NOW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.homeImage}>
       {/* <Image
                 src="https://hk-world.s3.us-east-2.amazonaws.com/home_Charlie_Jordan_web.jpg"
                 alt="Hot Knives photographed by Charlie Jordan"
                 layout='fill'
                 objectFit='cover'
                 priority={true}
               />*/}
        <VideoBG vidSrc={'https://hk-world.s3.us-east-2.amazonaws.com/HotKnivesTrim2.mp4'} loading={loading} setLoading={setLoading}/>
      </div>
    </div>
  )
}