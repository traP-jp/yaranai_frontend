/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { condition } from '../models/condition';
import type { conditions } from '../models/conditions';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ConditionService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * 状況の一覧を取得
     * 状況の一覧を取得します。
     * @returns conditions 成功
     * @throws ApiError
     */
    public getConditions(): CancelablePromise<conditions> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/condition',
        });
    }

    /**
     * 状況を作成
     * 状況を作成します。
     * @param requestBody 状況の内容
     * @returns number 成功
     * @throws ApiError
     */
    public postCondition(
        requestBody: string,
    ): CancelablePromise<number> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/condition',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 状況を更新
     * 状況を更新します。
     * @param id 状況のID
     * @param requestBody 状況の内容
     * @returns condition 成功
     * @throws ApiError
     */
    public putCondition(
        id: number,
        requestBody: string,
    ): CancelablePromise<condition> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/condition/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 状況を削除
     * 状況を削除します。
     * @param id 状況のID
     * @returns condition 成功
     * @throws ApiError
     */
    public deleteCondition(
        id: number,
    ): CancelablePromise<condition> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/condition/{id}',
            path: {
                'id': id,
            },
        });
    }

}
