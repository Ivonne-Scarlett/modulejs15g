let text = prompt("Ingresa una Frase").toLowerCase().trim()
text = `${text[0].toUpperCase()}${text.substring(1)}`
//console.log(text)

for (let i = 0; i < text.length; i++) {	
	if (text[i]==" ") {
		text = text.substring(0,text[i+1])
        
	}
}

console.log(text[i])










