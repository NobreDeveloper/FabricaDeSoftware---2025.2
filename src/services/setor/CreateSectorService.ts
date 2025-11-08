import prismaClient from "../../prisma";


interface SectorRequest{
    nomeSetor: string
    isPrimeiroContato: boolean
}

class CreateSectorService{
    async execute({ nomeSetor, isPrimeiroContato }: SectorRequest){

        const sectorAlreadyExist = await prismaClient.setor.findFirst({
            where:{
                nomeSetor: nomeSetor
            }
        })

        if(sectorAlreadyExist){
            throw new Error("Setor já existe")
        }

        const sector = await prismaClient.setor.create({
            data:{
                nomeSetor: nomeSetor,
                isPrimeiroContato: isPrimeiroContato
            }
        })

        return sector;
    }
}

export { CreateSectorService }