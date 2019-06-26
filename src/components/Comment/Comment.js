import React from 'react';
import './Comment.css';

//  CommentList 내부에 들어가는 컴포넌트이며, li 태그로 이뤄져있습니다.
const Comment = ({name, body}) => {
    return (
        <li className="Comment">
        <p>
        <b>{name}</b> {body}
        </p>
        </li>
    );
};
export default Comment;
