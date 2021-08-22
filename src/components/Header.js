import React from 'react'
import '../App.css'
function Header(props) {
    return (
        <div className='money'>
            <h1>Balans: { props.money}AZN</h1>
        </div>
    )
}

export default Header
