

export function SearchProducts(title: string, products: any[]) {
	let newProducts = []
	products.forEach((category) => newProducts.push({title: category.title, products: category.products.filter((item) => item.title.toLowerCase().search(title.toLowerCase()) >= 0)}))
	return newProducts;
}