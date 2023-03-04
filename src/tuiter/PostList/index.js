import React from "react";
import PostItem from "./PostItem";
import postsArray from "./posts.json";
const PostList = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(post => {
                    return <PostItem key={post._id} posts={post}/> } )
            }
        </ul>
    ); }
export default PostList;