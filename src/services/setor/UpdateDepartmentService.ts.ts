import prismaClient from "../../prisma";

interface DepartmentRequest{
    setorUuid: string,
    nomeSetor?: string,
    isPrimeiroContato?: boolean
}

class UpdateDepartmentService{
    async execute({setorUuid, nomeSetor, isPrimeiroContato}:DepartmentRequest){
        
        const departmentExist = await prismaClient.setor.findUnique({
            where:{
                id: setorUuid
            }
        })

        if(!departmentExist){
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

        const department = await prismaClient.setor.update({
            where:{
                id: setorUuid
            }, 
            
            data
        })

        return department;

    }
}

export { UpdateDepartmentService }