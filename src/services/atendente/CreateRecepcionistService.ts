import { hash } from "bcryptjs"
import prismaClient from "../../prisma"

interface RecepcionistRequest{
    nome: string,
    login: string,
    senha: string,
    ativo: boolean,
    fkSetor: string
}

class CreateRecepcionistService{
    async execute({ login, senha, nome, ativo, fkSetor }: RecepcionistRequest){

        if( !login || !senha || !nome || !ativo || !fkSetor){
            throw new Error("Campos faltando")
        }

        const recepcionistAldeadyExist = await prismaClient.atendente.findFirst({
            where:{
                nome: nome
            }
        })

        if(recepcionistAldeadyExist){
            throw new Error("Atendente já cadastrado")
        }

        const hashPassword = await hash(senha, 8)

        const recepcionist = await prismaClient.atendente.create({
            data:{
                login: login,
                senha: hashPassword,
                nome: nome,
                ativo: ativo,
                fkSetor: fkSetor
            }
        })

        return recepcionist;

    }
}

export { CreateRecepcionistService }