import Link from 'next/link';
import Image from 'next/image';

import styles from './Card.module.css';

const Card = ({title, description, url = ''}) => {
	return (
		<>
		<div className={styles.card}>
			<Image className={styles.image} src="/TangzhongMilkBread.jpg" alt="recipeImg" width="200" height="150" layout="responsive" />
			<div className={styles.bottom}>
				<Link href="/recipe"><a className={styles.title}>{title}</a></Link>
				<p>{description}</p>
			</div>
		</div>
	</>
	)
};

export default Card;