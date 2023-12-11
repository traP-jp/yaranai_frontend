/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type task = {
    id: number;
    title: string;
    description: string;
    /**
     * タスクが出来る状況の状況ID(デフォルト=いつでもできるタスクは0)
     */
    possibility: number;
    /**
     * 1:気軽にできる, 2: 普通, 3: ハードルが高い
     */
    difficulty: number;
    dueDate: string;
};

