import React from 'react'
import './CommentSection.scss'
import CommentForm from '../CommentForm/CommentForm'
function CommentSection({comments}) {
    console.log(comments)
  return (
    <div className="comment-section">
        <p className="comment-section__count">{comments.length} Comments</p>
        <CommentForm />
    </div>
  )
}

export default CommentSection