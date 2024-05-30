import {Emoji} from 'emoji-picker-react'

function MainPostCard({emoji, color, username, description}) {
  
  return (
    <div stye={{backgroundColor: {color}, width: '200px'}}>
    <div>{username}</div>
   {emoji.includes('&#') ? <p>{emoji + ';'}</p> : <Emoji unified={emoji} />}
    <div>{description}</div>
    </div>
  )
}

export default MainPostCard