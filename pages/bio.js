import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from '../styles/Bio.module.css'

import PressClipping from '../components/PressClipping.js';
import pressData from '../utilities/data/pressData.js';

export default function Bio({press}) {
	const [fade,setFade] = useState(false)

	useEffect(() => {
		setFade(true)
	}, [])

	const pressPics = press.map((r, i) => <PressClipping key={`clipping-${i}`} data={r}/>)
	return (
		<div className={styles.container}>
			<Head>
				<title>Hot Knives | Bio </title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
			</Head>
			<CSSTransition
		        in={fade}
		        timeout={1000}
		        classNames="fadeIn"
		        unmountOnExit
		     >
			<div className={styles.bioContainer}>
				<h1>BIO</h1>
			    <p>Founded in 2017 in Brooklyn, Hot Knives is Tom, Joe, and Alex. All three band members have performed together since 2012 under different monikers and bands, morphing into their current form 5 years into the game. The forthcoming release from the The Hendrix/Spaceman 3/Black Sabbath loving trio, entitled Making Love To Make Music To Make Love To, arrives on May 7, 2021.Ahead of the album’s arrival the band have shared the scorching single “Static Bloom </p>
				<p>Following a mystical experience that opened a channel of communication with the rock gods themselves, Hot Knives was tapped by the ghost of Jimi Hendrix to bear the torch of rock and roll.</p>
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
				<div className={styles.pressFlex}>
					{ pressPics }
				</div>
			</div>
			</CSSTransition>
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