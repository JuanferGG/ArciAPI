// Creamos Variables del texto y autor a obtener
const texto = document.getElementById('text')
const autor = document.getElementById('autor')

// Variable Boton que ejecutara las frases random
const btnRandom = document.getElementById('btnRandom')

// variable URL de la API
const URL = 'https://type.fit/api/quotes'

async function getMethod(){
    // Obtenemos la informacion del API o su respuesta
    const data = await fetch(URL).then((e) => e.json())
    // generamos un numero random Math.floor para redondear y Math.random para generar un numero random y luego multiplicarlo por la long. del array
    let randomIndex = Math.floor(Math.random() * data.length);

    // Modificamos los valores de text y autor
    texto.textContent = `"${data[randomIndex].text}"`
    autor.textContent = `Autor: ${data[randomIndex].author}`
    
    // Mostrar objeto frase y autor por consola 
    console.log(data[randomIndex])
}


// agregamos el evento click para ejecutar la async function getMethod()
btnRandom.addEventListener('click', getMethod)