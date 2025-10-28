import { Request, Response } from "express";
import prismaClient from "../../prisma";

class ReadRecepcionistController{
    async handle(req: Request, res: Response){
        
        const recepcionist = await prismaClient.atendente.findMany();

        return res.json(recepcionist);
    }
}

export { ReadRecepcionistController }