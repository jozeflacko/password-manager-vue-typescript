import ObjectTransformation from './object-transformation';
import Vue from 'vue';

export default class List<T> {

    private items:Array<T>;  

    constructor(items?: Array<T>) {
        this.items = new Array<T>();
        if(items)
            this.items = items;
    }

    size(): number {
        return this.items.length;
    }

    add(item: T): void {
        this.items.push(item);
    }

    get(index: number): T {
        return this.items[index];
    }

    getAll(): Array<T> {
        return this.items;
    }

    getSize(): number {
        return this.items.length;
    }

    remove(item: T): Array<T> {

        var isObservable = item instanceof Vue

        const object = isObservable ? ObjectTransformation.transformObservableToObject(item) : item;
        this.items.forEach( (x: T, i: number)=> {
            if(x === item) {
                this.items.splice(i,1);
            }
        });
        return this.items;
    }

    find(item: T): T|null {
        let result = null;
        this.items.forEach( (x: T, i: number)=> {
            if(x === item) {
                result =  this.items.splice(i,1);
            }
        });
        return result;
    }

    clone() {
        return new List<T>(this.items.splice(0));
    }
}