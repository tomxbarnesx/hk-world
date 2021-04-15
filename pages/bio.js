import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Footer from '../components/Footer';
import styles from '../styles/Bio.module.css'

import PressContainer from '../components/PressContainer.js';
import pressData from '../utilities/data/pressData.js';

export default function Bio({press}) {
	const [fade,setFade] = useState(false)

	useEffect(() => {
		setFade(true)
	}, [])

	// const pressPics = press.map((r, i) => <PressClipping key={`clipping-${i}`} data={r}/>)
	return (
		<div className={styles.container}>
			<Head>
				<title>Hot Knives | Bio </title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
			</Head>
			<div className={styles.bioContainer}>
				<div className={styles.heightHandler}>
				<CSSTransition
			        in={fade}
			        timeout={1000}
			        classNames="fadeIn"
			        unmountOnExit
			     >
					<div className={styles.content}>
						<h1>BIO</h1>
						<p>Home grown in Bushwick, NY, steeped in the rarefied air of glue factories, Hot Knives is a project of musical stitching: faded patterns of analog psychedelia // punk stewing in the Bowery since 1984, feeding crocodiles // the funk that departed on the Mothership still beaming messages of hope to those who can pick up its signals. Hot Knives translates this new-old wisdom for our struggling world.</p>
						<p>Part MC5, part Funkadelic, part Butthole Surfers, throwing back to the sound of electric psychedelia from 67-72, with a bit of bedroom punk weirdness of now. Hot Knives create a face-melting tapestry of nostalgia, blues, and avant-garde. Clothed this way, their music explores love, consciousness, and the spheres above our galaxy's ceiling.</p>
						<p>The booties must shake. The eyes must open. Take some Hot Knives and get to work.</p>
						<div className={styles.bioPic}>
							<Image
					          src="https://hk-world.s3.us-east-2.amazonaws.com/hotKnives_BioPic_CharlieJordan.jpg"
					          alt="Hot Knives Biopic photographed by Charlie Jordan"
					          layout='fill'
					          objectFit='cover'
					          priority={true}
					        />
						</div>
						<h1 style={{marginTop: "2em"}}>RECENT PRESS</h1>
						<PressContainer press={press}/>
					</div>
				</CSSTransition>
				</div>
				<Footer/>
			</div>
		</div>
	)
}

export async function getStaticProps() {	
	return {
		props: {
			press: pressData,
		},
	}
}