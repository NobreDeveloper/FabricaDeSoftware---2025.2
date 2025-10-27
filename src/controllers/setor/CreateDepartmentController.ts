import { Request, Response } from "express";
import { CreateDepartmentService } from "../../services/setor/CreateDepartmentService";

class CreateDepartmentController{
    async handle(req: Request, res: Response){

        const { nomeSetor, isPrimeiroContato } = req.body;

        const createDepartmentService = new CreateDepartmentService();

        const department = await createDepartmentService.execute({
            nomeSetor,
            isPrimeiroContato
        })

        return res.json(department); 
    }
}

export { CreateDepartmentController }