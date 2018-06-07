import firebase from 'firebase';
import store from '../store';
import Triggers from '../store/triggers';
import IHolder from '../interfaces/Holder';
import List from '../utils/List';

export default class HolderService {

    public fetchAll(): void {
        
        // TODO Fetch from firebase  
        
        const holders = new List<IHolder>();
        holders.add({
            url:'www.facebook.com',
            login:'jlacko33@gmail.com',
            password:'123456789',
        });
        holders.add({
            url:'www.google.com',
            login:'jlacko44@gmail.com',
            password:'987654321',
        });       

        // then
        store.dispatch(Triggers.FETSCH_ALL_HOLDERS, holders);
    }

    public addNew(holder: IHolder): void {
        // TODO set into database
        
        // then
        store.dispatch(Triggers.ADD_NEW_HOLDER, holder);
    }

    public remove(holder: IHolder): void {
        // TODO set into database

        store.dispatch(Triggers.REMOVE_HOLDER, holder);
    }

    public getAllLocal(): List<IHolder> {
        return store.state.holders;
    }   
    
}