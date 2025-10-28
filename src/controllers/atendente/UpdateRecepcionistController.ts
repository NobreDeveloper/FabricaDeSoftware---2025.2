import { Request, Response } from "express";
import { UpdateRecepcionistService } from "../../services/atendente/UpdateRecepcionistService";

class UpdateRecepcionistController{
    async handle(req: Request, res: Response){

        const recepcionistUuid = String(req.params.id);

        const { nome, login, senha, ativo, fkSetor } = req.body;

        const updateRecepcionistService = new UpdateRecepcionistService();

        const recepcionist = await updateRecepcionistService.execute({
            recepcionistUuid,
            nome, 
            login,
            senha,
            ativo,
            fkSetor
        })

        return res.json(recepcionist)
    }
}

export { UpdateRecepcionistController }