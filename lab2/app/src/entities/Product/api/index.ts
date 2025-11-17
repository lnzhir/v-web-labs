import type { TProduct, TProductCategory } from '../model'



const categories: TProductCategory[] = [
	{id: 1, title: "Посуда"},
	{id: 2, title: "Освещение"}
]

const products: TProduct[] = [
	{id: 1, title: "Ножницы кухонные", image: "/src/shared/assets/unknown.jpg", discountPrice: 419, price: 1299, category: 1},
	{id: 2, title: "Сковорода", image: "/src/shared/assets/unknown.jpg", discountPrice: -1, price: 999, category: 1},
	{id: 3, title: "Фильтр-кувшин", image: "/src/shared/assets/unknown.jpg", discountPrice: -1, price: 1023, category: 1},
	{id: 4, title: "Сковорода с крышкой", image: "/src/shared/assets/unknown.jpg", discountPrice: 1200, price: 1599, category: 1},
	{id: 5, title: "Кухонный нож", image: "/src/shared/assets/unknown.jpg", discountPrice: 2100, price: 3999, category: 1},


	{id: 6, title: "Настольная лампа", image: "/src/shared/assets/unknown.jpg", discountPrice: 999, price: 1299, category: 2},
	{id: 7, title: "Светодиодная лампа", image: "/src/shared/assets/unknown.jpg", discountPrice: -1, price: 199, category: 2},
	{id: 8, title: "Светодиодная лента", image: "/src/shared/assets/unknown.jpg", discountPrice: -1, price: 299, category: 2},
	{id: 9, title: "Лампочка светодиодная", image: "/src/shared/assets/unknown.jpg", discountPrice: -1, price: 199, category: 2}
]

export function GetCategories() {
	return categories;
}

export function GetProductsOf(category: stringl) {
	return products.filter((product) => product.category == category);
}

export function GetAllProducts() {
	return GetCategories().map((category) => { 
		category["products"] = GetProductsOf(category.id);
		return category;
	});
}