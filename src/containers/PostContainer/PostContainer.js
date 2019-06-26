import React, {Component} from 'react';
import { PostWrapper, Navigator, Post } from '../../components';
//import { PostWrapper } from 'components/'
import * as service from '../../services/post';

// 함수형 컴포넌트가 아닌 클래스 형식으로 컴포넌트를 선언했습니다. 그 이유는 나중에 여기에 state 를 추가할것이기 때문이죠!
class PostContainer extends Component {
    constructor(props) {
        super(props);
        // initializes component state
        this.state = {
            postId: 1,
            fetching: false, // tells whether the request is waiting for response or not
            post: {
                title: null,
                body: null
            },
            comments: []
        };
    }

    fetchPostInfo = async (postId) => {
        // 요청이 시작하기 전에 fetch 값을 true 로 설정합니다.
        // 요청이 끝난다음엔 false 로 설정하고, postId 값도 설정해줍니다.
        this.setState({
            fetching: true // requesting..
        });

        // wait for two promises
        const info = await Promise.all([
            service.getPost(postId),
            service.getComments(postId)
        ]);


        // const post = await service.getPost(postId);
        // console.log(post);
        // const comments = await service.getComments(postId);
        // console.log(comments);
        // Object destructuring Syntax,
        // takes out required values and create references to them

        // const { a, b } = c 의 형식의 코드는 ES6 의 Object Destructuring (객체 비구조화 할당)문법입니다.
        // 필요한 값을 객체에서 꺼내서, 그 값을 가지고 레퍼런스를 만들어주죠.
        const {title, body} = info[0].data;
        const comments = info[1].data;

        this.setState({
            postId,
            post: {
                title,
                body
            },
            comments,
            fetching: false // done!
        });

    }

    handleNavigateClick = (type) => {
        const postId = this.state.postId;

        if(type === 'NEXT') {
            this.fetchPostInfo(postId+1);
        } else {
            this.fetchPostInfo(postId-1);
        }
    }

    componentDidMount() {
        this.fetchPostInfo(1)
    }

    render() {
        // 이 코드에서도, state 부분에 비구조화 할당 문법을 사용했습니다. 이렇게 함으로 서,
        // this.state.post.title 이렇게 해야되는거를 바로 post.title 로 할 수 있으니까 훨씬 보기 편하지 않나요?
        const {postId, fetching, post, comments} = this.state;
        return (
            <PostWrapper>
                <Navigator
                    postId={postId}
                    disabled={fetching}
                    onClick={this.handleNavigateClick}
                />
                <Post
                    title={post.title}
                    body={post.body}
                    comments={comments}
                />
            </PostWrapper>
        );
    }
}

export default PostContainer;