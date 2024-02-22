import { makeAutoObservable } from "mobx";
import { IAnswer, IQuestion } from "../types";


class AnswersStore {
    private _answers: IAnswer[]

    constructor() {
        makeAutoObservable(this)

        this._answers = []
    }

    get answers() {
        return this._answers
    }

    set answers(val: IAnswer[]) {
        this._answers = val;
    }

    getKey(esName: string) {
        return `${esName}-answer`
    }

    loadAnswersFromBase(esName: string) {
        this.answers = JSON.parse(localStorage.getItem(this.getKey(esName)) || "{answers: []}").answers
    }

    loadAnswersToBase(esName: string) {
        localStorage.setItem(this.getKey(esName), JSON.stringify({answers: this._answers}))
    }

    getVariantsIdByQuestions(questions: IQuestion[]) {
        const variantsId: number[] = [] 

        for (const ans of this._answers) {
            let flag = true;
            for (const q of questions) {
                if (!ans.questionsId.includes(q.id)) {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                variantsId.push(ans.variantId)
            }
        }

        return variantsId
    }
}

export default new AnswersStore()