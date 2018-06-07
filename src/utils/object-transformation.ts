export default class ObjectTransformation {

    public static transformObservableToObject(observable:any){
       return JSON.parse(JSON.stringify(observable));    
    }
}