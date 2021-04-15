import styles from '../styles/Nav.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function NavLink({url, text}) {
	const router = useRouter()
	const highlighted = (url === router.pathname) ? `${styles.navItem} ${styles.highlighted}` : styles.navItem;

	return (
		<div className={highlighted}>
			{
				(!url.startsWith('https')) ?
					<Link href={url}>
		    			<a>{text}</a>
		    		</Link>
	    		:
		    		<a target="_blank" rel="noopener noreferrer" href={url}>
		    			{text}
		    		</a>
			}
    	</div>
	)
}