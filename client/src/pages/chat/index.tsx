import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Chat = () => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const data = await axios.get("http://localhost:5000/api/chat");
    setData(data.data);
    console.log(data.data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className='bg-red-500 flex-col h-screen w-full flex justify-center items-center'>
      {data.map((chat:any) => (
        <div key={chat._id} className=''>
          <h2 className='text-2xl font-bold mb-2'>{chat.chatName}</h2>
          <p className='text-gray-600'>ID: {chat._id}</p>
        </div>
      ))}
    </div>
  )
}

export default Chat