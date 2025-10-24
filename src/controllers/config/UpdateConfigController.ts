import { Request, Response } from "express";
import { UpdateConfigService } from "../../services/config/UpdateConfigService";

class UpdateConfigController{
    async handle(req: Request, res: Response){

        const configUuid = req.params.id;

        const {parametro, valor} = req.body;

        if(!configUuid){
            throw new Error("Identificador inválido")
        }

        const updateConfigService = new UpdateConfigService();

        const config = await updateConfigService.execute({
            configUuid,
            parametro,
            valor
        })

        return res.json(config)
    }
}

export { UpdateConfigController }