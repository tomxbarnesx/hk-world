import Image from 'next/image';
import { useEffect } from 'react';
import styles from '../styles/Nav.module.css'
import Link from 'next/link'
import { useWindowSize, windowCatch } from '../utilities/layoutHooks.js'
import SocialButton from '../components/SocialButton.js';
import NavLink from './NavLink.js';
import NavHamburger from './NavHamburger.js';

const socialData = [
  {
    platform: "Spotify",
    url: "https://open.spotify.com/artist/1G7KQRWyvDLepv3VvM0aiW?si=tkT3lDXpQSSqt01_HDjoNw"
  },
  {
    platform: "Bandcamp",
    url: "https://hotknivesworld.bandcamp.com/"
  },
  {
    platform: "Facebook",
    url: "https://facebook.com/hotknivesworld/"

  },
  {
    platform: "Instagram",
    url: "https://instagram.com/hotknivesworld"

  },
  {
    platform: "YouTube",
    url: "https://open.spotify.com/artist/1G7KQRWyvDLepv3VvM0aiW?si=tkT3lDXpQSSqt01_HDjoNw"
  }
]

const navLinkData = [
	{
		url: "/bio",
		text: "Bio"
	},
	{	
		url: "https://hotknivesworld.bandcamp.com/merch",
		text: "Store"
	},
	{
		url: "/media",
		text: "Media"
	}
]

const Nav = () => {
	const windowSize = useWindowSize()

	useEffect(() => {
		if (windowCatch) {
			const vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		}
	}, []);

	const navLinks = navLinkData.map((link, i) => <NavLink key={`navLink-${i}`} url={link.url} text={link.text} i={i} />)
	const socialIcons = socialData.map((social, i) => <SocialButton key={`social-${i}`} social={social}/> )

	return (
		<div className={styles.navContainer}>
			<div className={styles.logoContainer}>
				<Link href="/">
					<a>
						<Image
							src="https://hk-world.s3.us-east-2.amazonaws.com/non-dithered-transparent-logo.png"
							alt="Hot Knives Superfly logo"
							layout='fill'
							priority={true}
							className={styles.logoImg}
					    />
				    </a>
				</Link>
		    </div>
			<div className={styles.socialContainer}>
	        	{socialIcons}
	        </div>
		   { 
		   		(windowSize.width > 768) ?
		   			<div className={styles.desktopNavContainer}>
					    {navLinks}
					    {/*<div className={styles.navItem}>
				    		<Link href="/bio">
				    			<a>BIO</a>
				    		</Link>
				    	</div>
				    	<div className={styles.navItem}>
				    		<a target="_blank" rel="noopener noreferrer" href="https://hotknivesworld.bandcamp.com/merch">
				    			STORE
				    		</a>
				    	</div>
				    	<div className={styles.navItem}>
				    		<Link href="/media">
				    			<a>MEDIA</a>
				    		</Link>
				    	</div>*/}
				    </div>
			    : 
			    	<NavHamburger />
		    }
		</div>
	)
}

export default Nav;