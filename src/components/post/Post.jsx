import React, { useState } from 'react'
import { MdMoreVert } from 'react-icons/md'
import './post.css'
import {Users} from '../../Data'

const Post = ({post}) => {
    // console.log(post);
    // console.log(post.userId);
    // console.log(Users.filter((u)=>u.id===post.userId)[0].username)
//    console.log(Users.filter((u)=>u.id === post.UserId)[0])

    const[like,setLike] = useState(post.like);
    const[isLike,setIsLike]= useState(false);

    const likeHandler=()=>{
        setLike(isLike ? like-1 : like+1);
        setIsLike(!isLike);
    }

  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src={Users.filter((u)=>u.id === post.userId)[0].profilePicture} alt="" />
                    <span className="postUsername">{Users.filter((u)=>u.id === post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MdMoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className='postImg' src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="assets/like.png" alt="" onClick={likeHandler}/>
                    <img className='likeIcon' src="assets/heart.png" alt="" />
                    <span className="postLikeCounter">{like} people liked it.</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post