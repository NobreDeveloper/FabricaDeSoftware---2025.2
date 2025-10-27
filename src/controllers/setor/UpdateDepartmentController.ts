import { Request, Response } from "express";
import { UpdateDepartmentService } from "../../services/setor/UpdateDepartmentService.ts";

class UpdateDepartmentController{
    async handle(req: Request, res: Response){

        // Necessário o trecho String pra que o uuid não seja undefined
        const setorUuid = String(req.params.id);

        const {nomeSetor, isPrimeiroContato} = req.body;

        const updateDepartmentService = new UpdateDepartmentService();

        const department = await updateDepartmentService.execute({
            setorUuid,
            nomeSetor,
            isPrimeiroContato
        })

        return res.json(department)
    }
}

export { UpdateDepartmentController }