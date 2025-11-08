import { Request, Response } from "express";
import { DeletePatientService } from "../../services/paciente/DeletePatientService";

class DeletePatientController{
    async handle(req: Request, res: Response){
        
        const pacienteUuid = String(req.params.id);

        const deletePatientService = new DeletePatientService();

        const patient = await deletePatientService.execute({
            pacienteUuid
        })

        return res.json(patient)

    }
}

export { DeletePatientController }