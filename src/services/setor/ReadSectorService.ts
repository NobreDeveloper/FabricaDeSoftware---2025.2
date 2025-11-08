import prismaClient from "../../prisma";

class ReadSectorService {
    async execute(){

        const sector = await prismaClient.setor.findMany()

        return sector;
    }
}

export { ReadSectorService }