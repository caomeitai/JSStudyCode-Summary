// axios封装  存在着三块：请求拦截，响应拦截，保证每次请求的唯一性

import axios from "axios"
import { Toast } from "cube-ui"


class AxiosRequest {
    constructor() {
        // 两个基本配置项
        // this.baseUrl = process.env.NODE_ENV !== production ?"http://localhost:3000/api": "/",
        this.baseUrl = "http://localhost:3000/api",
            this.timeout = 3000;

        // 加上加载动画 const toast = this.$createToast  改进
        this.toast = Toast.$create({
            txt: "加载中...",
            time: 2000,
        })
        // 定义队列，存放请求数据时的url
        this.queue = {}  //避免多次重复请求，保证唯一性
    }

    // 设置拦截，请求与响应直接函数包起来
    setInterceptor(instance, url) {
        // 请求拦截
        instance.interceptors.request.use((config) => {
            console.log("请求拦截")

            // console.log(this.queue)//{/category: "/category"}
            // console.log(Object.keys(this.queue))//得到[length: 0]  它是首次请求数据。长度为0

            if (Object.keys(this.queue).length === 0) {
                // console.log(this)//undefined  
                // this指向已经发生改变  使用箭头函数改变this指向
                this.toast.show()//使加载动画显示
            }
            this.queue[url] = url//如果是一次请求，动画加载完之后，将url放到对象中存储
            // console.log(this.queue)//{/category: "/category"}
            return config;
        }, function (error) {
            return Promise.reject(error);
        });

        // 响应拦截
        instance.interceptors.response.use((response) => {
            console.log("响应拦截")
            // 删除queue中url数据
            delete this.queue[url]

            // 请求数据url删除完毕，那么隐藏动画
            if (Object.keys(this.queue).length === 0) {
                this.toast.hide()//加载动画隐藏
            }
            if (response.data.code === 0) {
                return response.data.data;//在这里对请求回来的数据进行过滤
            }
        }, function (error) {
            return Promise.reject(error);
        });
    }

    // 发出请求，options是调用函数时所传递的配置项
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
        // 调用instance，传递的参数可能来自于类，也可能来自于传递的参数
        return instance(config)//instance调用返回promise
    }
}

// 导出ajax对象，直接利用它来请求数据
export default new AxiosRequest

// 发出axios请求  request请求数据得到的是promise，可直接.then
// let axios = new AxiosRequest()
// axios.request({url:"/getuser"},{method:"post"},{name:"wangci"})
