export default {
    fetchPage:(pageIndex,pageSize)=>new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve([1,1,1])

        },1000)
    })
}