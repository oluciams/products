import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/scss/detail.scss';
import axios from 'axios';
import { Alert } from './Alert';

export const Detail = () => {
	const [detail, setDetail] = useState(false);
	const [hasError, setHasError] = useState(null);

	const location = useLocation();	
	const id = location.state?.id;	

	// services?

	async function fetchDetail() {
		try {
			const response = await axios.get(`${process.env.REACT_APP_API_URL_EXTERNAL}/${id}`);			
			if (response.status === 200){
				setDetail(response.data);
			} 
			if(response.data === null) {
				setHasError('Not Found id')
			}
		} catch (error) {
			setHasError(error.message);
		}
	}	

	useEffect(() => {
		fetchDetail();
	}, []);

	if (hasError) return <Alert hasError={hasError}/> 
	if (!detail) return <h3>Loading ...</h3>;

	return (
		<section className='detail'>
			<h2 className='detail__title'>Product Detail</h2>
			<div className='detail__container'>
				<div className='detail__header'>
					<img src={detail.image} className='detail__image' alt='product' />
					<p className='detail__rate'>
						<small>
							{detail.rating.rate} <span>&#9733; &#9733; &#9733; &#9733;</span>{' '}
							&#40;{detail.rating.count}&#41;{' '}
						</small>
					</p>
				</div>
				<div className='detail__body'>
					<h3 className='detail__name'>{detail.title}</h3>
					<p className='detail__description'>{detail.description}</p>
					<p className='detail__category'>Category: {detail.category}.</p>
					<h4 className='detail__price'>Price: &#36;{detail.price}</h4>
				</div>
			</div>
			<div className='detailLink'>
				<Link className='detail__link' to='/home'>
					volver
				</Link>
			</div>
		</section>
	);
};
