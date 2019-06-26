import React from 'react';
import './CommentList.css';
import {Comment} from '../';

const CommentList = ({comments}) => {
    // 전달받은 comments 배열을 컴포넌트 배열로 map 해줍니다. (이 개념을 모른다면 여기를 참조하세요)
    // map data to components
    const commentList = comments.map(
        (comment, index)=>(
            <Comment
                name={comment.name}
                body={comment.body}
                key={index}
            />
        )
);

    return (
        <ul className="CommentList">
         {commentList}
        </ul>
);
};


export default CommentList;