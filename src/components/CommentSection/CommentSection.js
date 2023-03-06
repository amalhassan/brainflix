import React from 'react'
import './CommentSection.scss'
import CommentForm from '../CommentForm/CommentForm'
import CommentCard from '../CommentCard/CommentCard'
const CommentSection = ({commentArray, id, setCurrentVideoInfo}) => {
  return (
      <div className="comment-section">
        { commentArray !== undefined ?
        <>
        {<p className="comment-section__count">{commentArray.length} Comments</p>}
        <CommentForm id={id} setCurrentVideoInfo={setCurrentVideoInfo}/>
        {commentArray.sort(
                (a, b) => b.timestamp - a.timestamp,
            ).map((comment) => 
        (<CommentCard
          key={comment.id}
          name={comment.name}
          timestamp={comment.timestamp}
          comment={comment.comment}
        />))}
        </> : null
        }
      </div>
  )
}
export default CommentSection