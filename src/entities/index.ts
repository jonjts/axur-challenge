export type Inspection = {
    keyword: string,
    id: string,
    created_at: Date
};

export type InspectionResult = {
    id: string,
    status: INSPECTION_RESULT_STATUS,
    urls: Array<string>
};

export enum INSPECTION_RESULT_STATUS {
    active = 'active', done = 'done'
};