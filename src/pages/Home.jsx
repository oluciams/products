import React, { useEffect, useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import '../assets/scss/home.scss';
import { getProducts } from '../services/products';
import { Alert } from '../components/Alert';

export const Home = () => {
	const [products, setProducts] = useState(false);
	const [hasError, setHasError] = useState(null);	

	async function fetchData() {
		try {
			const response = await getProducts();	
			if (response.status === 200){
				setProducts(response.data);			}
		} catch (error) {
			setHasError(error.message);	
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	if (hasError) return <Alert hasError={hasError}/>
	if (!products) return <h4>Loading . . .</h4>;

	return (
		<section className='home'>	
			<h2 className='home__title'>Products</h2>				
			<div className='home__cards'>
				{products.map(({ id, title, image }) => (
					<ProductCard key={id} title={title} image={image} id={id} />
				))}
			</div>	
		</section>
	);
};
