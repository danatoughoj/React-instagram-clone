import React from "react";
import "./css/Homepage.css";
import Stories_info from "./data/stories";
import Posts_info from "./data/Posts";

class Home extends React.Component{
    render(){
        return(
            <div>
                <Stories stories={Stories_info}/>
                <Posts posts={Posts_info} />
            </div>
        )
    }
}

class Stories extends React.Component{
    render(){
        return(
            <div className="stories_container">
                {this.props.stories.map((story)=> <Story key={story.id} story={story} />)}
            </div>
        )
    }
}

class Story extends React.Component{
    render(){
        return(
            <div className="single_story">
                <img src={this.props.story.img} alt="story image" className={this.props.story.status==="read"? "read" : "unread"}></img>
            </div>
        )
    }
}

class Posts extends React.Component{
    render(){
        return(
            <div>
                {this.props.posts.map((post)=> <Post key={post.id} post={post} />)}
            </div>
        )
    }
}

class Post extends React.Component{
    constructor(props){
        super(props);
        this.state = {likes: 0 , icon:"far fa-heart"};
        this.addLike = this.addLike.bind(this);

    }

    addLike(event){
        const likes = this.state.likes;
        this.setState({likes: likes + 1 , icon:"fas fa-heart red"});

    }
    render(){
        const counter=0;
        return(
            <div className="post_container">
                <div className="post_header">
                    <div className="user_info">
                    <img src={this.props.post.user_img} alt="user img"></img>
                    <div>
                        <div>{this.props.post.username}</div>
                        <div className="location">{this.props.post.location}</div>
                    </div>
                    </div>
                    <div><i className="fas fa-ellipsis-h more_icon"></i></div>
                </div>
                <div className="post_body">
                <img src={this.props.post.img} alt="post picture"></img>
                </div>
                <div className="post_info">
                    <div className="right_side_icons">
                        <button onClick={this.addLike}><i className={this.state.icon}></i></button>
                        <i class="far fa-comment"></i>
                        <i class="far fa-paper-plane"></i>
                    </div>
                    <div>
                        <i class="far fa-bookmark"></i>
                    </div>
                </div>
                <div className="comments_section">
                    <div className="bold_text" style={{marginBottom:"1rem"}}>
                        {this.state.likes} likes
                    </div>
                    <div><span className="bold_text">{this.props.post.comment1.commenter}</span>  {this.props.post.comment1.message} </div>
                    <div><span className="bold_text">{this.props.post.comment2.commenter}</span>  {this.props.post.comment2.message} </div>
                    <div style={{color:"#8E8E8E"}}> {this.props.post.time}</div>
                </div>
                <div>
                    <input type="text" className="add_comment" placeholder="Add a Comment.."></input>
                </div>
            </div>
        )
    }
}

export default Home;