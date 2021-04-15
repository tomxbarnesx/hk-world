import styles from '../styles/Video.module.css';

const VideoBG = ({vidSrc, loading, setLoading}) => {
	return (
		<div className={styles.videoContainer}>
			{
				(vidSrc || vidSrc === '0' || vidSrc === 0) ?
					<video 
						src={vidSrc}
						autoPlay
						muted
						loop
						playsInline
						onCanPlay={() => {
							(loading) ?
								setLoading(false)
							: null
						}}
					/>
				: null
			}
		</div>
	)
}

export default VideoBG;