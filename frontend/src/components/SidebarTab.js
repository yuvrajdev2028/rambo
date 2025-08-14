import React from 'react'

const SidebarTab = ({label,tab,setTab,icon}) => {
  return (
    <div>
      {(label===tab) ? <div className='p-2 text-white mx-2 my-1 rounded-md bg-green-600 cursor-pointer flex gap-2 items-center'>
        <span>{icon}</span><span>{label}</span>
    </div> : <div className='p-2 text-green-600 hover:bg-green-600 hover:text-white mx-2 my-1 rounded-md cursor-pointer flex gap-2 items-center' onClick={()=>{setTab(label)}}>
        <span>{icon}</span><span>{label}</span>
    </div>}
    </div>
  )
}

export default SidebarTab