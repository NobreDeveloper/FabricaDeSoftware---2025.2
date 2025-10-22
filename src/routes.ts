import { Router } from "express";
import { ReadConfigController } from "./controllers/config/ReadConfigController";
import { CreateConfigController } from "./controllers/config/CreateConfigController";
import { UpdateConfigController } from "./controllers/config/UpdateConfigController";
import { DeleteConfigController } from "./controllers/config/DeleteConfigController";

const router = Router();

    // Configuration 
    router.get('/api/config', new ReadConfigController().handle)

    router.post('/api/config', new CreateConfigController().handle)

    router.put('/api/config/:id', new UpdateConfigController().handle)

    router.delete('/api/config/:id', new DeleteConfigController().handle)

export { router };