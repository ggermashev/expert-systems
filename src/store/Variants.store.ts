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

    getTextById(id: number) {
        return this._variants.find(v => v.id === id)?.text
    }

    set variants(val: IVariant[]) {
        this._variants = val
    }

    getKey(esName: string) {
        return `${esName}-variants`
    }

    loadVariantsFromBase(esName: string) {
        this._variants = JSON.parse(localStorage.getItem(this.getKey(esName)) || "{}")?.variants || []
    }

    loadVariantsToBase(esName: string) {
        localStorage.setItem(this.getKey(esName), JSON.stringify({variants: this._variants}))
    }

    removeSystem(esName: string) {
        localStorage.removeItem(this.getKey(esName))
    }

    updateText(id: number, text: string) {
        const v = this._variants.find(v => v.id === id)
        if (v) {
            v.text = text
        }
    }

    removeItem(id: number) {
        this.variants = this._variants.filter(v => v.id !== id)
    }
}

export default new VariantsStore()

