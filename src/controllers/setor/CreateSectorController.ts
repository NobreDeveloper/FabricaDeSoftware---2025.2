import { Request, Response } from "express";
import { CreateSectorService } from "../../services/setor/CreateSectorService";

class CreateSectorController{
    async handle(req: Request, res: Response){

        const { nomeSetor, isPrimeiroContato } = req.body;

        const createSectorService = new CreateSectorService();

        const sector = await createSectorService.execute({
            nomeSetor,
            isPrimeiroContato
        })

        return res.json(sector); 
    }
}

export { CreateSectorController }