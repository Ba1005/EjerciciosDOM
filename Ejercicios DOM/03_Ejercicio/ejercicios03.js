//*1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const ul = document.createElement('ul')
for (const country of countries) {
  const li = document.createElement('li')
  li.textContent = country
  ul.appendChild(li)
}
document.body.appendChild(ul)

//*1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const eliminable = document.querySelector('.fn-remove-me')
eliminable.remove()
//*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const div = document.querySelector('div[data-function=printHere]')
const ulcar = document.createElement('ul')
for (const car of cars) {
  const licar = document.createElement('li')
  licar.textContent = car
  ulcar.appendChild(licar)
}
div.appendChild(ulcar)

//*1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countriesnew = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]
for (const country of countriesnew) {
  const divcountry = document.createElement('div')
  const title = document.createElement('h4')
  const img = document.createElement('img')
  title.textContent = country.title
  img.src = country.imgUrl
  divcountry.appendChild(title)
  divcountry.appendChild(img)
  document.body.appendChild(divcountry)
}
//*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

const button = document.createElement('button')
button.textContent = 'Eliminar último.'
function eliminardiv() {
  const divRemove = document.querySelectorAll('div')
  divRemove[divRemove.length - 1].remove()
}
button.addEventListener('click', eliminardiv)
document.body.appendChild(button)

//*1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
const listeliminable = document.querySelectorAll('div')
for (const elemento of listeliminable) {
  const buttonunic = document.createElement('button')
  buttonunic.textContent = 'Eliminar este.'
  buttonunic.addEventListener('click', (e) => e.target.parentElement.remove())
  elemento.appendChild(buttonunic)
}
