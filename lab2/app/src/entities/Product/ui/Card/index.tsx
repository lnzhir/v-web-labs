import './index.css'
import priceTagIcon from '/src/shared/assets/pricetag.png'


export function Card(props) {
	let price = parseFloat(props.price)
	let discountPrice = parseFloat(props.discountPrice)


	let finalPrice = discountPrice < 0 ? 
		<span class="price">{price} ₽</span> :
		<>
			<img src={priceTagIcon}/>
			<span class="price">{discountPrice} ₽</span>
			<span class="oldprice">{price} ₽</span>
		</>
		
	return (
		<div class="card">
			<img src={props.image} width="100%" class="card-img"/>
			<div class="price">
				{finalPrice}
			</div>
			<span class="card-name">{props.title}</span>
			<button>В корзину</button>
		</div>
	)
	
}
