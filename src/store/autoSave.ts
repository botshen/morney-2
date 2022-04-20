//https://gist.github.com/du5rte/dbd18a1a6dc72d866737a5e95ca1e663?permalink_comment_id=3580822#gistcomment-3580822
import { autorun, set, toJS } from 'mobx'

export function autoSave(_this: any, name: string, key?: string) {
    console.log(_this);
    const storedJson = localStorage.getItem(name)
    if (storedJson) {
        set(_this, JSON.parse(storedJson))
    }
    autorun(() => {
        const value = toJS(_this)
        console.log(value);
        if (key) {
            localStorage.setItem(name, JSON.stringify(value[key]))
        } else {
            localStorage.setItem(name, JSON.stringify(value))
        }
    })
}
