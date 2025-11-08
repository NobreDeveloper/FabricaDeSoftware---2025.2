import { Request, Response } from "express";
import { CreatePatientService } from "../../services/paciente/CreatePatientService";

class CreatePatientController{
    async handle(req: Request, res: Response){
        
        const { nome, ticket, prioridade, atendimentoInfantil, status, fkSetor, fkAtendente } = req.body;

        const createPatientService = new CreatePatientService();

        const patient = await createPatientService.execute({
            nome, 
            ticket,
            prioridade,
            atendimentoInfantil,
            status,
            fkSetor,
            fkAtendente
        })

        return res.json(patient)

    }
}

export { CreatePatientController }

