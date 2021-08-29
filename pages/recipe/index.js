import styles from '../../styles/Recipe.module.css'
import Image from 'next/image';

import Layout from "../../components/layout";

const Recipe = () => {
	return (
		<Layout>
			<h1>Recipe</h1>
			<div className={styles.imageContainer}>
				<Image className={styles.image} src="/TangzhongMilkBread.jpg" alt="recipeImg" width="200" height="150" layout="responsive" />
			</div>
			<div className={styles.description}>
				<div className={styles.ingredients}>
					<h2>Ingredients</h2>
					<ul>
						<li>Harina 500gr</li>
						<li>Agua 300gr</li>
						<li>Levadura seca 5gr</li>
						<li>Sal 12gr</li>
					</ul>
				</div>
				<div className={styles.steps}>
					<h2>Steps</h2>
					<ul>
						<li>1. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</li>
						<li>2. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</li>
						<li>3. Lorem ipsum dolor sit amet</li>
						<li>4. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</li>
					</ul>
				</div>
				<div className={styles.notes}>
					<h2>Notes</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</div>
		</Layout>
	);
}

export default Recipe;