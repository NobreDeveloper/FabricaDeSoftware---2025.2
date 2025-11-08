import { Request, Response } from "express";
import { ReadPatientService } from "../../services/paciente/ReadPatientService";

class ReadPatientController{
    async handle(req: Request,res: Response){
        
        const readPatientService = new ReadPatientService();

        const patient = await readPatientService.execute();
        
        return res.json(patient)
    }
}

export { ReadPatientController }