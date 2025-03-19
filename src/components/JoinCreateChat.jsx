import React, { useEffect, useState } from 'react'
import chatIcon from "../assets/icon.png";
import toast from 'react-hot-toast';
import { createRoomApi, joinChatApi } from "../services/RoomService"
import useChatContext from '../context/ChatContext';
import { useNavigate } from 'react-router';

const JoinCreateChat = () => {
const [detail, setDetail] = useState({
  roomId: "",
  userName: "",
});

const { roomId, userName, connected, setRoomId, setCurrentUser, setConnected } = useChatContext();
const navigate = useNavigate()

function handleFormInputChange(event){
  setDetail({
    ...detail,
  [event.target.name]:event.target.value
  })
}

function validateForm(){
  if(detail.roomId ==="" || detail.userName ===""){
    toast.error("Invalid Input")
    return false;
}
  return true;
}

async function joinChat() {
  if (validateForm()) {
      // Join Chat Logic Here
      try {
          const room = await joinChatApi(detail.roomId)
          toast.success("Joined!")
          setRoomId(room.roomId);
          setCurrentUser(detail.userName);
          setConnected(true);
          navigate("/chat");
      } catch (error) {
        if(error.status === 404){
          toast.error(error.response.data);
        }
        else{
          toast.error("Error in joining room");}
      }
  }
}


async function createRoom(){

  if(validateForm()){
    //create room
    // console.log(detail);
    //call API to create room on backend
    try{
      const response = await createRoomApi(detail.roomId);
      // console.log(response);
      toast.success("Room Created Successfully!");
      //join room
      setCurrentUser(detail.userName);
      setRoomId(response.roomId);
      setConnected(true)

      navigate('/chat')
      // forward to chat page
    }catch(error){
      // console.log(error)
      // console.log("Error in creating room")
      if(error.status == 400){
        toast.error("Room Id already exists");
      }else{
        toast("Error in creating room");
      }
    }
  }
}

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='p-10 dark:border-gray-700 border w-full flex flex-col gap-5 max-w-md rounded dark:bg-gray-900 shadow'>
      <div> <img src={chatIcon} className='w-20 mx-auto'></img> </div>
      
      <div>
        <h1 className='text-2xl font-semibold text-center mb-4'>Join Room / Create Room</h1>

        {/* Name div */}
        <div className=''>
          <label htmlFor='name' className="block font-medium mb-4">Your Name</label>
          <input 
                 name = "userName"
                 onChange={handleFormInputChange}
                 value={detail.userName}
                 type='text' 
                 id='name' 
                 placeholder='Enter the name'
                 className='w-full dark:bg-gray-600 px-4 py-2 mb-4 border dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
        </div>

        {/* Room Id div */}
        <div className=''>
          <label htmlFor='name' className="block font-medium mb-4">Room ID/ New Room ID</label>
          <input 
                name = "roomId"
                onChange={handleFormInputChange}
                value={detail.roomId}
                type='text' 
                id='name'
                placeholder='Enter the Room ID' 
                className='w-full dark:bg-gray-600 px-4 py-2 border dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
        </div>

      
      {/* Buttons */}
      <div className='py-5 flex justify-center gap-2 mt-2'>
      {/* Button to join room */}
      <button 
              onClick={joinChat}
              className='px-3 py-2 dark:bg-blue-500 hover:dark:bg-blue-800 rounded-full'>Join Room</button>
      
      {/* Button to create room */}
      <button 
              onClick={createRoom}
              className='px-3 py-2 dark:bg-orange-500 hover:dark:bg-orange-800 rounded-full'>Create Room</button>      
      </div>

      </div>
      </div>
    </div>
  )
}

export default JoinCreateChat
