import prismaClient from "../../prisma"

class ReadRecepcionistService{
    async execute(){
        
        const recepcionist = await prismaClient.atendente.findMany();

        return recepcionist;

    }
}

export { ReadRecepcionistService }