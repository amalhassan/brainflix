import React from 'react'
import './CommentCard.scss'
import { dateFormatter } from '../../utils';
const CommentCard = (props) => {
    const {id, name, timestamp, comment} = props;
  return (
    <div className="comment-card" id={id}>
        <div className="comment-card__avatar">
            <div className="avatar"></div>
        </div>
        <section className="comment-card__wrapper">
            <div className="comment-card__title-section">
                <p className="comment-card__name">{name}</p>
                <p className="comment-card__date">{dateFormatter(timestamp)}</p>
            </div>
            <div className="comment-card__text-container">
                <p className="comment-card__text">{comment}</p>
            </div>
        </section>
    </div>
  )
}
export default CommentCard