
export interface IQuestion {
    id: number;
    text: string;
}

export interface IVariant {
    id: number;
    text: string;
}

export interface IAnswer {
    questionsId: number[];
    variantId: number;
}

export type TMode = "create" | "use";