import { makeAutoObservable } from "mobx";
import { IVariant } from "../types";


class VariantsStore {
    private _variants: IVariant[]
    
    constructor() {
        makeAutoObservable(this)

        this._variants = []
    }

    get variants() {
        return this._variants
    }

    set variants(val: IVariant[]) {
        this._variants = val
    }

    getKey(esName: string) {
        return `${esName}-variants`
    }

    loadVariantsFromBase(esName: string) {
        this._variants = JSON.parse(localStorage.getItem(this.getKey(esName)) || "{variants: []}").variants
    }

    loadVariantsToBase(esName: string) {
        localStorage.setItem(this.getKey(esName), JSON.stringify({variants: this._variants}))
    }
}

export default new VariantsStore()

