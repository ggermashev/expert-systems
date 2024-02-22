import { makeAutoObservable } from "mobx";
import { TMode } from "../types";


class ModeStore {
    private _mode: TMode

    constructor() {
        makeAutoObservable(this)

        this._mode = "create";
    }

    get mode() {
        return this._mode
    }

    set mode(val: TMode) {
        this._mode = val;
    }
}

export default new ModeStore()