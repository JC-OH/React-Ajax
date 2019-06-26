import React from 'react';
import './Post.css';
import { CommentList } from '../';

// 포스트의 내용과, 덧글들을 담을 Post 컴포넌트를 만들어봅시다.
const Post = () => (
    <div className="Post">
        <h1>Title</h1>
        <p>
        Body
        </p>
        <CommentList/>
    </div>

);

export default Post;