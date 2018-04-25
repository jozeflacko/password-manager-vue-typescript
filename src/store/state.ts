import Person from '../interfaces/Person';

export interface State {
    currentPerson: Person;
}

const state:State = {
    currentPerson: { email: '' },   
}

export default state;