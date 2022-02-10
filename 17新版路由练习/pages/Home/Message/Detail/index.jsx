import React  from 'react'
import { useParams } from 'react-router-dom'

export default function Detail(){
    const data = [
        {id:'01',content:'你好 01'},
        {id:'02',content:'你好 02'},
        {id:'03',content:'你好 03'}
    ]

    const params = useParams()
    console.log(params) 

    return(
        <div>
            <h3>测试</h3>
            <ul>
                <li>ID:{params.id}</li>
                <li>title:{params.title}</li>
                <li>content:{data.find(ele=>{ return ele.id===params.id}).content}</li>
            </ul>

        </div>
    )
    
}
