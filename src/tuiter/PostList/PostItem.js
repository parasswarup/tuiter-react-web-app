import React from "react";
const PostItem =({
                     posts = {
                         "_id": 678,
                         "title": "Amazing show about the mission!",
                         "comments": "4.2K",
                         "retuit":"3.5K",
                         "likes":"37.5K",
                         "post": {
                             "heading": "Countdown: Inspiration4 mission to space | Netflix Official Site",
                             "content": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
                             "image": "elon.jpg"
                         },
                         "userName": "Elon Musk",
                         "display":"elondp.jpg",
                         "handle": "elonmusk",
                         "time": "23h"
                     }
                 }) =>{
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1 pl-1 pr-0">
                    <img className="rounded-circle" src={`../images/${posts.display}`} width="100%" alt={"img"}/>
                </div>
                <div className="col-11">
                    <span className="fw-bold">{posts.userName} </span>
                    <i className="fa fa-check-circle text-primary"/>
                    <span className="text-muted"> {posts.handle} &#x2022;</span>
                    <span className="text-muted">{posts.time}</span>
                    <span className="float-end"><i className="fa-solid fa-ellipsis"/> </span>
                    <p>{posts.title}</p>
                    <div>
                        <img className="wd-rounded-top" src={`../images/${posts.post.image}`} width="100%" alt={"img"}/>
                        <div className=" wd-rounded-bottom">
                            <p className="fw-bold">{posts.post.heading}</p>
                            <p className="text-muted">{posts.post.content}</p>
                        </div>
                    </div>
                    <div className="row">
                        <span className="col-3">
                                <i className="fa-solid fa-comment"/> {posts.comments}
                        </span>
                        <span className="col-3">
                                <i className="fa-solid fa-retweet"/> {posts.retuit}
                        </span>
                        <span className="col-3">
                                <i className="fa-solid fa-heart"/> {posts.likes}
                        </span>
                        <span className="col-3">
                                <i className="fa-solid fa-upload"/>
                        </span>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default PostItem;