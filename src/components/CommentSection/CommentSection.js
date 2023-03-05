import React from 'react'
import './CommentSection.scss'
import CommentForm from '../CommentForm/CommentForm'
import CommentCard from '../CommentCard/CommentCard'
function CommentSection({comments}) {
  console.log(comments)
  return (
    <div className="comment-section">
        {/* <p className="comment-section__count">{comments.length} Comments</p> */}
        <CommentForm />
        {comments.map((comment) => 
        (<CommentCard
          key={comment.id}
          name={comment.name}
          timestamp={comment.timestamp}
          comment={comment.comment}
        />))}
    </div>
  )
}
export default CommentSection