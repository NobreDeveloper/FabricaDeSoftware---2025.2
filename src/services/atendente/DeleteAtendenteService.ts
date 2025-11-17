import prismaClient from "../../prisma"

interface AtendenteRequest{
    atendenteUuid: string
    fkSetor: string
}

class DeleteAtendenteService{
    async execute({atendenteUuid, fkSetor}:AtendenteRequest){

        const atendenteExist = await prismaClient.atendente.findUnique({
            where:{
                id: atendenteUuid,
                fkSetor: fkSetor
            }
        })

        if(!atendenteExist){
            throw new Error("Atendente não encontrado")
        }

        const atendente = await prismaClient.atendente.delete({
            where:{
                id: atendenteUuid,
                fkSetor: fkSetor
            }
        })

        return atendente;
    }
}

export { DeleteAtendenteService }