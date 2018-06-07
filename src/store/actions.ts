import Person from '../interfaces/Person';
import IHolder from '../interfaces/Holder';
import Triggers from './triggers';
import { triggerAsyncId } from 'async_hooks';

const actions = {
    [Triggers.SET_CURRENT_PERSON]: (context: any, payload: Person) => {
      context.commit(Triggers.SET_CURRENT_PERSON, payload)
    },
    [Triggers.FETSCH_ALL_HOLDERS]: (context: any, payload: IHolder) => {
      context.commit(Triggers.FETSCH_ALL_HOLDERS, payload)
    },
    [Triggers.ADD_NEW_HOLDER]: (context: any, payload: IHolder) => {
      context.commit(Triggers.ADD_NEW_HOLDER, payload)
    },
    [Triggers.REMOVE_HOLDER]: (context: any, payload: IHolder) => {
      context.commit(Triggers.REMOVE_HOLDER, payload)
    },
}

export default actions;