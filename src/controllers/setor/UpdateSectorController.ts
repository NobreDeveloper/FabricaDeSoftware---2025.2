import { Request, Response } from "express";
import { UpdateSectorService } from "../../services/setor/UpdateSectorService.ts";



class UpdateSectorController{
    async handle(req: Request, res: Response){

        // Necessário o trecho String pra que o uuid não seja undefined
        const setorUuid = String(req.params.id);

        const {nomeSetor, isPrimeiroContato} = req.body;

        const updateSectorService = new UpdateSectorService();

        const sector = await updateSectorService.execute({
            setorUuid,
            nomeSetor,
            isPrimeiroContato
        })

        return res.json(sector)
    }
}

export { UpdateSectorController }