import { Request, Response } from "express";
import { UpdatePatientService } from "../../services/paciente/UpdatePatientService";

class UpdatePatientController{
    async handle(req: Request, res: Response){
        
        const { nome, ticket, prioridade, atendimentoInfantil, status, fkSetor, fkAtendente } = req.body;

        const pacienteUuid = String(req.params.id)

        const updatePatientController = new UpdatePatientService();

        const patient = await updatePatientController.execute({
            pacienteUuid,
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

export { UpdatePatientController }