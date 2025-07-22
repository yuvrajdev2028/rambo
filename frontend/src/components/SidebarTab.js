import React from 'react'

const SidebarTab = ({label,tab,setTab}) => {
  return (
    <div>
      {(label===tab) ? <div className='p-2 text-white mx-2 my-1 rounded-md bg-green-600 cursor-pointer'>
        {label}
    </div> : <div className='p-2 text-green-600 hover:bg-green-600 hover:text-white mx-2 my-1 rounded-md cursor-pointer' onClick={()=>{setTab(label)}}>
        {label}
    </div>}
    </div>
  )
}

export default SidebarTab