import express from 'express';
import cors from 'cors';
import multer from 'multer';

import { listarPosts, PostarNovoPost, uploadImagem, atualizaNovoPost } from '../controllers/postsController.js';


const corsOptions = {
    origin: 'http://localhost:8000',
    optionsSuccessStatus: 200
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
})

const upload = multer({dest: "./uploads/", storage}); // Middleware to handle file uploads
// Linux ou no mac nao precisa passar o caminho (storange), mas no windows precisa

const routes = (app) => {

    app.use(express.json()); // Middleware to parse JSON request bodies (Indica que a aplicação usara formatação JSON)
    app.use(cors(corsOptions));

    // Create a route(Rota) get all posts
    app.get("/posts", listarPosts);

    // Create a route(Rota) post new posts
    app.post("/posts", PostarNovoPost);

    // Create a route(Rota) upload image
    app.post("/upload", upload.single("imagem"), uploadImagem);

    // Create a route(Rota) update post with image
    app.put("/upload/:id", upload.single("imagem"), atualizaNovoPost);

}


export default routes; // route sport encapsulation