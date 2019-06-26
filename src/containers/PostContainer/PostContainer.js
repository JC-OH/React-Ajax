import React, {Component} from 'react';
import { PostWrapper, Navigator, Post } from '../../components';
//import { PostWrapper } from 'components/'

// 함수형 컴포넌트가 아닌 클래스 형식으로 컴포넌트를 선언했습니다. 그 이유는 나중에 여기에 state 를 추가할것이기 때문이죠!
class PostContainer extends Component {
    render() {
        return (
            <PostWrapper>
                <Navigator/>
                <Post/>
            </PostWrapper>
        );
    }
}

export default PostContainer;