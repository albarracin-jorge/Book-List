/** @type {import('@sveltejs/kit').RequestHandler} */
import { saveImage } from '../../../server/controller/product.Controller'

export async function POST(){
  const response = await saveImage();
  return {
    status: 200,
    headers: {
      'access-control-allow-origin': '*'
    },
    body: response
  }
}