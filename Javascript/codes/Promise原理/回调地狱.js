const fs=require("fs");
const { type } = require("os");

/**
 * 在不使用Promise的情况下进行文件读取任务
 */
fs.readFile("hello.txt",(err,data)=>{
    if(!err){
        console.log(data.toString());
    }
});
/**
 * 在使用Promise的情况下进行文件读取
 */
new Promise((resolve, reject)=>{
    fs.readFile("hello.txt",(err,data)=>{
        if(!err){
            resolve(data.toString());
        }else{
            reject(data.toString())
        }
    });
}).then((value)=>{
    console.log(value);
})

/**
 * 如果只是简单的一层异步操作可能看不到Promise的好处
 * 加入我们要读取多个文件，读完一个又读下一个，Promise好处就体现出来了
 */
fs.readFile("hello.txt",(err,data)=>{
    if(!err){
        console.log("1-"+data.toString());
        fs.readFile("hello.txt",(err,data)=>{
            if(!err){
                console.log("2-"+data.toString());
            }
        })
    }
});

/**
 * 每个Promise实例都有一个then方法，对异步任务的结果进行处理
 * 每个then可以制定一个新的Promise对象作为返回值
 */
new Promise((resolve,reject)=>{
    fs.readFile("hello.txt",(err,data)=>{
        if(!err){
            resolve("1-"+data.toString());
        }
    });
}).then(value=>{
    console.log(value);
    return new Promise((resolve,reject)=>{
        fs.readFile("hello.txt",(err,data)=>{
            if(!err){
                resolve("2-"+data.toString());
            }
        });
    })
}).then(value=>{
    console.log(value);
})