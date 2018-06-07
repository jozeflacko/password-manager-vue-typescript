import Person from '../interfaces/Person';
import IHolder from '../interfaces/Holder';
import List from '../utils/List';

export interface State {
    currentPerson: Person;
    holders: List<IHolder>;
}

const state:State = {
    currentPerson: { email: '' },   
    holders: new List<IHolder>(),   
}

export default state;