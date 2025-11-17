import './index.css'
import { Card } from '../Card'


export function Category(props) {
	if (props.products.length == 0)
		return <></>

	return (
		<div class="section">
			<p class="section-name">{props.title}</p>
			<div class="row">
				{ props.products.map((item) => <Card image={item.image} price={item.price} discountPrice={item.discountPrice} title={item.title}/>) }
			</div>
		</div>
	); 
}