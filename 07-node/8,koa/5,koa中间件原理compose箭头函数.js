let app = {
    middlewares:[],
    use(fn){
     this.middlewares.push(fn)
    }
}
app.use((next)=>{
    console.log(1)
    console.log(2)
    next()
})
app.use((next)=>{
    console.log(3)
    console.log(4)
    next()
})
app.use((next)=>{
    console.log(5)
    console.log(6)
})

function compose(middlewares){
    return middlewares.reduceRight((a,b)=>()=>b(a))
}
let fn =  compose(app.middlewares)
fn()