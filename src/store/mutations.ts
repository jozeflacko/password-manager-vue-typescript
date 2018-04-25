import Person from '../interfaces/Person';
import Triggers from './triggers';
import { State } from './state';

const mutations = {
    [Triggers.SET_CURRENT_PERSON]: (state:State, payload:Person) => { 
        state.currentPerson = payload;
    },    
}
export default mutations;