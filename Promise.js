function Testing() {
    return new Promise(Success => {
        setTimeout(() => {
            Success('done!')
        }, 2000)
    })
}
function date() {
    var ate = new Date()
    var d = ate.getDate();
    var m = ate.getMonth() + 1
    var y = ate.getFullYear()
    var h = ate.getHours()
    var mi = ate.getMinutes()
    var s = ate.getSeconds()
    console.log(d + '/' + m + '/' + y)
    console.log(h + '/' + mi + '/' + s)
}

async function call() {
    console.log('calling')
    let res = await Testing()
    console.log(res)
    date();
}

call();