import React, {useState,useEffect} from 'react'

export default function FriendStatus(props) {
    const [isOnline,setIsOnline] = useState(null)

    useEffect(()=>{
        function handleStatusChange(status){
            setIsOnline(status.isOnline)
        }
        ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
        //指定如何在此效果之后进行清理 每个 effect 都可以返回一个清除函数
        return function cleanup() {
        ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
        }
    })
    if (isOnline === null) {
        return 'Loading...';
      }
      return isOnline ? 'Online' : 'Offline';
}
