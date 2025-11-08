import prismaClient from "../../prisma"

class ReadPatientService{
    async execute(){

        const patient = await prismaClient.paciente.findMany({});


        return patient;
    }
}

export { ReadPatientService }