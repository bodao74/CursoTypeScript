import { body } from 'express-validator';

export const movieCreateValidation = () => {
    return [
        body('title')
            .isString()
            .withMessage('o título é obrigatório')
            .isLength({ min: 4 })
            .withMessage('mínimo de 5 caracteres.'),
        body('rating')
            .isNumeric()
            .withMessage('A nota precisa ser um número')
            .custom((value: number) => {
                if (value < 1 || value > 10) {
                    throw new Error('A nota/rating precisa estar entre 0 e 10.')
                }
                return true;
            }),
        body('description')
            .isString()
            .withMessage('A descrição é obrigatória.'),
        body('director')
            .isString()
            .withMessage('o nome do diretor é obrigatório'),
        body('poster')
            .isURL()
            .withMessage('imagem deve ser uma URL')
    ]
};