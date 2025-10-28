import { hash } from "bcryptjs"
import prismaClient from "../../prisma"

interface RecepcionistRequest{
    recepcionistUuid: string,
    nome?: string,
    login?: string,
    senha?: string,
    ativo?: boolean,

    fkSetor?: string
}

class UpdateRecepcionistService{
    async execute({ recepcionistUuid, nome, login, senha, ativo, fkSetor }:RecepcionistRequest){

        const recepcionistFound = await prismaClient.atendente.findUnique({
            where:{
                id: recepcionistUuid
            }
        })

        if(!recepcionistFound){
            throw new Error("Atendente não encontrado")
        }

        const data:{nome?: string, login?: string, senha?: string, ativo?: boolean, fkSetor?: string} = {};

        if(nome != undefined){
            data.nome = nome
        }

        if(login != undefined){
            data.login = login
        }
        
        if(senha != undefined){

            const hashPassword = await hash(senha, 8)

            data.senha = hashPassword
        }

        if(ativo != undefined){
            data.ativo = ativo
        }

        if(fkSetor != undefined){
            data.fkSetor = fkSetor
        }

        if(Object.keys(data).length === 0){
            throw new Error("Não foi informado algo para atualizar")
        }

        const recepcionist = await prismaClient.atendente.update({
            where:{
                id: recepcionistUuid
            },
            data
        })

        return recepcionist;


    }
}

export { UpdateRecepcionistService }