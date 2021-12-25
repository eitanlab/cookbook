import { useState, useEffect } from 'react';
import styles from '../../styles/Category.module.css'
import Link from 'next/link';
import Layout from "../../components/layout";
import Card from '../../components/card';

import { firestore } from '../../firebase/clientApp';
import {collection,QueryDocumentSnapshot,DocumentData,query,where,limit,getDocs} from "@firebase/firestore";

// const recipes = [
// 	{
// 		id: 0,
// 		title: 'Recipe 1',
// 		description: 'Lorem ipsum dolor sit amet',
// 		url: '/recipe'
// 	},
// 	{
// 		id: 1,
// 		title: 'Recipe 2',
// 		description: 'Lorem ipsum dolor sit amet',
// 		url: '/recipe'
// 	},
// 	{
// 		id: 2,
// 		title: 'Recipe 3',
// 		description: 'Lorem ipsum dolor sit amet',
// 		url: '/recipe'
// 	},
// 	{
// 		id: 3,
// 		title: 'Recipe 4',
// 		description: 'Lorem ipsum dolor sit amet',
// 		url: '/recipe'
// 	}
// ]

// export async function getStaticProps() {
// 	const firebase = await loadFirebase();
// 	const db = firebase.filestore();
// 	let result = await new Promise((resolve, reject) => {
// 	  db.collection('recipes')
// 	  .get()
// 	  .then(snapshot => {
// 		let data = [];
// 		snapshot.forEach(doc => {
// 		  data.push(
// 			Object.assign(
// 			  {
// 				id: doc.id
// 			  },
// 			  doc.data()
// 			)
// 		  )
// 		});
// 		resolve(data);
// 	  })
// 	  .catch(error => {
// 		reject([]);
// 	  });
// 	});
// 	console.log('result: ',result)
// 	return  {
// 	  props: { recipes: result }
// 	}
// }

const Category = () => {

	const [recipes,setRecipes] = useState([]);
	const [loading,setLoading] = useState(true);

	const recipesCollection = collection(firestore,'recipes');

	const getRecipes = async () => {
		// get the recipes
		const querySnapshot = await getDocs(recipesCollection);
		// map through todos adding them to an array
		const result = [];
		querySnapshot.forEach((doc) => {
			result.push({id: doc.id, ...doc.data()});
		});
		// set it to state
		setRecipes(result);
		setLoading(false);
	 };

	 useEffect( () => {
		// get the todos
		getRecipes();
	 },[]);

	return (
		<Layout>
			<h1>Category</h1>
			<section className={styles.cards}>
				
				{loading ? (
					<div className={styles.card}>
						<h2>Loading</h2>
					</div>
					): 
					(recipes && recipes.map(recipe => 
						<Card 
							key={recipe.id} 
							title={recipe.title}
							description={recipe.description}
							url={recipe.url} />)
					)}
			</section>
		</Layout>
	);
}

export default Category;