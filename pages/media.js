import Head from 'next/head';
import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from '../styles/Bio.module.css'

export default function About() {
	const [fade,setFade] = useState(false)

	useEffect(() => {
		setFade(true)
	}, [])

  return (
    <div className={styles.container}>
		<Head>
			<title>Hot Knives | Media </title>
			<link rel="icon" href="/favicon.ico" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
		</Head>
		<div className={styles.bioContainer}>
			<CSSTransition
		        in={fade}
		        timeout={1000}
		        classNames="fadeIn"
		        unmountOnExit
		     >
				<div className={styles.content}>
					<h1>MEDIA</h1>
				    <p>COMING  SOON...</p>
				</div>
			</CSSTransition>
		</div>
    </div>
  )
}
