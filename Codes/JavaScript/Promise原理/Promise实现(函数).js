function _Promise (callback) {
    this.status = 'pending'
    this.data = null
    this.callbackQueue = []

    const resolve = result => {
        if (this.status === 'pending') {
            this.status = 'fulfilled'
            this.data = result
            // 执行then中的回调函数是异步的
            setTimeout(() => {
                this.callbackQueue.forEach(item => {
                    item.onResolved(this.data)
                })
            })
        }
    }

    const reject = result => {
        if (this.status === 'pending') {
            this.status = 'rejected'
            this.data = result
            // 执行then中的回调函数是异步的
            setTimeout(() => {
                this.callbackQueue.forEach(item => {
                    item.onRejected(this.data)
                })
            })
        }
    }

    try {
        callback(resolve, reject)
    } catch (error) {
        reject(error)
    }
}

_Promise.prototype.then = function (onResolved, onRejected) {
    if (typeof onResolved !== 'function') {
        onResolved = val => val
    }
    if (typeof onRejected !== 'function') {
        onRejected = err => {
            throw err
        }
    }
    return new Promise((resolve, reject) => {
        if (this.status === 'fulfilled') {
            // 执行then中的回调函数是异步的
            setTimeout(() => {
                try {
                    const result = onResolved(this.data)
                    // if(result instanceof Promise){...}
                    resolve(result)
                } catch (error) {
                    reject(error)
                }
            })
        }
        if (this.status === 'rejected') {
            // 执行then中的回调函数是异步的
            setTimeout(() => {
                try {
                    const result = onRejected(this.data)
                    reject(result)
                } catch (error) {
                    reject(result)
                }
            })
        }
        if (this.status === 'pending') {
            this.callbackQueue.push({
                onResolved: () => {
                    try {
                        const result = onResolved(this.data)
                        resolve(result)
                    } catch (error) {
                        reject(error)
                    }
                },
                onRejected: () => {
                    try {
                        const result = onRejected(this.data)
                        reject(result)
                    } catch (error) {
                        reject(error)
                    }
                }
            })
        }
    })
}


_Promise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected)
}

_Promise.resolve = function (val) {
    // 考虑传入值为Promise对象的非Promise对象的情况
}
_Promise.reject = function (val) {
    // 考虑传入值为Promise对象的非Promise对象的情况
}