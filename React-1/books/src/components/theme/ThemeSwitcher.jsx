import React from 'react'

function ThemeSwitcher(props) {
  return (
    <div >
        <button style={{'margin':'2%'}} onClick={() => {props.toggleTheme()}}>Switch Theme</button>
    </div>
  )
}

export default ThemeSwitcher