import { Request, Response } from "express";
import { DeleteSectorService } from "../../services/setor/DeleteSectorService";




class DeleteSectorController{
    async handle(req: Request, res: Response){

        const setorUuid = String(req.params.id)

        const deleteSectorService = new DeleteSectorService();

        const department =  await deleteSectorService.execute({
            setorUuid
        })

        return res.json(department)
    }
}

export { DeleteSectorController }