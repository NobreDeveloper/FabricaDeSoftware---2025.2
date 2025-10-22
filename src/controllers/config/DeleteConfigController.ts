import { Request, Response } from "express";
import { DeleteConfigService } from "../../services/config/DeleteConfigService";

class DeleteConfigController{
    async handle(req: Request, res: Response){
        
        const {configUuid} = req.body;

        const deleteConfigService = new DeleteConfigService();

        const config = await deleteConfigService.execute(
            configUuid
        )

        return res.json(config)
    }
}

export { DeleteConfigController }