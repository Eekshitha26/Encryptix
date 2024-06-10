import React from 'react'

const Header = () => {
  return (
    <div className='Heaader_section'>
       <div className='Left'>
          <div className='title'>
            <h2>shopping Mall</h2>
          </div>
       </div>
       <div className='center'>
         <ul>
           <a href="#Women"><li>Women</li></a>
           <a href="#men"><li>Men</li></a>
           <a href="#children"><li>Children</li></a>
           <a href="#beauty"><li>Beauty</li></a>
         </ul>
        </div>
        <div className="search">
          <input type="text" placeholder='Search....'/>
        </div>
       
       <div className='right'>
          <div className="signin">signIN / singUP</div>
          <div className="card">Card</div>
        </div> 
    </div>
  )
}

export default Header