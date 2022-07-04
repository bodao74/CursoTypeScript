//Controla as ações de CRUD da base de Videos
import { Request, Response } from 'express';

//Model
import { MovieModel } from '../models/Movie';

//Logger
import Logger from '../../config/logger';

//Funcao que cria os dados no banco de dados.
export async function createMovie(req: Request, res: Response) {
    try {
        const data = req.body;
        const movie = await MovieModel.create(data);
        return res.status(201).json(movie);
    } catch (error: any) {
        Logger.error(`Erro no sistema: ${error.message}`);
    }
}

//Função que encontra um filme pelo ID.
export async function findMovieById(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const movie = await MovieModel.findById(id);
        if (!movie) {
            return res.status(404).json({ error: "o filme não existe." });
        } else {
            return res.status(200).json(movie);
        }

    } catch (error: any) {
        Logger.error(`Erro no sistema: ${error.message}`);
    }
}


//Função que retorna todos os filmes.
export async function getAllMovies(req: Request, res: Response) {
    try {
        const movies = await MovieModel.find();
        if (movies) {
            return res.status(200).json(movies);
        } else {
            throw new Error('Não há filmes cadastrados');
        }

    } catch (error: any) {
        Logger.error(`Erro no sistema - ${error.message}`);
    }
}

//Função que remove  um filme conforme o seu ID.
export async function removeMovie(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const movie = await MovieModel.findById(id);
        Logger.info(id);
        if (!movie) {
            return res.status(404).json({ error: 'O filme não existe.' });
        } else {
            await movie.delete();
            return res.status(200).json("Filme removido com sucesso.");
        }
    } catch (error: any) {
        Logger.error(`erro no sistema: ${error.message}`);
        return res.status(500).json({ error: 'Por favor, tente mais tarde.' });
    }
}


//Atualiza os dados do filme de ID específico.
export async function updateMovie(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const data = req.body;
        const movie = await MovieModel.findById(id);
        //Logger.info(`dados: ${movie}`);
        if (!movie) {
            return res.status(404).json({ error: 'O filme não existe.' });
        } else {
            await MovieModel.updateOne({ _id: id }, data);
            return res.status(200).json(data);
        }
    } catch (error: any) {
        Logger.error(`Error message: ${error.message}`);
        res.status(500).json({ error: 'Não foi possível atualizar. Tente mais tarde' })
    }
}