import {DB_URL, saveBook, findAllBooks, updateBook, deleteBook} from '../model/product.Model'

export async function getAllProducts(req){

  const query = await findAllBooks(DB_URL);
  return {
    ok: true,
    error: false,
    // message: 'You get all products! 😀🎊',
    message: query
  }
}

//POST
export async function createProduct(req){

  console.log(req.image_path);
  req.image_path = req.image_path.slice(10, -10)
  console.log(req.image_path);
  // const query = await saveBook(DB_URL, req)
  return {
    ok: true,
    error: false,
    // message: 'You created one product successfully! 😎🍹',
    // message: query
  }
}

export async function saveImage(req){
  return{
    ok: true,
    error: false,
    message: 'You save one image from the product successfully! 😃🖼️'
  }
}

export async function modifyProduct(req){
  const query = await updateBook(DB_URL, req)
  return {
    ok: true,
    error: false,
    // message: 'You modify one product successfully! 🤓🖋️',
    message: query
  }
}

export async function deleteProduct(req){
  const query = await deleteBook(DB_URL, req)
  return {
    ok: true,
    error: false,
    // message: 'You delete one product successfully! 😬☠️',
    message: query
  }
}