import { Request, Response } from "express";
import { CreateAtendenteService } from "../../services/atendente/CreateAtendenteService";


class CreateAtendenteController{
    async handle(req: Request, res: Response){

        const { nome, login, senha, ativo } = req.body;

        const setorUuid = String(req.params.setorUuid)

        const createAtendenteService = new CreateAtendenteService();

        const atendente = await createAtendenteService.execute({
            nome,
            login,
            senha,
            ativo, 
            setorUuid
        });

        return res.json(atendente);

    }
}

export { CreateAtendenteController }