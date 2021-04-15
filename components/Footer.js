import { useRouter } from 'next/router';
import NavLink from "./NavLink";

import styles from '../styles/Nav.module.css'

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

export default function Footer(){
	const router = useRouter()

	const navLinks = navLinkData.map((link, i) => <NavLink key={`navLink-${i}`} url={link.url} text={link.text} i={i} />)

	return(
		<>
			{
				(router.pathname !== '/') ?
					<footer>
						<div>HOT KNIVES <span style={{color: "#f99494"}}>❁</span> 2021</div>
						<div className="flex-center">
							{navLinks}
						</div>
					</footer>
				: null
			}
		</>
	)
}