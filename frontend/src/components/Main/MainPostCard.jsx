import React from 'react'

function MainPostCard({emoji, color, username, description}) {
  return (
    <div stye={{backgroundColor: {color}}}>
    <div>{username}</div>
    <div>{emoji}</div>
    <div>{description}</div>
    </div>
  )
}

export default MainPostCard