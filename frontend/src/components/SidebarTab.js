import React from 'react'

const SidebarTab = ({label}) => {
  return (
    // <div>
    //     {isActive?(<div className='p-2 bg-green-600'>
    //     {label}
    // </div>):(<div className='p-2 border-2 border-green-600'>
    //     {label}
    // </div>)}
    // </div>
    <div className='p-2 border-2 border-green-600'>
        {label}
    </div>
  )
}

export default SidebarTab