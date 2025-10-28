import { Request, Response } from "express";
import { DeleteRecepcionistService } from "../../services/atendente/DeleteRecepcionistService";

class DeleteRecepcionistController{
    async handle(req: Request, res: Response){

        const recepcionistUuid = String(req.params.id);
        
        const deleteRecepcionistService = new DeleteRecepcionistService();

        const recepcionist = await deleteRecepcionistService.execute({
            recepcionistUuid
        });

        return res.json(recepcionist);
    }
}

export { DeleteRecepcionistController }