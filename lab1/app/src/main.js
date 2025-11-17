

function resizeBody() {
	document.body.style.height = ``
	if (document.body.clientHeight < window.innerHeight) {
		document.body.style.height = `${window.innerHeight}px`
	}
}

resizeBody()

window.onresize = resizeBody




function search(e) {
	let value = e.target.value.toLowerCase()
	for (const section of document.getElementsByClassName("section")) {
		let count = 0
		for (const card of section.getElementsByClassName("card")) {
			let name = card.getElementsByClassName("card-name")[0].textContent.toLowerCase()
			if (name.search(value) >= 0) {
				count++
				card.style.visibility = 'visible'
				card.style.display = 'block'
			} else {
				card.style.visibility = 'hidden'
				card.style.display = 'none'
			}
		}
		if (count > 0) {
			section.style.visibility = 'visible'
			section.style.display = 'block'
		} else {
			section.style.visibility = 'hidden'
			section.style.display = 'none'
		}
	}
	resizeBody()
}


document.getElementById("search").addEventListener("input", search)