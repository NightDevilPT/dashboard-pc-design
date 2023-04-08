import "./DashBoardIndicator.scss";

import React from 'react'

function DashBoardIndicator({datas}) {
    
  return (
    <div className={`dashboard-indicator-div`}>
        {
            datas?.map((items,index)=>{
                return (
                    <>
                        <span key={items+"_"+index}>{items}</span> {datas.length-1===index?"":">"}
                    </>
                )
            })
        }
    </div>
  )
}

export default DashBoardIndicator