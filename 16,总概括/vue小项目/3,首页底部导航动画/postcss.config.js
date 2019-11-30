module.exports = {
    plugins: [
        // remUnit一般都是设计稿宽度/10
        require('postcss-px2rem')({ remUnit: 75 })
    ]
}