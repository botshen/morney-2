import recordsStore from "./records.Store";
import tagsStore from "./tags.Store";
import React from "react";

class RootStore {
    recordsStore: typeof recordsStore;
    tagsStore: typeof tagsStore;
    constructor() {
        this.recordsStore = recordsStore;
        this.tagsStore = tagsStore;
    }

}

const rootStore = new RootStore();
const context = React.createContext(rootStore);

const useStore = () => React.useContext(context);

export { useStore };
