import prismaClient from "../../prisma"

interface RecepcionistRequest{
    recepcionistUuid: string
}

class DeleteRecepcionistService{
    async execute({recepcionistUuid}:RecepcionistRequest){

        const recepcionistExist = await prismaClient.atendente.findUnique({
            where:{
                id: recepcionistUuid
            }
        })

        if(!recepcionistExist){
            throw new Error("Atendente não encontrado")
        }

        const recepcionist = await prismaClient.atendente.delete({
            where:{
                id: recepcionistUuid
            }
        })

        return recepcionist;
    }
}

export { DeleteRecepcionistService }