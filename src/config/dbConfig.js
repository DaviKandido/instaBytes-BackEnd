import { MongoClient } from 'mongodb';

/**
 * Connects to a MongoDB database using the provided connection string.
 * 
 * @param {string} stringConexao - The connection string for the MongoDB database.
 * @returns {Promise<MongoClient>} - Returns a promise that resolves to the connected MongoClient.
 */
export default async function conectarAoBanco(stringConexao) {
    let mongoClient;

    try{
        mongoClient = new MongoClient(stringConexao);
        console.log('Conectando ao cluster do banco de dados...');
        await mongoClient.connect();
        console.log('Conectado ao MongoDB Atlas com sucesso!');

        return mongoClient;
    }catch(erro){
        console.log('Falha na conexão com o banco!', erro);
        process.exit();
    }
}