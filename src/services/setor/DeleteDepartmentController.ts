import prismaClient from "../../prisma"

interface DepartmentRequest{
    setorUuid: string, 
    
}

class DeleteDepartmentService{
    async execute({setorUuid}:DepartmentRequest){
        
        const departmentExist = await prismaClient.setor.findUnique({
            where:{
                id: setorUuid
            }
        })

        if(!departmentExist){
            throw new Error("Setor não encontrado")
        }

        const department = await prismaClient.setor.delete({
            where:{
                id: setorUuid
            }
        })

        return department;

    }
}

export { DeleteDepartmentService }