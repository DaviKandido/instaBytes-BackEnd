import { getTodosPost, criarPost, atualizaPost,  } from "../models/postsModel.js";
import  gerarDescricaoComGemini  from "../services/geminiService.js";

import fs from 'fs';


export async function listarPosts(req,res){ // req = Requisição, RES = Resposta

    const posts = await getTodosPost();
    res.status(200).json(posts); //(enviar) Send a response in JSON
}

export async function PostarNovoPost(req, res) { 

    const novoPost = req.body; // get the body of the request

    try{
        const postCriado = await criarPost(novoPost);
        res.status(201).json(postCriado);
    }catch(erro){
        console.error(erro.message);
        res.status(500).json({"Erro": "Falha na requisição, erro ao enviar post"});
    }
 }


export async function uploadImagem(req, res) { 

    const novoPost = {
        descricao: "",
        imagem: req.file.originalname,
        alt: ""
    }; 

    try{
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
        fs.renameSync(req.file.path, imagemAtualizada);
        res.status(201).json(postCriado);
    }catch(erro){
        console.error(erro.message);
        res.status(500).json({"Erro": "Falha na requisição, erro ao enviar post"});
    }
 }


 export async function atualizaNovoPost(req, res) { 

    const id = req.params.id;
    const urlImagem = `http://localhost:3000/${id}.png`; // get the url of the image


    try{
        const imageBuffer = fs.readFileSync(`uploads/${id}.png`);
        const descricao = await gerarDescricaoComGemini(imageBuffer);

        const post = {
            imgUrl: urlImagem,
            descricao: descricao,
            alt: req.body.alt
        } // get the body of the request


        const postCriado = await atualizaPost(id, post);
        res.status(201).json(postCriado);
    }catch(erro){
        console.error(erro.message);
        res.status(500).json({"Erro": "Falha na requisição, erro ao enviar post"});
    }
 }

 
