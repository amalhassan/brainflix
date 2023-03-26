import React from 'react'
import './CommentForm.scss'
import ProfileImage from '../../assets/images/Mohan-muruge.jpg'
import CommentIcon from '../../assets/icons/add_comment.svg' 
import { baseURL} from '../../constant'
import axios from 'axios'
const CommentForm = ({id, setCurrentVideoInfo}) => {
  const submitComment = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    axios.post(`${baseURL}/${id}/comments`, {
      name: "Mohan Muruge",
      comment: comment
    }).then(res => {
      axios.get(`${baseURL}/${id}`
      ).then(res => {
        setCurrentVideoInfo(res.data);
        document.getElementById('form').reset();
      })
      .catch(error => {
        console.log(error);
      })
    })
 }
  return (
    <section className="comment-form">
            <div className="comment-form__container">
                <img className="comment-form__avatar avatar" src={ProfileImage} alt="avatar" />
                <form className="comment-form__section" id="form" onSubmit={submitComment}>
                    <div className="comment-form__field">
                        <label className="comment-form__label" htmlFor="comment">Join the Conversation</label>
                        <textarea id="comment" className="comment-form__textbox comment-form__textbox--comment field" placeholder="Add a new comment" cols="20" rows="10" wrap="hard" required></textarea>
                    </div>
                    <button className="comment-form__button" type="submit"><img className="icon" src={CommentIcon} alt="comment icon"></img>Comment</button>
                </form>
            </div>
    </section>
  )
}
export default CommentForm