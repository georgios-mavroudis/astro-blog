import { atom } from "nanostores";

export type WithingsParams = {
    appli: number,
    user_id: number,
    start_date: number,
    end_date: number,
    user_uuid: string,
} 
export const $params = atom<WithingsParams[]>([
    {
        appli: 213,
        user_id: 213,
        start_date: 213,
        end_date: 213,
        user_uuid: '123',
    }
]);