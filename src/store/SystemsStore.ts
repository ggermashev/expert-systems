import { makeAutoObservable } from "mobx";
import { TMode } from "../types";


class SystemsStore {
    private _currentSystem: string
    private _hasChanged: boolean
    

    constructor() {
        makeAutoObservable(this)

        this._currentSystem = ""
        this._hasChanged = true
    }

    get currentSystem() {
        return this._currentSystem
    }

    get hasChanged() {
        return this._hasChanged
    }

    set currentSystem(val: string) {
        this._currentSystem = val;
    }

    set hasChanged(val: boolean) {
        this._hasChanged = val
    }

    getAllSystems() {
        return JSON.parse(localStorage.getItem('systems') || "{}")?.systems || []
    }

    addSystem(title: string) {
        const systems: string[] = JSON.parse(localStorage.getItem("systems") || "{}")?.systems || []

        if (systems.includes(title)) {
            console.log(`Такая ЭС уже существует: ${title}`)
            return;
        }

        localStorage.setItem('systems', JSON.stringify({systems: [...systems, title]}))
    }

    removeSystem(esName: string) {
        let systems: string[] = JSON.parse(localStorage.getItem("systems") || "{}")?.systems || []
        systems = systems.filter(s => s !== esName)
        localStorage.setItem('systems', JSON.stringify({systems}))
    }
}

export default new SystemsStore()