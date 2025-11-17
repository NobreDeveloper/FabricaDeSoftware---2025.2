import { Request, Response } from "express";
import { DeleteAtendenteService } from "../../services/atendente/DeleteAtendenteService";

class DeleteAtendenteController{
    async handle(req: Request, res: Response){

        const atendenteUuid = String(req.params.atendenteUuid);

        const fkSetor = String(req.params.setorUuid)
        
        const deleteAtendenteService = new DeleteAtendenteService();

        const atendente = await deleteAtendenteService.execute({
            atendenteUuid,
            fkSetor
        });

        return res.json(atendente);
    }
}

export { DeleteAtendenteController }