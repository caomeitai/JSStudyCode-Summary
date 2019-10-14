// 在package.json中配置  会将env传递到该配置文件中
// "build":"webpack --env.production",
// "dev":"webpack --env.delelopment",
module.exports = (env)=>{
  console.log(env)
}