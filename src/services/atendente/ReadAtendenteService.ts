import prismaClient from "../../prisma"

interface AtendenteRequest{
    fkSetor: string
}

class ReadAtendenteService{
    async execute({ fkSetor }:AtendenteRequest){
        
        if(!fkSetor){
            throw new Error("Setor não encontrado")
        }
        
        const atendente = await prismaClient.atendente.findMany({
            where:{
                fkSetor: fkSetor
            }
        });

        return atendente;

    }
}

export { ReadAtendenteService }