/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { tasks } from '../models/tasks';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SuggestionService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * サジェストを取得
     * サジェストを取得します。
     * @param maxDifficulty 許容できる難易度の最大値
     * @returns tasks 成功
     * @throws ApiError
     */
    public getSuggest(
        maxDifficulty: string,
    ): CancelablePromise<tasks> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/suggest',
            query: {
                'maxDifficulty': maxDifficulty,
            },
        });
    }

}
