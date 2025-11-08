import { Request, Response } from "express";
import { ReadSectorService } from "../../services/setor/ReadSectorService";

class ReadSectorController{
    async handle(req: Request, res: Response){

        const readSectorService = new ReadSectorService();

        const sector = await readSectorService.execute();

        return res.json(sector);
    }
}

export { ReadSectorController }