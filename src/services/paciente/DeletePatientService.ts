import prismaClient from "../../prisma"

interface PatientRequest{
    pacienteUuid: string
}

class DeletePatientService{
    async execute({pacienteUuid}:PatientRequest){
        

        const paciente = await prismaClient.paciente.delete({
            where:{
                id: pacienteUuid
            }
        })

        return paciente;
    }
}

export { DeletePatientService }