// axios封装  存在着三块：请求拦截，响应拦截，保证每次请求的唯一性

import axios from "axios"
import { Toast } from "cube-ui"
// 在仓库中token是默认导出
import token from "@/store"
import * as types from "../store/action-types"


class AxiosRequest {
    constructor() {
        this.baseUrl = "http://localhost:3000/api",
            this.timeout = 3000;

        this.toast = Toast.$create({
            txt: "加载中...",
            time: 2000,
        })
        this.queue = {}  //避免多次重复请求，保证唯一性
    }

    // 设置拦截
    setInterceptor(instance, url) {
        // 请求拦截
        instance.interceptors.request.use((config) => {
            // 现在我得到的数据多余我要的 > 多出来的数据是因为上一个tab页请求延迟造成的 
            // > 那我就在当前页请求数据的时候掐断上一个页面还没完成的请求就好了，因此需要取消axios请求

            // 得到取消axios请求方法，后面每次请求，得到一个取消请求的方法
            let CancelToken = axios.CancelToken
            // console.log(CancelToken)//得到构造器函数
            // 给config上挂上CancelToken对象
            config.CancelToken = new CancelToken(function executor(c) {
                // console.log(c)//它就是构造器中自带的取消请求函数cancel，而这里将其作为参数
                token.commit(types.PUSH_TOKEN,c)
            })
            console.log(config)//它是每次请求数据都会走的请求拦截，此时会有三份


            // 当点击tabbar时，页面改变，需要调用cancel方法
            // 现将方法存到数组中，在切换路由时（也需要路由钩子），取出方法，调用cancel方法

            if (Object.keys(this.queue).length === 0) {
                this.toast.show()//使加载动画显示
            }
            this.queue[url] = url
            return config;
        }, function (error) {
            return Promise.reject(error);
        });

        // 响应拦截
        instance.interceptors.response.use((response) => {
            delete this.queue[url]
            if (Object.keys(this.queue).length === 0) {
                this.toast.hide()//加载动画隐藏
            }
            if (response.data.code === 0) {
                return response.data.data;
            }
        }, function (error) {
            return Promise.reject(error);
        });
    }

    // 发出请求
    request(options) {
        // 创建axios实例
        const instance = axios.create()
        let config = {
            ...options,//请求数据时传递参数
            baseURL: this.baseUrl,
            timeout: this.timeout
        }
        // 调用请求拦截与响应拦截
        this.setInterceptor(instance, options.url)
        return instance(config)//instance调用返回promise
    }
}

// 导出ajax对象，直接利用它来请求数据
export default new AxiosRequest

