import { Router } from "express";
import { ReadConfigController } from "./controllers/config/ReadConfigController";
import { CreateConfigController } from "./controllers/config/CreateConfigController";
import { UpdateConfigController } from "./controllers/config/UpdateConfigController";
import { DeleteConfigController } from "./controllers/config/DeleteConfigController";
import { ReadAdController } from "./controllers/anuncio/ReadAdController";
import { CreateAdController } from "./controllers/anuncio/CreateAdController";
import { UpdateAdController } from "./controllers/anuncio/UpdateAdController";
import { DeleteAdController } from "./controllers/anuncio/DeleteAdController";
import { ReadDepartmentController } from "./controllers/setor/ReadDepartmentController";
import { CreateDepartmentController } from "./controllers/setor/CreateDepartmentController";
import { UpdateDepartmentController } from "./controllers/setor/UpdateDepartmentController";
import { DeleteDepartmentController } from "./controllers/setor/DeleteDepartmentController";
import { ReadRecepcionistController } from "./controllers/atendente/ReadRecepcionistController";
import { CreateRecepcionistController } from "./controllers/atendente/CreateRecepcionistController";
import { UpdateRecepcionistController } from "./controllers/atendente/UpdateRecepcionistController";
import { DeleteRecepcionistController } from "./controllers/atendente/DeleteRecepcionistController";

const router = Router();

    // Configuracao 
    router.get('/api/config', new ReadConfigController().handle)

    router.post('/api/config', new CreateConfigController().handle)

    router.put('/api/config/:id', new UpdateConfigController().handle)

    router.delete('/api/config/:id', new DeleteConfigController().handle)

    // Anuncio
    router.get('/api/ad', new ReadAdController().handle)

    router.post('/api/ad', new CreateAdController().handle)

    router.put('/api/ad/:id', new UpdateAdController().handle)

    router.delete('/api/ad/:id', new DeleteAdController().handle)

    // Setor
    router.get('/api/setor', new ReadDepartmentController().handle)

    router.post('/api/setor', new CreateDepartmentController().handle)

    router.put('/api/setor/:id', new UpdateDepartmentController().handle)

    router.delete('/api/setor/:id', new DeleteDepartmentController().handle)

    // Atendente
    router.get('/api/setor/atendente', new ReadRecepcionistController().handle)

    router.post('/api/setor/atendente', new CreateRecepcionistController().handle)

    router.put('/api/setor/atendente/:id', new UpdateRecepcionistController().handle)

    router.delete('/api/setor/atendente/:id', new DeleteRecepcionistController().handle)

export { router };