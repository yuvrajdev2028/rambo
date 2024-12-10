import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faHeart,faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular, faComment } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'

const PostCard = () => {
    const[likeSVG,setLikeSVG]=useState(faHeartRegular);
    function toggleLikes(){
        if(likeSVG===faHeartRegular)
        {
            setLikeSVG(faHeart);
        }
        else{
            setLikeSVG(faHeartRegular);
        }
    }
    console.log(likeSVG)
    return (
    <div className='w-[35%] drop-shadow-md bg-white my-4 mx-auto'>
        <div className='flex items-center gap-2 bg-green-700 px-3 py-2'>
            <div className='bg-green-400 h-[40px] w-[40px] flex justify-center items-center rounded-full'>
                <FontAwesomeIcon icon={faUser} />
            </div>
            <h4 className='text-white'>John Doe</h4>
        </div>
        <p className='text-left px-3 py-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis sagittis tempus. Quisque sed 
            tellus interdum nisi aliquet maximus eu ac lectus. Integer non ipsum in metus pellentesque vehicula posuere 
            sit amet sem. Nullam metus erat, finibus non enim vitae, tincidunt auctor purus. Mauris tincidunt leo et 
            laoreet efficitur.
        </p>
        <div className='font-thin text-xs text-[#838383] text-left px-3'>20 Nov 2024, 12:36 P.M.</div>
        <div className='h-[2px] bg-green-700 mt-2'></div>
        <div className='flex justify-around text-green-700 py-2'>
            <button onClick={toggleLikes}><FontAwesomeIcon icon={likeSVG} /></button>
            <button><FontAwesomeIcon icon={faComment} /></button>
            <button><FontAwesomeIcon icon={faShareNodes} /></button>
        </div>
    </div>
  )
}

export default PostCard