import {  makeAutoObservable } from "mobx";
import {autoSave} from "./autoSave";

class TagsStore {

    tags = [
        { id: 1, name: "衣" },
        { id: 2, name: "是" },
        { id: 3, name: "住" },
        { id: 4, name: "行" }
    ];

    constructor() {
        makeAutoObservable(this);
        autoSave(this, 'tags2','tags');
    }





}
const tagsStore = new TagsStore();
export default tagsStore;
