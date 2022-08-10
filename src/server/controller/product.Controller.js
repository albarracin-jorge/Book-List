//GET
let products = [
  {
      name: "El imperio Final",
      img: "/imperiofinal.jpg"
  },
  {
      name: "El pozo de la ascensión",
      img: "/pozoascension.jpg"
  },
  {
      name: "El héroe de las eras",
      img: "/heroeeras.jpg"
  },
  {
      name: "Aleación de ley",
      img: "/aleacionley.jpg"
  },
  {
      name: "Sombras de identidad",
      img: "/sombrasidentidad.jpg"
  },
  {
      name: "Brazales de duelo",
      img: "/brazalesduelo.jpg"
  },
]

export async function getAllProducts(req){
  return {
    status: "OK",
    message: 'You get all products! 😀🎊',
    content: products
  }
}

export async function getOneProduct(req){
  return {
    status: "OK",
    message: 'You get one product! 😀✨'
  }
}

//POST
export async function createProduct(req){
  products.push(req)
  return {
    status: "OK",
    message: 'You created one product successfully! 😎🍹'
  }
}

export async function saveImage(req){
  return{
    status: "OK",
    message: 'You save one image from the product successfully! 😃🖼️'
  }
}

export async function modifyProduct(req){
  console.log(req);
  let index = req.index
  if(req.name){  products[index].name = req.name }
  if(req.img){  products[index].img = req.img } 
  return {
    status: "OK",
    message: 'You modify one product successfully! 🤓🖋️'
  }
}

export async function deleteProduct(req){
  let index = req.index
  products.splice(index,1);
  return {
    status: "OK",
    message: 'You delete one product successfully! 😬☠️'
  }
}