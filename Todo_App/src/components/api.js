import React, { useState } from 'react'

export default function Apii() {
    const [data,setData] = React.useState([]);
    React.useEffect(()=>{
        const fetch = async () =>{
            await fetch('https://jsonplaceholder.typicode.com/users')
            .then((res)=> res.json())
            .then((data)=>{
            setData(data);
            console.log(data)
            })
        };
    },[]);
  return (
    <div>Apii</div>
  )
}
