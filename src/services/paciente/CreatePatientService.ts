import { StatusPaciente } from "@prisma/client"
import prismaClient from "../../prisma"

interface PatientRequest{
    nome: string,
    ticket: string,
    prioridade: boolean,
    atendimentoInfantil: boolean,
    status: StatusPaciente

    fkSetor: string,

    fkAtendente?: string
}

class CreatePatientService{
    async execute({ nome, ticket, prioridade, atendimentoInfantil, status, fkSetor, fkAtendente }:PatientRequest){

        const patientAlreadyExist = await prismaClient.paciente.findFirst({
            where:{
                nome: nome,
                ticket: ticket
            }
        })



        if(patientAlreadyExist){
            throw new Error("Paciente já cadastrado")
        }

        const fkSetorValid = await prismaClient.setor.findUnique({
            where:{
                id: fkSetor
            }
        })


        if(!fkSetorValid){
            throw new Error("Setor inválido")
        }

        const patient = await prismaClient.paciente.create({
            data:{
                nome: nome,
                ticket: ticket,
                prioridade: prioridade,
                atendimentoInfantil: atendimentoInfantil,
                status: status,
                fkSetor: fkSetor,
                fkAtendente: fkAtendente ?? null
            }
        })

        return patient;



    }
}

export { CreatePatientService }