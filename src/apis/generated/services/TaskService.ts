/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ping } from '../models/ping';
import type { task } from '../models/task';
import type { tasks } from '../models/tasks';
import type { taskWithoutId } from '../models/taskWithoutId';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TaskService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * 疎通を確認
     * 疎通を確認するためのものエンドポイント
     * @returns ping 成功
     * @throws ApiError
     */
    public ping(): CancelablePromise<ping> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ping',
        });
    }

    /**
     * タスクの一覧を取得
     * タスクの一覧を取得します。
     * @returns tasks 成功
     * @throws ApiError
     */
    public getTasks(): CancelablePromise<tasks> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/task',
        });
    }

    /**
     * タスクを作成
     * タスクを作成します。
     * @param requestBody タスクの内容
     * @returns task 成功
     * @throws ApiError
     */
    public postTasks(
        requestBody: taskWithoutId,
    ): CancelablePromise<task> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/task',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * タスクを更新
     * タスクを更新します。
     * @param id タスクのID
     * @param requestBody タスクの内容
     * @returns task 成功
     * @throws ApiError
     */
    public updateTask(
        id: number,
        requestBody: taskWithoutId,
    ): CancelablePromise<task> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/task/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * タスクを削除
     * タスクを削除します。
     * @param id タスクのID
     * @returns task 成功
     * @throws ApiError
     */
    public deleteTask(
        id: number,
    ): CancelablePromise<task> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/task/{id}',
            path: {
                'id': id,
            },
        });
    }

}
