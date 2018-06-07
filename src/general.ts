import Vue from 'vue';

// TODO MOVE
class Constants {
    APP_NAME = "MY NEW APP";
}
// TODO MOVE
class ObjectUtils {

}

interface IAppGLobals {
    constants: Constants;
    objectUtils: ObjectUtils;
}
declare global {
    interface Window {
        appGlobals: IAppGLobals;
    }
}
class AppGLobals implements IAppGLobals  {

    constants: Constants;
    objectUtils: ObjectUtils;

    constructor() {
        this.constants = new Constants();
        this.objectUtils = new ObjectUtils();
    }
}
/**
 * use only from javascript
 */
export function initAppGlobalsOnWindow() {    
    window.appGlobals = new AppGLobals();   
}
