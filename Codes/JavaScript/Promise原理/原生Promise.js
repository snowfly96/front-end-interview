console.log("第一步");
let p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("第三步");
        resolve("第五步") // resolve和reject是在事件结尾才执行的
        console.log("第四步");
    })
})
p.then(
    result=>{console.log(result);},
    result=>{console.log(result);
})
console.log("第二步");
