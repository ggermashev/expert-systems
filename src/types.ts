
export interface IQuestion {
    id: number;
    text: string;
}

export interface IVariant {
    id: number;
    text: string;
}

export interface IAnswer {
    positiveQuestionsId: number[];
    negativeQuestionsId: number[];
    variantId: number;
}

export type TMode = "create" | "use";