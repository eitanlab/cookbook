import styles from '../../styles/Category.module.css'
import Link from 'next/link';

import Layout from "../../components/layout";
import Card from '../../components/card';

const recipes = [
	{
		id: 0,
		title: 'Recipe 1',
		description: 'Lorem ipsum dolor sit amet',
		url: '/recipe'
	},
	{
		id: 1,
		title: 'Recipe 2',
		description: 'Lorem ipsum dolor sit amet',
		url: '/recipe'
	},
	{
		id: 2,
		title: 'Recipe 3',
		description: 'Lorem ipsum dolor sit amet',
		url: '/recipe'
	},
	{
		id: 3,
		title: 'Recipe 4',
		description: 'Lorem ipsum dolor sit amet',
		url: '/recipe'
	}
]

const Category = () => {
	return (
		<Layout>
			<h1>Category</h1>
			<section className={styles.cards}>
				{recipes.map(recipe => 
					<Card 
						key={recipe.id} 
						title={recipe.title}
						description={recipe.description}
						url={recipe.url} />)}
					<Card/>
			</section>
		</Layout>
	);
}

export default Category;