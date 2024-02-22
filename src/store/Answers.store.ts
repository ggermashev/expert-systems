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
                this.answers = [...this._answers, {variantId: id, positiveQuestionsId: [], negativeQuestionsId: []}]
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

    getVariantsIdByQuestions(positiveQuestionsId: number[], negativeQuestionsId: number[]) {
        const variantsId: number[] = [] 

        for (const ans of this._answers) {
            console.log(ans)
            let flag = true;
            for (const id of ans.positiveQuestionsId) {
                if (!positiveQuestionsId.includes(id)) {
                    flag = false;
                    break;
                }
            }

            for (const id of ans.negativeQuestionsId) {
                if (!negativeQuestionsId.includes(id)) {
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

    getPositiveQuestionsId(): number[]  {
        return this._answers.find(ans => ans.variantId === this._activeVariantId)?.positiveQuestionsId || []
    }

    getNegativeQuestionsId(): number[] {
        return this._answers.find(ans => ans.variantId === this._activeVariantId)?.negativeQuestionsId || []
    }

    updateText() {}

    removeItem(id: number): "positive" | "negative" {
        let isPositive = true;
        this._answers = this._answers.map(ans => {
            if (ans.variantId !== this._activeVariantId) {
                return ans
            }

            if (ans.negativeQuestionsId.includes(id)) {
                isPositive = false
            }

            return {...ans, 
                positiveQuestionsId: ans.positiveQuestionsId.filter(qid => qid !== id), 
                negativeQuestionsId: ans.negativeQuestionsId.filter(qid => qid !== id)
            }
        })

        return isPositive ? "positive" : "negative"
    }

    removeVariant(id: number) {
        this.answers = this._answers.filter(ans => ans.variantId !== id)
    }

    addPositiveItem(id: number) {
        if (this._answers.filter(ans => ans.variantId === this._activeVariantId).length === 0) {
            this.answers = [...this._answers, {variantId: this._activeVariantId, positiveQuestionsId: [id], negativeQuestionsId: []}]
            return
        }
        
        this.answers = this._answers.map(ans => {
            if (ans.variantId !== this._activeVariantId) {
                return ans
            }

            return {...ans, positiveQuestionsId: [...ans.positiveQuestionsId, id]}
        })
    }

    addNegativeItem(id: number) {
        if (this._answers.filter(ans => ans.variantId === this._activeVariantId).length === 0) {
            this.answers = [...this._answers, {variantId: this._activeVariantId, positiveQuestionsId: [], negativeQuestionsId: [id]}]
            return
        }
        
        this.answers = this._answers.map(ans => {
            if (ans.variantId !== this._activeVariantId) {
                return ans
            }

            return {...ans, negativeQuestionsId: [...ans.negativeQuestionsId, id]}
        })
    }


}

export default new AnswersStore()