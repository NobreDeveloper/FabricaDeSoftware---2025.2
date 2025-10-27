import prismaClient from "../../prisma";


interface DepartmentRequest{
    nomeSetor: string
    isPrimeiroContato: boolean
}

class CreateDepartmentService{
    async execute({ nomeSetor, isPrimeiroContato }: DepartmentRequest){

        const departmentAlreadyExist = await prismaClient.setor.findFirst({
            where:{
                nomeSetor: nomeSetor
            }
        })

        if(departmentAlreadyExist){
            throw new Error("Setor já existe")
        }

        const department = await prismaClient.setor.create({
            data:{
                nomeSetor: nomeSetor,
                isPrimeiroContato: isPrimeiroContato
            }
        })

        return department;
    }
}

export { CreateDepartmentService }