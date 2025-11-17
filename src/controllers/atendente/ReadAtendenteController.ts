import { Request, Response } from "express";
import { ReadAtendenteService } from "../../services/atendente/ReadAtendenteService";

class ReadAtendenteController{
    async handle(req: Request, res: Response){

        const fkSetor = String(req.params.setorUuid)
        
        const readAtendenteService = new ReadAtendenteService();

        const atendente = await readAtendenteService.execute({
            fkSetor
        });

        return res.json(atendente);
    }
}

export { ReadAtendenteController }