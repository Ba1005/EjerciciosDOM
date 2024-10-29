//*1.1 Inserta dinamicamente en un html un div vacio con javascript.
const newdiv = document.createElement('div')

document.body.appendChild(newdiv)

//*1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const newdivp = document.createElement('div')
const p = document.createElement('p')

document.body.appendChild(newdivp)
newdivp.appendChild(p)

//*1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const divLoopP = document.createElement('div')

for (let i = 0; i < 6; i++) {
  const p = document.createElement('p')
  divLoopP.appendChild(p)
}
document.body.appendChild(divLoopP)

//*1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const pdinamico = document.createElement('p')
pdinamico.textContent = 'Soy dinámico!'
document.body.appendChild(pdinamico)
//*1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const clase = document.querySelector('h2', '.fn-insert-here')
clase.textContent = 'Wubba Lubba dub dub'

//*1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ulapp = document.createElement('ul')
for (const app of apps) {
  const li = document.createElement('li')
  li.textContent = app
  ulapp.appendChild(li)
}

document.body.appendChild(ulapp)

//*1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const eliminar = document.querySelectorAll('.fn-remove-me')
for (const elimina of eliminar) {
  elimina.remove()
}
//*1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
const allDiv = document.querySelectorAll('div')

const pMid = document.createElement('p')

pMid.textContent = 'Voy en medio!'

document.body.insertBefore(pMid, allDiv[2])

//*1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const dentrodiv = document.querySelectorAll('div.fn-insert-here')
for (const div of dentrodiv) {
  let p = document.createElement('p')
  p.textContent = 'Voy dentro!'
  div.appendChild(p)
}
