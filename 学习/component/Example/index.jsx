import React, { useState,useEffect } from 'react';

export default function Example() {
  // 声明一个叫 “count” 的 state 变量
  const [count, setCount] = useState(1);

  useEffect(()=>{
      console.log('1')
  }) 
  useEffect(()=>{
    //有依赖项count 组件初始化 和更新会执行
    console.log('改变之后运行')

},[count]) 

  //// 相当于 componentDidMount 和 componentDidUpdate:
useEffect(()=>{
    //// 使用浏览器的 API 更新页面标题

      document.title =`You clicked ${count} times`
      console.log('3')
      return ()=>{
        console.log('3  组件卸载了')
      }
      //依赖项为空 初始化才执行
  },[]) 


  return (
      <div>
         <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
      </div>
  )
  
}

