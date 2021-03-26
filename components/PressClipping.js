import Image from 'next/image';
import styles from '../styles/Bio.module.css'

const PressClipping = ({data}) => {

	return (
		<div className={styles.clippingContainer}>
			<a target="_blank" rel="noopener noreferrer" href={data.url}>
				<Image
					src={data.imgUrl}
					alt={data.alt}
					layout='fill'
			    />
			</a>
		</div>
	)
}

export default PressClipping