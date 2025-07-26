import React from 'react'
import "./connect.css"
import InfiniteMenu from './Animations/infinitemenu'
const Connect = () => {
const items = [
  {
    image: 'https://imgs.search.brave.com/dEIY-n2OjO_YMEq2aS2iRj3L3STJUGCHkOT1C3g4BY4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8w/OC8yNi8wMi8wMS9p/bnN0YWdyYW0tNzQx/MTU1N18xMjgwLnBu/Zw',
    link: 'https://www.instagram.com/_manvith_21/',
    title: 'Item 2',
    description: 'This is pretty cool, right?'
  },
  {
    image:"https://imgs.search.brave.com/d0C-uJXWsOnUymmZDHByjMFJE_VB32qGpWSVmCtl-gE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzUwLzMwLzU5/LzM2MF9GXzI1MDMw/NTk0M19zREM2bGEx/TjFmRGwzYkxnZkx4/T2tRd0l0SW9kc2RN/Yi5qcGc",
    link: 'https://github.com/manvithkumar123',
    title: 'Item 3',
    description: 'This is pretty cool, right?'
  },
  {
    image:"https://imgs.search.brave.com/Ms1Vf0Pt5kfne4i-cpLUh8--49jcDTWX7JucA8ddqIo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8x/MC8wOS8xNy8zMi9s/aW5rZWRpbi03NTA5/NzA4XzEyODAucG5n",
    link: 'https://www.linkedin.com/in/medipally-manvith-kumar-b38604358//',
    title: 'Item 3',
    description: 'This is pretty cool, right?'
  },  
  {
    image:"https://imgs.search.brave.com/8xxcrowuQcxsvQi2HrzMdQPfWcjtvAjCeVe9hhGPxIU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8w/OS8xOS8xOC8zMS93/aGF0c2FwcC03NDY2/MjM1XzEyODAucG5n",
    link: 'https://wa.me/7993625522',
    title: 'Item 3',
    description: 'This is pretty cool, right?'
  }
];
return (
<div style={{backgroundColor:"black",height:"100vh",width:"100vw"}}>

<div id='scroll' style={{ height: '70vh', position: 'relative' }}>
  <InfiniteMenu items={items}/>
</div>
    </div>
  )
}

export default Connect
