import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import VideoImage from '../../assets/images/Upload-video-preview.jpg'
import PublishIcon from '../../assets/icons/publish.svg'
import './UploadForm.scss'
const UploadForm = () => {
    let cancelled = false;
    const navigate = useNavigate();
    const [notifymsg, setNotifyMsg] = useState('');
    let msgStyling = false;
    const cancelledUpload = (e) => {
        console.log(e.target.id);
        if (e.target.id === 'cancel') {
            console.log("data cancelled");
            document.getElementById('form').reset();
            cancelled = true;
        } 
    }
    const videoUploaded = (e) => {
         e.preventDefault();
         if (cancelled === false) {
            const title = e.target.title.value;
            const description = e.target.description.value;
            console.log(title, description);
            document.getElementById('form').reset();
            setNotifyMsg('You have uploaded your video!');
            setTimeout(() => {
                navigate("/");
            }, "3000")
         }      
    }
  return (
    <section className="upload-form">
        <h2 className='upload-form__title'>Upload Video</h2>
        <form className="upload-form__section" id="form" onSubmit={videoUploaded}>
            <div className="upload-form__image-section">
                <section className="upload-form__field">
                    <label className="upload-form__label" htmlFor="image">Video Thumbnail</label>
                    <img className="upload-form__image" src={VideoImage}/>
                </section>
            </div>
            <div className="upload-form__text-section">
                <section className="upload-form__field">
                    <label className="upload-form__label" htmlFor="title">Title your video</label>
                    <input id="title" className="upload-form__textbox" placeholder='Add a title to your video'></input>
                </section>
                <section className="upload-form__field">
                    <label className="upload-form__label" htmlFor="description">Add a video description</label>
                    <textarea id="description" className="upload-form__textbox upload-form__textbox--description" placeholder="Add a description to your video" cols="20" rows="10" wrap="hard" required></textarea>
                </section>
            </div>
            <div className="upload-form__button-section">
                <button className="upload-form__button" type="submit"><img className="icon upload-form__icon" src={PublishIcon} alt="upload icon"/>Publish</button>
                <button onClick={cancelledUpload} id="cancel" className="upload-form__cancel" type="submit">Cancel</button>
            </div>
            {msgStyling ? "" : <p className="upload-form__msg">{notifymsg}</p>}
        </form>
    </section>
  )
}

export default UploadForm