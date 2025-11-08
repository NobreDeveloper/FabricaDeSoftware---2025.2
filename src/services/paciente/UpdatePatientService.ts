import { StatusPaciente } from "@prisma/client";
import prismaClient from "../../prisma";

interface PatientRequest{
    pacienteUuid: string,
    nome?: string,
    ticket?: string,
    prioridade?: boolean,
    atendimentoInfantil?: boolean,
    status?: StatusPaciente

    fkSetor?: string
    fkAtendente?: string
                                                                                                                                                                                                                                                                                                                                      
}

class UpdatePatientService{
    async execute({pacienteUuid, nome, ticket, prioridade, atendimentoInfantil, status, fkSetor, fkAtendente }:PatientRequest){
        
        const patientExist = await prismaClient.paciente.findUnique({
            where:{
                id: pacienteUuid
            }
        })

        if(!patientExist){
            throw new Error("Paciente não encontrado")
        }
        
        const data:{nome?: string, ticket?: string, prioridade?: boolean, atendimentoInfantil?: boolean, status?: StatusPaciente, fkSetor?: string, fkAtendente?: string} = {}

        if(nome != undefined){
            data.nome = nome
        }

        if(ticket != undefined){
            data.ticket = ticket
        }

        if(prioridade != undefined){
            data.prioridade = prioridade
        }

        if(atendimentoInfantil != undefined){
            data.atendimentoInfantil = atendimentoInfantil
        }

        if(status != undefined){
            data.status = status
        }

        if(fkSetor != undefined){
            data.fkSetor = fkSetor
        }

        if(fkAtendente != undefined){
            data.fkAtendente = fkAtendente
        }

        if (Object.keys(data).length === 0) {
            throw new Error("Nenhum campo para atualizar foi informado.");
        }

        const patient = await prismaClient.paciente.update({
            where:{
                id: pacienteUuid
            }, 
            
            data
        })

        return patient;

    }
}

export { UpdatePatientService }