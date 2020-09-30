
export interface Question {
    key?: string;
    question: string;
    choices?: Choice[];
    required?: boolean;
}
export interface Choice {
    label: string;
    value: any;
}
