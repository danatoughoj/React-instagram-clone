import React from "react";
import "./css/Profile.css";
import Pictures from "./data/Pictures";
import Profile_info from "./data/Profile_info";


class Profile extends React.Component{
    render(){
        return(
            <div className="container">
                <ProfileInfo info={Profile_info} />
                <Posts pictures={Pictures} />
            </div>
        )
    }
}
class ProfileInfo extends React.Component{
    render(){
        const Data="";
        return(
            <div>
                <div className="info_large_view">
                    <div className="info_section">
                        <div className="left_part">
                            {this.props.info.map((data)=> {this.Data= data})}
                            {console.log(this.Data.username)}
                            <img src={this.Data.img} alt="profile picture" className="profile_picture"></img>
                        </div>
                        <div className="right_part">
                            <div className="first_info_row">
                                <div className="username">{this.Data.username}</div>
                                <div><button className="btns btn1">Edit Profile</button></div>
                                <div><i class="fas fa-cog"></i></div>
                            </div>
                            <div className="second_info_row">
                                <div><span className="bold_text">{this.Data.number_of_posts}</span> posts</div>
                                <div><span className="bold_text">{this.Data.followers}</span> followers</div>
                                <div><span className="bold_text">{this.Data.following}</span> following</div>
                            </div>
                            <div className="third_info_row">
                                <div className="bold_text">{this.Data.name}</div>
                                <div>{this.Data.bio}</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* small view */}
                <div className="info_small_view">
                    <div className="first_section">
                        {this.props.info.map((data)=> {this.Data= data})}
                        <div className="left_part_small">
                            <img src={this.Data.img} alt="profile picture" className="profile_picture"></img>
                        </div>
                        <div className="right_part_small">
                            <div className="right_part_first_row">
                                <div className="username">{this.Data.username}</div>
                                <div><i class="fas fa-cog"></i></div>
                            </div>
                            <div className="right_part_second_row">
                                <button className="btns btn1">Edit Profile</button>
                            </div>
                        </div>
                    </div>
                    <div className="second_section">
                        <div>
                            <div className="bold_text">{this.Data.name}</div>
                            <div>{this.Data.bio}</div>
                        </div>
                        <div className="numbers_row">
                            <div>
                                <div className="bold_text">
                                    {this.Data.number_of_posts}
                                </div>
                                <div> 
                                    posts
                                </div>
                            </div>
                            <div>
                                <div className="bold_text">
                                    {this.Data.followers}
                                </div> 
                                <div>
                                    followers
                                </div>
                            </div>
                            <div>
                                <div className="bold_text">
                                    {this.Data.following}
                                </div> 
                                <div>
                                    following
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Posts extends React.Component{
    render(){
        return(
            <div>
                <div className="tabs_large_view">
                    <hr className="hr_style"/>
                    <div className="tabs">
                        <div>
                            <i class="fas fa-border-all"></i>
                            POSTS
                        </div>
                        <div>
                            <i class="fas fa-tv"></i>
                            IGTV
                        </div>
                        <div>
                            <i class="far fa-bookmark"></i>
                            SAVED
                        </div>
                        <div>
                            <i class="fas fa-user-tag"></i>
                            TAGGED
                        </div>

                    </div>
                    <div  className="photos_grid">
                    {this.props.pictures.map((picture) => <Post key={picture.id} picture={picture}/>) }
                    </div>
                </div>
                {/* Small View */}
                <div className="tabs_small_view">
                    <div className="tabs">
                        <i class="fas fa-border-all"></i>
                        <i class="fas fa-tv"></i>
                        <i class="far fa-bookmark"></i>
                        <i class="fas fa-user-tag"></i>
                    </div>
                    <div  className="photos_grid">
                    {this.props.pictures.map((picture) => <Post key={picture.id} picture={picture}/>) }
                    </div>
                </div>
            </div>
        )
    }

}
class Post extends React.Component{
    render(){
        return(
            <div className="grid_item">
                {this.props.picture.type==="multiple"? <i className="fas fa-clone myicons"></i> : this.props.picture.type==="video"? <i class="fas fa-video myicons"></i> : " "}
                <img src={this.props.picture.img} alt="picture23"></img> 
            </div>
        )
    }

}

export default Profile;