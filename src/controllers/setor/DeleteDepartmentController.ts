import { Request, Response } from "express";
import { DeleteDepartmentService } from "../../services/setor/DeleteDepartmentController";

class DeleteDepartmentController{
    async handle(req: Request, res: Response){

        const setorUuid = String(req.params.id)

        const deleteDepartmentService = new DeleteDepartmentService();

        const department =  await deleteDepartmentService.execute({
            setorUuid
        })

        return res.json(department)
    }
}

export { DeleteDepartmentController }