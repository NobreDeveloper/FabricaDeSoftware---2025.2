import { hash } from "bcryptjs"
import prismaClient from "../../prisma"

interface AtendenteRequest{
    nome: string,
    login: string,
    senha: string,
    ativo: boolean,
    setorUuid: string
}

class CreateAtendenteService{
    async execute({ login, senha, nome, ativo, setorUuid }: AtendenteRequest){

        if( !login || !senha || !nome || !ativo || !setorUuid){
            throw new Error("Campos faltando")
        }

        const atendenteAldeadyExist = await prismaClient.atendente.findFirst({
            where:{
                nome: nome
            }
        })

        if(atendenteAldeadyExist){
            throw new Error("Atendente já cadastrado")
        }

        const hashPassword = await hash(senha, 8)

        const atendente = await prismaClient.atendente.create({
            data:{
                login: login,
                senha: hashPassword,
                nome: nome,
                ativo: ativo,
                fkSetor: setorUuid
            }
        })

        return atendente;

    }
}

export { CreateAtendenteService }