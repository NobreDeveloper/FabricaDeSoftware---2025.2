import prismaClient from "../../prisma";

interface SectorRequest{
    setorUuid: string,
    nomeSetor?: string,
    isPrimeiroContato?: boolean
}

class UpdateSectorService{
    async execute({setorUuid, nomeSetor, isPrimeiroContato}:SectorRequest){
        
        const sectorExist = await prismaClient.setor.findUnique({
            where:{
                id: setorUuid
            }
        })

        if(!sectorExist){
            throw new Error("Setor não encontrado")
        }


        
        const data:{nomeSetor?: string, isPrimeiroContato?: boolean} = {}

        if(nomeSetor != undefined){
            data.nomeSetor = nomeSetor
        }

        if(isPrimeiroContato != undefined){
            data.isPrimeiroContato = isPrimeiroContato
        }

        if (Object.keys(data).length === 0) {
            throw new Error("Nenhum campo para atualizar foi informado.");
        }

        const sector = await prismaClient.setor.update({
            where:{
                id: setorUuid
            }, 
            
            data
        })

        return sector;

    }
}

export { UpdateSectorService }