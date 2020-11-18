import React from 'react';


const CommentDetail = props => { // var in ingresso PROPS
    return (
        <div className="comment">
            <a className="avatar" href="/">
                <img src={props.photo} alt="avatar"/>
            </a>
            <div className="content">
                <a className="author" href="/">
                    {props.author} 
                </a>
                <div className="metadata">
                    <span className='date'>{props.timeAgo}</span>
                </div>
               <div className='text'>
                    {props.content}
                </div>
            </div>
        </div>
    );
};

export default CommentDetail; // disponibile a resto del progetto