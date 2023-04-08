import "./JobFrame.scss";

import React from 'react'

import {TfiLocationPin} from "react-icons/tfi";
import {TbCoins} from "react-icons/tb";

function JobFrame({datas}) {
  return (
    <div className={`explored-job-frame`}>
        <div className={`frame1`}>
            <img src={datas.userImg} className={`img-frame`} />
            <div className={`explore-job-text`}>
                <div className={`explore-title`}>{datas.title}</div>
                <div className={`explore-subtitle`}>{datas.subtitle}</div>
                {
                    datas.subscription?
                    <div className={`explore-subscription`}>{datas.subscription}</div>:
                    datas.tags?<div className={`explore-job-tags`}>
                        {
                            datas.tags.map((items,index)=>{
                                return(
                                    <div className={`tags`} key={items+"_"+index}>{items}</div>
                                )
                            })
                        }
                    </div>:""
                }
            </div>
        </div>
        <div className={`explore-ctc-div`}>
            <div className={`work-type`}>
                <TfiLocationPin className={`work-type-icon`} />
                <span>{datas.workType}</span>
            </div>
            <div className={`ctc-div`}>
                <TbCoins className={`ctc-icon`} />
                <span>{datas.ctc}</span>
            </div>
        </div>
        <div className={`view-detail`}>
            View Job Details
        </div>
    </div>
  )
}

export default JobFrame