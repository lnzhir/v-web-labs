import './index.css'
import searchIcon from '/src/shared/assets/search.png'

function Search(props) {
	return (
		<div className="search">
			<img src={searchIcon}/>
			<input id="search" placeholder="Поиск..." type="search" onChange={props.onChange}/>
		</div>
	)
}

export default Search