import React from 'react'

function WithLogging(props) {
    const getData = () => {
        console.log("BookList rendered");
        return props.children;
    }
  return (
    <>{getData()}</>
  )
}

export default WithLogging