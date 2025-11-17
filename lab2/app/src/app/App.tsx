import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import homeIcon from '/src/shared/assets/home.png'
import heartIcon from '/src/shared/assets/heart.png'
import cartIcon from '/src/shared/assets/cart.png'
import Search from '/src/widgets/Search'
import { SearchProducts } from '/src/features/Search'
import { Card, Category, GetAllProducts } from '/src/entities/Product'
import './styles/App.css'





function App() {
	const [showedProducts, setShowedProducts] = useState(GetAllProducts())

	return (
		<>
			<div className="navigation">
				<div className="left">
					<img src={homeIcon}/>
				</div>
				<div className="center">
					<Search onChange={
						(e) => { setShowedProducts(SearchProducts(e.target.value, GetAllProducts())) }
					}/>
				</div>
				<div className="right">
					<img src={heartIcon}/>
					<img src={cartIcon}/>
				</div>
			</div>
			<div className="content">
				<div className="main">
					{ showedProducts.map((category) => <Category title={category.title} products={category.products}/>) }
				</div>
				<div className="footer">
					<span>© 2025 Магазин</span>
					<div className="container">
						<span>Политика и безопасность</span>
						<span>Cookie</span>
					</div>
				</div>
			</div>
			<div className="bottom-navigation">
				<div className="navigation-item">
					<img src={homeIcon}/>
					<span>Главное</span>
				</div>
				<div className="navigation-item">
					<img src={heartIcon}/>
					<span>Избранное</span>
				</div>
				<div className="navigation-item">
					<img src={cartIcon}/>
					<span>Корзина</span>
				</div>
			</div>
		</>
	)
}

export default App
