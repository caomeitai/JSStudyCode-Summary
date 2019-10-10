// 存储数据  里面存放的是键值对
export const setLocal = (key,value)=>{
  if(typeof value == 'object'){
      value = JSON.stringify(value)//将对象转成json字符串
  }
  localStorage.setItem(key,value)
}

// 获取数据
export const getLocal = (key)=>{
  localStorage.getItem(key)
}
