import { makeAutoObservable } from "mobx";
import { IQuestion } from "../types";


class QuestionsStore {
    private _questions: IQuestion[]

    constructor() {
        makeAutoObservable(this)

        this._questions = []
    }

    get questions() {
        return this._questions
    }

    set questions(val: IQuestion[]) {
        this._questions = val
    }

    getKey(esName: string) {
        return `${esName}-questions`
    }

    loadQuestionsFromBase(esName: string) {
        this._questions = JSON.parse(localStorage.getItem(this.getKey(esName)) || "{questions: []}").questions
    }

    loadQuestionsToBase(esName: string) {
        localStorage.setItem(this.getKey(esName), JSON.stringify({questions: this._questions}))
    }
}

export default new QuestionsStore()