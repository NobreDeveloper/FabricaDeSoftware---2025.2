import prismaClient from "../../prisma"

interface SectorRequest{
    setorUuid: string, 
    
}

class DeleteSectorService{
    async execute({setorUuid}:SectorRequest){
        
        const sectorExist = await prismaClient.setor.findUnique({
            where:{
                id: setorUuid
            }
        })

        if(!sectorExist){
            throw new Error("Setor não encontrado")
        }

        const sector = await prismaClient.setor.delete({
            where:{
                id: setorUuid
            }
        })

        return sector;

    }
}

export { DeleteSectorService }