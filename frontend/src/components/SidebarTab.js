import React from 'react'

const SidebarTab = ({label,tab,setTab}) => {
  return (
    <div>
      {(label===tab) ? <div className='p-2 text-white mx-2 my-1 rounded-md bg-green-600'>
        {label}
    </div> : <div className='p-2 text-green-600 hover:bg-green-100 mx-2 my-1 rounded-md' onClick={()=>{setTab(label)}}>
        {label}
    </div>}
    </div>
  )
}

export default SidebarTab