import { makeAutoObservable } from "mobx";
import { IAnswer, IQuestion } from "../types";


class AnswersStore {
    private _answers: IAnswer[]
    private _activeVariantId: number;

    constructor() {
        makeAutoObservable(this)

        this._answers = []
        this._activeVariantId = -1;
    }

    get answers() {
        return this._answers
    }

    get activeVariantId() {
        return this._activeVariantId
    }

    set answers(val: IAnswer[]) {
        this._answers = val;
    }

    set activeVariantId(id: number) {
        this._activeVariantId = id
    }

    getKey(esName: string) {
        return `${esName}-answer`
    }

    addAllVariantsToAnswers(variantsId: number[]) {
        for (const id of variantsId) {
            if (!this._answers.find(ans => ans.variantId === id)) {
                this.answers = [...this._answers, {variantId: id, questionsId: []}]
            }
        }
    }

    loadAnswersFromBase(esName: string) {
        this.answers = JSON.parse(localStorage.getItem(this.getKey(esName)) || "{}")?.answers || []
    }

    loadAnswersToBase(esName: string) {
        localStorage.setItem(this.getKey(esName), JSON.stringify({answers: this._answers}))
    }

    removeSystem(esName: string) {
        localStorage.removeItem(this.getKey(esName))
    }

    getVariantsIdByQuestions(questionsId: number[]) {
        const variantsId: number[] = [] 

        for (const ans of this._answers) {
            let flag = true;
            for (const id of ans.questionsId) {
                if (!questionsId.includes(id)) {
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

    getQuestionsId(): number[]  {
        return this._answers.find(ans => ans.variantId === this._activeVariantId)?.questionsId || []
    }

    updateText() {}

    removeItem(id: number) {
        this._answers = this._answers.map(ans => {
            if (ans.variantId !== this._activeVariantId) {
                return ans
            }

            return {...ans, questionsId: ans.questionsId.filter(qid => qid !== id)}
        })
    }

    removeVariant(id: number) {
        this.answers = this._answers.filter(ans => ans.variantId !== id)
    }

    addItem(id: number) {
        if (this._answers.filter(ans => ans.variantId === this._activeVariantId).length === 0) {
            this.answers = [...this._answers, {variantId: this._activeVariantId, questionsId: [id]}]
            return
        }
        
        this.answers = this._answers.map(ans => {
            if (ans.variantId !== this._activeVariantId) {
                return ans
            }

            return {...ans, questionsId: [...ans.questionsId, id]}
        })
    }


}

export default new AnswersStore()