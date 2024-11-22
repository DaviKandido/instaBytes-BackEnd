
import express from "express";  // Import express
import routes from "./src/routes/postsRouts.js";


const app = express();  // Create an instance of express

app.use(express.static("uploads")); // Middleware to serve static files

const porta = 3000;

routes(app);


app.listen(porta, () => {
    console.log(`Server running on port ${porta}`); // Log a message to the console
}); // Start the server





// //Create a function to search for a post with the id sought
// function buscaPostPorId(id) { 

//     return posts.findIndex((post)=> {
//         return post.id === Number(id);
//     }) // Find the post with the given id

// }

// // Create a route (Rota )with parameter
// app.get("/posts/:id", (rec,res )=>{ 

//     const index = buscaPostPorId(rec.params.id); // Get the id from the request
//     res.status(200).json(posts[index]); // Send a response in JSON

// });


