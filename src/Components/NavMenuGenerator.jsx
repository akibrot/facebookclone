import React from 'react'
function NavMenuGenerator({data,selected,changeselected}) {
  
    return (
        <div className="box" title={data.title} style={data.id===selected?{borderBottom:"2px solid blue"}:{}} onClick={()=>changeselected(data.id)}>
        < data.Icon className="ic" />
      </div>
    )
}

export default NavMenuGenerator
