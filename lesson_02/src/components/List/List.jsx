import React from 'react'
import './style.sass'

export default function List({list=[]}) {

  // setTimeout(() => {
  //   list.pop();
  //   console.log(list);
  // }, 1000)

  return list.length ? <ul>
    {list.map((item, index) => <li key={index}>{item}</li>)}
  </ul> : null;
}