/** Promise实现
 * ES6 中的一个更加优雅书写异步任务的库/对象
 * 参考：https://www.bilibili.com/video/BV1RR4y1p7my/?spm_id_from=333.788.recommend_more_video.0&vd_source=084728306193898208d80f40ece2975b
 */
class mPromise{
    static PENDING='pending'
    static FULFILLED='fulfilled'
    static REJECTED='rejected'
    constructor(func){
        this.result=null
        this.status=mPromise.PENDING
        this.resolveCallbacks=[]
        this.rejectCallbacks=[]
        try {
            func(this.resolve.bind(this),this.reject.bind(this))
        } catch (error) {
            this.reject(error)
        }    
    }

    resolve(result){
        setTimeout(()=>{
            if(this.status==mPromise.PENDING){
                this.status=mPromise.FULFILLED
                this.result=result
                this.resolveCallbacks.forEach(callback=>{
                    callback(this.result)
                })
            }
        })
    }

    reject(result){
        setTimeout(()=>{
            if(this.status==mPromise.PENDING){
                this.status=mPromise.RESOLVED
                this.result=result
                this.rejectCallbacks.forEach(callback=>{
                    callback(this.result)
                })
            }
        })
    }

    then(onFillled,onRejected){
        return new mPromise((resolve,reject)=>{
            // 需要在成功或者失败之后对resolve/reject进行处理
            onFillled=typeof onFillled=="function" ? onFillled:()=>{}
            onRejected=typeof onRejected=="function" ? onRejected:()=>{}
            if(this.status==mPromise.PENDING){
                this.resolveCallbacks.push(onFillled)
                this.rejectCallbacks.push(onRejected)
            }else if(this.status==mPromise.FULFILLED){
                setTimeout(()=>{
                    onFillled(this.result)
                })
            }else if(this.status==mPromise.REJECTED){
                setTimeout(()=>{
                    onRejected(this.result)
                })
            }
        })
    }
}

// console.log("第一步");
// let p=new mPromise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("第三步");
//         resolve("第五步") // resolve和reject是在事件结尾才执行的
//         console.log("第四步");
//     })
// })
// p.then(
//     result=>{console.log(result);},
//     result=>{console.log(result);
// })
// console.log("第二步");

const test1=()=>{
    const p=new mPromise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("success")
        })
    });
    console.log(p);
    const newp=p.then((val)=>{
        console.log(val);
        // return "hello"
    })
    // console.log(newp);
    const otherp=newp.then((val)=>{
        console.log(newp);
    })
}

const test2=()=>{
    const p=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("success")
        })
    });
    console.log(p);
    const newp=p.then(()=>{
        // console.log(p);
        // return "hello"
    })
    // console.log(newp);
    
    const otherp=newp.then(()=>{
        console.log(newp);
    })
}

// test1()
// test2()

