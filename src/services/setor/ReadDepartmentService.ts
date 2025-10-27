import prismaClient from "../../prisma";

class ReadDepartmentService {
    async execute(){

        const department = await prismaClient.setor.findMany()

        return department;
    }
}

export { ReadDepartmentService }