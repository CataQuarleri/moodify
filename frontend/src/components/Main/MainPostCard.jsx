import {Emoji} from 'emoji-picker-react'

function MainPostCard({emoji, color, username, description}) {
  return (
    <div stye={{backgroundColor: {color}}}>
    <div>{username}</div>
    <Emoji unified={emoji} />
    <div>{description}</div>
    </div>
  )
}

export default MainPostCard