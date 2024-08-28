import React from 'react'

export default function userMsg(props) {
  let arr=[];
  
  props.messages.forEach((element, i) => {
    
    arr.push(
    <div className={element.sender} key={i}>
        <p style={{minWidth: '55px', minHeight: '25px'}} dangerouslySetInnerHTML={{__html: element.text}}>
        </p>
        <span className="timestamp" style={{position: 'absolute', bottom: '0', right: '0', margin: ' 20px 10px 0'}}>{element.currentTime}</span>
      </div>
    )

  });
  
  return (
    <>
    {arr}
    </>
  )
}
