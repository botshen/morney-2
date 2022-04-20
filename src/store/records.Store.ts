import {  makeAutoObservable } from "mobx";

class RecordsStore {

    list = ['vue', 'react'];

    constructor() {
        makeAutoObservable(this);
    }


    addList = () => {
        this.list.push('angular');
    }


}
const recordsStore = new RecordsStore();
export default recordsStore;
