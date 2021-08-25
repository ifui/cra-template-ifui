import { AxiosPromise, AxiosRequestConfig } from 'axios'
import request from './request'

type RequestPromise<T = any> = AxiosPromise<T>

class RESTful<T> {
  private readonly url: string

  constructor(url: string) {
    this.url = url
  }

  /**
   * 发送 GET 请求
   *
   * @param params 参数
   * @param options request 配置项
   * @returns Promise
   */
  get(
    params?: object | URLSearchParams,
    options?: AxiosRequestConfig
  ): RequestPromise<T> {
    return request(this.url, {
      method: 'GET',
      params,
      ...options,
    })
  }

  /**
   * 发送 POST 请求
   *
   * @param data 参数
   * @param options request 配置项
   * @returns Promise
   */
  post(data?: unknown, options?: AxiosRequestConfig): RequestPromise<T> {
    return request(this.url, {
      method: 'POST',
      data,
      ...options,
    })
  }

  /**
   * 显示资源详情
   *
   * @param id 资源ID
   * @param options request 配置项
   * @returns Promise
   */
  show(id: string, options?: AxiosRequestConfig): RequestPromise<T> {
    return request(this.url + '/' + id, {
      method: 'GET',
      ...options,
    })
  }

  /**
   * 发送 PUT 请求
   * 更新某个资源（全量）
   *
   * @param id 资源ID
   * @param data 参数
   * @param options request 配置项
   * @returns Promise
   */
  put(
    id: string,
    data?: unknown,
    options?: AxiosRequestConfig
  ): RequestPromise<T> {
    return request(this.url + '/' + id, {
      method: 'PUT',
      data,
      ...options,
    })
  }

  /**
   * 发送 PATCH 请求
   * 更新某个资源（部分）
   *
   * @param id 资源ID
   * @param data 参数
   * @param options request 配置项
   * @returns Promise
   */
  patch(
    id: number,
    data?: unknown,
    options?: AxiosRequestConfig
  ): RequestPromise<T> {
    return request(this.url + '/' + id, {
      method: 'PATCH',
      data,
      ...options,
    })
  }

  /**
   * 发送 DELETE 请求
   * 删除某个资源
   *
   * @param id 待删除资源ID
   * @param options request 配置项
   * @returns Promise
   */
  delete(id: number, options?: AxiosRequestConfig): RequestPromise<T> {
    return request(this.url + '/' + id, {
      method: 'DELETE',
      ...options,
    })
  }

  /**
   * 发送 DELETE 请求
   * 批量删除资源
   *
   * @param ids 删除资源ID数组
   * @returns Promise
   */
  batch(ids: number[]): RequestPromise<T> {
    return request(this.url, {
      method: 'DELETE',
      data: {
        delete_ids: ids,
      },
    })
  }
}

export default RESTful
