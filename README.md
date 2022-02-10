
二、github 搜索案例 知识点

    1.设计状态考虑 全面  网络请求要考虑失败
    2.es6
    let obj = {a:{b:1}}
    const {a} =obj //传统解构赋值
    const {a:{b}} = obj //连续解构赋值
    const {a:{b:value}} = obj //连续解构赋值+重命名
    3.消息订阅与发布
        1.先订阅 再发布
        2.适用任意组件通信
        3.要在componentWillUnmount中取消订阅
    4.fetch  关注分离设计思想
      try {
            const response =  await fetch(`/api1/search/users2?q=${keyword}`)
            const data = await response.json()
        } catch (error) {
            console.log('请求出错',error)
        }


