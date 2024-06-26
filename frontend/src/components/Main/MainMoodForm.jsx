import { useEffect, useState } from 'react'
import EmojiPicker, {Emoji} from 'emoji-picker-react';
import axios from 'axios'

const endpoint = "https://moodify-server-si3i.onrender.com/api/post"
function MainMoodForm() {
  const [openEmojiPicker, setOpenEmojiPicker] =useState(false)
  const [emoji, setEmoji] = useState('')
  const [mood, setMood] = useState("")
  const [color, setColor] = useState("")
  let body = {
    // user: user,
    mood: mood,
    color: color,
    emoji: emoji
  }
//I need user to push post
function handleSubmit(e){
  e.preventDefault()
 try {
      async function sendPost(){
        let data = await axios.post(endpoint, body)
      }
      sendPost()
    } catch (error) {
      
    }

    console.log("POST SUBMITTED")
}
  // useEffect(()=>{
   
  // }, [])
  let handleEmojiPick = (emoji)=>{
    console.log("EMOJI", emoji)
    setEmoji(emoji.unified)
  }
  return (
    <div>
      <form onSubmit={()=>handleSubmit}>
      <input type="text" name="mood" value={mood}
          onChange={(e) => setMood(e.target.value)} placeholder="What's your mood today?" />
      <input type="color" name="color" value={color} onChange={(e) => setColor(e.target.value)}/> <label htmlFor="color">Pick your color</label>
      <div onClick={()=>setOpenEmojiPicker(!openEmojiPicker)}>
        Choose an emoji
      <EmojiPicker  defaultCaption={'Choose your emoji'} onEmojiClick={(emoji)=>handleEmojiPick(emoji)} open={openEmojiPicker}/>
      {emoji && <Emoji unified={emoji} size='25'/>}
      </div>
      <button type="submit">Submit your mood</button>
      </form>
     </div>
  )
}

export default MainMoodForm