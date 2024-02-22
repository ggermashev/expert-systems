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

    getQuestionsByIds(ids: number[]) {
        return this._questions.filter(q => ids.includes(q.id))
    }

    getKey(esName: string) {
        return `${esName}-questions`
    }

    loadQuestionsFromBase(esName: string) {
        this._questions = JSON.parse(localStorage.getItem(this.getKey(esName)) || "{}")?.questions || []
    }

    loadQuestionsToBase(esName: string) {
        localStorage.setItem(this.getKey(esName), JSON.stringify({questions: this._questions}))
    }

    removeSystem(esName: string) {
        localStorage.removeItem(this.getKey(esName))
    }

    updateText(id: number, text: string) {
        const q = this._questions.find(q => q.id === id)
        if (q) {
            q.text = text
        }
    }

    removeItem(id: number) {
        this.questions = this._questions.filter(q => q.id !== id)
    }
}

export default new QuestionsStore()