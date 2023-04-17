import React, {useContext} from 'react';
import Skeleton from './Skeleton';

import {MyContext} from '../context/MyContext';
import {Card} from 'antd';

export default function Products() {
	const {loading, products, setOrder} = useContext(MyContext);

	return loading ? (
		<Skeleton />
	) : (
		<div className="products">
			{products.length > 1 && <p>Clique nas peças a ser adicionadas</p>}

			{products.slice(0, 3).map((product, i) => (
				<Card
					className="product"
					key={i}
					onClick={() =>
						setOrder((order) => ({
							...order,
							products: [...(order.products || []), product],
						}))
					}
				>
					<div className="product__info">
						<p className="info__name">{product.name}</p>
						<p className="info__price">{product.price}</p>
					</div>
				</Card>
			))}
		</div>
	);
}
