import HolderService from './holderService';
import PersonService from './personService';

export default class ServiceProvider {

    private static personService: PersonService;
    private static holderService: HolderService;
    
    public static getPersonService(): PersonService {
        if(this.personService === undefined) {
            this.personService = new PersonService;
        }
        return this.personService;
    }

    public static getHolderService(): HolderService {
        if(this.holderService === undefined) {
            this.holderService = new HolderService;
        }
        return this.holderService;
    }
}