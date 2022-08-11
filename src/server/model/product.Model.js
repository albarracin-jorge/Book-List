import mongoose from 'mongoose';
const { Schema } = mongoose;

export const DB_URL ='mongodb+srv://admin_user:sharingan@cluster0.r6kcpw1.mongodb.net/?retryWrites=true&w=majority';

const bookSchema = new Schema({
  title: String,
  launch_date: String,
  img_path: String,
  hidden: {type: Boolean, default: false}
})

const Book = mongoose.model('Book', bookSchema)

//GET
export async function findAllBooks(URL){
  await mongoose.connect(URL)
  const query = await Book.find()
  return {
    ok: true,
    data: query
  }
}

//POST
export async function saveBook(URL, req){
  await mongoose.connect(URL)

  const addBook = new Book({
    title: req.title,
    launch_date: req.launch_date,
    img_path: req.img_path
  })

  await addBook.save()

  return { ok: true }
}

//PATCH
export async function updateBook(URL, req){
  await mongoose.connect(URL)
  let query
  if(req.title){
    Book.findByIdAndUpdate({_id: req._id}, {$set:{title: req.title}}, (err, doc)=>{
      if(err){
        return { ok: false, error: 'Update go wrong' }
      } 
    })  
  }
  if(req.img_path){
    Book.findByIdAndUpdate({_id: req._id}, {$set:{img_path: req.img_path}}, (err, doc)=>{
      if(err){
        return { ok: false, error: 'Update go wrong' }
      } 
    })  
  }
  return { ok: true }
}

//DELETE
export async function deleteBook(URL, req){
  const query = await Book.findByIdAndDelete({_id: req._id})
  return query
}







