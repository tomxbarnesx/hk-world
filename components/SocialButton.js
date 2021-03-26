import styles from '../styles/Nav.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faBandcamp } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

const SocialButton = ({social}) => {

	const icon = (social.platform == "Spotify") ? faSpotify 
		: (social.platform == "Bandcamp") ? faBandcamp
		: (social.platform == "Facebook") ? faFacebook
		: (social.platform == "Instagram") ? faInstagram
		: (social.platform == "YouTube") ? faYoutube
		: faSpotify
	
	return (
		<div className={styles.socialIcon}>
			<a target="_blank" rel="noopener noreferrer" href={social.url}>
				<FontAwesomeIcon color="white" icon={icon} size="xs"/>
			</a>
		</div>
	)
}

export default SocialButton