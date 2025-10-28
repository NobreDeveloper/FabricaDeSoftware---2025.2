import { Request, Response } from "express";
import { CreateRecepcionistService } from "../../services/atendente/CreateRecepcionistService";

class CreateRecepcionistController{
    async handle(req: Request, res: Response){

        const { nome, login, senha, ativo, fkSetor } = req.body;

        const createRecepcionistService = new CreateRecepcionistService();

        const recepcionist = await createRecepcionistService.execute({
            nome,
            login,
            senha,
            ativo, 
            fkSetor
        });

        return res.json(recepcionist);

    }
}

export { CreateRecepcionistController }