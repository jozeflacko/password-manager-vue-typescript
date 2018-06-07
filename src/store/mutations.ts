import Person from '../interfaces/Person';
import IHolder from '../interfaces/Holder';
import Triggers from './triggers';
import { State } from './state';
import List from '../utils/List';

const mutations = {
    // PERSON
    [Triggers.SET_CURRENT_PERSON]: (state:State, payload:Person): void => { 
        state.currentPerson = payload;
    }, 
    
    // HOLDERS
    [Triggers.FETSCH_ALL_HOLDERS]: (state:State, holders:List<IHolder>): void => { 
        state.holders = holders;
    },    
    [Triggers.ADD_NEW_HOLDER]: (state:State, holder:IHolder): void => { 
        const clone = state.holders.clone();
        clone.add(holder);   
        state.holders = clone;     
    },
    [Triggers.REMOVE_HOLDER]: (state:State, holder:IHolder): void => { 
        const clone = state.holders.clone();
        clone.remove(holder);    
        console.log('holder remove', clone);
        state.holders = clone;
    },
};

export default mutations;
