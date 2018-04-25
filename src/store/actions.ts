import Person from '../interfaces/Person';
import Triggers from './triggers';
import { triggerAsyncId } from 'async_hooks';


const actions = {
    [Triggers.SET_CURRENT_PERSON]: (context: any, payload: Person) => {
      context.commit(Triggers.SET_CURRENT_PERSON, payload)
    },
}

export default actions;