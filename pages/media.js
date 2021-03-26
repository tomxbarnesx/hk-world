import Head from 'next/head';
import styles from '../styles/Bio.module.css'

export default function About() {

  return (
    <div className={styles.container}>
		<Head>
			<title>Hot Knives | Media </title>
			<link rel="icon" href="/favicon.ico" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
		</Head>
		<div className={styles.bioContainer}>
			<h1>MEDIA</h1>
		    <p>COMING  SOON...</p>
		</div>
    </div>
  )
}
