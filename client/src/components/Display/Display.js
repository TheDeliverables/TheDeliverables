import React from 'react'
import './Display.scss'


export default function Display(props) {
  console.log(props)
  let src;
  let title;
  if(props.type === "videos"){
    src = props.item.videoURL
    title = props.item.title

  }
  return (
    <section className='display'>
      <h1>{title}</h1>
      <img src={src}>
      </img>
    </section>
  );
}
