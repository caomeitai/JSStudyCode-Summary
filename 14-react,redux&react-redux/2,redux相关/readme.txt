redux学习内容
  1，redux概念：
      redux与vue相比较的话，类似于vuex。vuex是专门针对vue设计，仅仅用于vue；
      但redux却是一个独立的状态管理器，可以配合react，jq，js，vue来用；想要学习redux，不能直接在react中用，先研究redux中的使用
  2，redux下载：
    在 https://www.bootcdn.cn/redux/ 上面下载redux源码
  3，redux相关内容：
  1）store：代表仓库，在仓库中存放着数据（状态）
      问：如何创建一个仓库store ？
      答：把redux源码引入到项目，项目中就有一个Redux对象；通过reduc对象中的createStore创建仓库
  2）reducer:仓库的管理员，在创建仓库时，需要给仓库指定一个reducer(仓库管理员)
      管理员reducer：需要传递一个老的状态state和一个action,管理员给你返回一个新的状态newstate；
      传递给管理员的状态与最终返回的状态要完全一致，那么称其为纯函数
  3）action:表示动作，修改状态的一个动作；它是一个对象。 {type:"increatment"}  {type:decreatement}
  4，相关步骤：
    1）创建store：let store = Redux.createStore()；
    2）创建时要求分配管理员reducer:let store = Redux.createStore(reducer)
    3）产生管理员reducer:
      1，定义好state和action
        const initstate = {count:0}
        const addcount = {type:"ADDCOUNT"}
        const subcount = {type:"SUBCOUNT"}
      2，除了直接定义的action以外，还可以通过函数产生一个action，相当于action creator   
        函数的目的就是为了产生一个action，其返回值自然也就是action
        function increatement(flag) {
              return {
                  type: "INCREAMENT",
                  flag//可以传递参数，在dispatch中调用时传递的参数即为flag
              }
          }
      3，产生reducer
      function reducer(state=initstate,action){
          switch(action.type){
              case "xxx":
                return {state:newstate}
              case "xxxx":
                return {state:newstate} 
              default:
              return state     
          }
      }
    3）获取状态：state，store.getState()可以从仓库中得到状态
    4）派发dispatch一个action，根据该action来得到reducer管理员，由旧状态与action得到新的状态。 
    5）订阅subscribe，当仓库中的数据发生改变时，会调用回调函数
        store.subscribe(()=>{
          console.log(store.getStore())//获取状态
        }) 
    6）在仓库中存在订阅与取消订阅两种情况：
        1）在自己写的redux中，取消订阅就是将前面的订阅取消掉；
        2）源码中可能存在其他参数，并不能直接将订阅的内容完全取消订阅，在页面中仍会出现状态的改变。   
    小结：在redux中，store是核心，通过Redux.createStore可以创建一个store；这就需要给store分配一个管理员， 
        管理员是一个纯函数，当修改状态时，需要让管理员来修改，那么你需要给管理员一个老的状态和一个action，aciotn表示修改状态的一个动作，
        管理员根据这个老的状态和action就会返回给你一个新的状态，当状态发生改变，就会触发subscribe的回调函数，
        状态改变要求给管理员派发一个动作action，通过dispatch给管理员派发动作。  


---------------------------------------------------
react-redux学习内容
1，react-redux安装：
     npm i react-redux --save          
2，react是一个独立的框架，redux是一个独立的状态管理器；两者通过react-redux结合起来使用。   
  最初的react组件中是不存在状态的，也被称为是UI组件；而store中的数据肯定是要显示到组件中，
  需要进行映射此时也就存在了状态，被称为智能组件。
3，计数器实现步骤：
   首先：创建react无状态的UI组件(Add,Sub,Show,Counter)，使其渲染到页面(App.js)根组件中
   然后：创建redux中的仓库等一系列内容store-->reducer-->actions--->redux初步结构完成  
   最后：react-redux中的connect方法将redux中的状态映射到react中的组件上去
        1，connect()():第一个()中存在着映射状态和映射dispatch方法的方法；
                       第二个()就可将无状态组件放进去
           这样两步就可将UI组件变为智能组件。
        此时会报错，想要是每个组件都能够用到store，需要在根组件使用<Provider store={store}></Provider>将<App></App>包起来，表示给其提供store仓库 
        这样才算完全的映射成功，在对应的智能组件中就可拿到相关属性props  
           1）映射状态是将redux中的状态赋给无状态UI组件
           2）映射dispatch方法时会用到redux中的bindActionCreators该方法，需要传递两个参数actions和dispatch
4，react-redux中提供一个方法，叫connect方法，它会把redux中的状态映射到react中的某个组件中，如果映射成功啦！组件就存在了状态，成为了智能组件。
  connect表示连接，你可以当成是把redux和react连接到一起，这里的连接指的是将redux中的状态映射到react组件上去
5，想要让哪个组件变成智能组件就可在哪里引入connect方法

6，action分为两种：同步的action和异步的action。
  1）如果一个action发出后，reducer能够立马计算出新的state，这个action就是同步的；否则就是异步的。
  2）同步加一与异步加一操作，最终使用的action都是一样的，异步的action creator最终调用的仍是同步的action creator
  3）同步的action creator返回一个对象；而异步的需要返回一个函数function(){}，
     且在函数中有两个参数dispatch和getState，在函数中进行异步操作，会dispatch一个同步action。
  4）默认情况下，redux不支持异步action，如果想要解决异步action需要中间件
     中间件本质是函数，位于请求与响应中间，在redux中，中间件可以对要派发的action进行增强，使得原本不可以处理的异步action可以处理
  5）redux-thunk中间件可以处理异步，它可以让action creator先不返回对象而是返回一个函数，以便于在函数内部就可以对异步action进行增强
  6）在redux中存在applyMiddleware方法，我们就可以将第三方中间件存放到applyMiddleware
    redux是对仓库的增强，所以将applyMiddleware代码写到创建store仓库的地方

7，中间件：
 1）真正改变状态本质上就是要通过dispatch来派发一个action；action可能是一个对象，也可通过actioncreator产生
 2）dispatch调用的话参数要么仅有一个action，要么就是放一个actioncreator（前提是这个actioncreator必须要产生一个action）
 3）actioncreator方法可能不产生一个action，此时dispatch就处理不了。
    也就是说，默认情况下，dispatch只能派发一个action。action必须是一个对象
 4）中间件使用方法：
   首先在redux中存在applyMiddleware方法，我们就可以将第三方中间件存放到applyMiddleware
   redux是对仓库的增强，所以将applyMiddleware代码写到创建store仓库的地方




























