import Image from 'next/image';
import styles from '../styles/Press.module.css';

const PressClipping = ({data}) => {
	return (
		<div className={styles.gridItem}>
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


const PressContainer = ({press}) => {

	const pressPics = press.map((r, i) => <PressClipping key={`clipping-${i}`} data={r}/>)

	return (
		<div className={styles.clippingGrid}>
			{ pressPics }
		</div>
	)
}

export default PressContainer;