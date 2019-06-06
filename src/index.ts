export { AppDecorator as App, IApp, IAppStatic, IAppConfig } from './decorators/App';
export { ModulesDecorator as Modules } from './decorators/Modules';
export { BaseModule } from './lib/BaseModule';
export { ModuleDecorator as Module, IModuleConfig } from './decorators/Module';
export {
    GetDecorator as Get,
    PostDecorator as Post,
    PatchDecorator as Patch,
    PutDecorator as Put,
    DeleteDecorator as Delete,
    IRouteConfig
} from './decorators/Route';
export {
    AuthDecorator as Auth,
} from './decorators/Auth';
export {
    ParamDecorator as Params,
    PayloadDecorator as Payload,
    QueryDecorator as Query,
} from './decorators/Validation';

export { bootstrap } from './lib/bootstrap';