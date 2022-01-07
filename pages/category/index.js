import { useState, useEffect } from "react";
import styles from "../../styles/Category.module.css";
import Link from "next/link";
import Layout from "../../components/layout";
import Card from "../../components/card";
import {useGetRecipesByCategory} from '../../hooks/firebaseCustomHook';
import { useRouter } from "next/router";

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

const Category = ({recipes}) => {

  return (
    <Layout>
      <h1>Category</h1>
      <section className={styles.cards}>
        {recipes &&
          recipes.map((recipe) => (
            <Card
              key={recipe.id}
              title={recipe.title}
              description={recipe.description}
              url={recipe.slug}
            />
          ))
        }
      </section>
    </Layout>
  );
};

Category.getInitialProps = async (context) => {
  const recipesByCategory = await useGetRecipesByCategory({collectionName: 'recipes', category: context.query.slug})
  return { recipes: recipesByCategory }
}

export default Category;
