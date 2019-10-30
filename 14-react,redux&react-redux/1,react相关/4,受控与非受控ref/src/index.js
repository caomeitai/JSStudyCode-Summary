import React from "react" 
import ReactDOM from "react-dom"
import App from "./App"

ReactDOM.render(<App />,document.getElementById("app"));

// 表单的受控性（框中的内容）与非受控性（框中的内容）
// 在一个页面上写一个input框，这个框是非受控

// 默认情况下，input,textarea,select都是非受控

// v-model可以给框进行双向数据绑定，但是react中没有v-model

// 在react中如何让框中的内容受控，也就是把一个非受控的表单变成受控的表单

// 在react中可能给标签起一个名字ref   