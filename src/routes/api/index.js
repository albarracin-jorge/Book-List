/** @type {import('@sveltejs/kit').RequestHandler} */
import {getAllProducts, createProduct, modifyProduct, deleteProduct} from '../../server/controller/product.Controller'

export async function GET(){
  const response = await getAllProducts()
  return {
    status: 200,
    headers: {
      'access-control-allow-origin': '*'
    },
    body: response
  }
}

export async function POST({ request }){
  const req = await request.json()
  const response = await createProduct(req)
  return {
    status: 201,
    headers: {
      'access-control-allow-origin': '*'
    },
    body: response
  }
}

export async function PATCH({ request }){
  const req = await request.json()
  const response = await modifyProduct(req)
  return {
    status: 200,
    headers: {
      'access-control-allow-origin': '*'
    },
    body: response
  }
}

export async function DELETE({ request }){
  const req = await request.json()
  const response = await deleteProduct(req)
  return {
    status: 200,
    headers: {
      'access-control-allow-origin': '*'
    },
    body: response
  }
}