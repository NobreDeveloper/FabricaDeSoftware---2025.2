import { Request, Response } from "express";
import { ReadDepartmentService } from "../../services/setor/ReadDepartmentService";

class ReadDepartmentController{
    async handle(req: Request, res: Response){

        const readDepartmentService = new ReadDepartmentService();

        const department = await readDepartmentService.execute();

        return res.json(department);
    }
}

export { ReadDepartmentController }