import { useEffect, useState } from 'react'
import axios from 'axios'
import MainPostCard from './MainPostCard'
const POSTS = 'https://moodify-server-si3i.onrender.com/api/posts'
function MainListPost() {
    let [posts, setPosts] = useState([])
 useEffect(()=>{
    async function getAllPost(){
        try {
            let response = await axios.get(POSTS)
        let allPosts = response.data 
        if(allPosts){
            setPosts(allPosts)
        }
        } catch (error) {
            console.log("ERROR", error)
        }
    }
    getAllPost()
 }, [])
  return (
    <>
    {posts.map((onePost, i) => {
        <MainPostCard key={i} username={onePost.username} emoji={onePost.emoji} color={onePost.color} description={onePost.description}/>
    })}
    </>
  )
}

export default MainListPost