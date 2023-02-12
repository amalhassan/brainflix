import React from 'react'
import './CommentForm.scss'
import ProfileImage from '../../assets/images/Mohan-muruge.jpg'
import CommentIcon from '../../assets/icons/add_comment.svg' 
function CommentForm() {
  return (
    <section class="comment-form">
            <div class="comment-form__container">
                <img class="comment-form__avatar" src={ProfileImage} alt="avatar photo" />
                <form class="comment-form__section" id="form">
                    <div class="comment-form__field">
                        <label class="comment-form__label" for="comment">Join the Conversation</label>
                        <textarea id="comment" class="comment-form__textbox comment-form__textbox--comment field" placeholder="Add a new comment" cols="20" rows="10" wrap="hard" required></textarea>
                    </div>
                    <button class="comment-form__button" type="submit"><img className="btn-icon" src={CommentIcon}></img>Comment</button>
                </form>
            </div>
    </section>
  )
}

export default CommentForm