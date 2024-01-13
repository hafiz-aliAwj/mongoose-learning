
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/learning');
}
 // Schema

// const blogSchema = new mongoose.Schema({
//     title: String, 
//     author: String,
//     body: String,
//     meta: {
//       votes: Number,
//       favs: Number
//     }
//   });


//models

// const Blogs = mongoose.model('Blog', blogSchema);