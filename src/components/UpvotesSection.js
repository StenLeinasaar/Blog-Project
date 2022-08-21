import React from "react";

const UpVotesSection = ({ articleName, upvotes, setArticleInfo }) => {
    const upvoteArticle = async () => {
        const result = await fetch(`http://localhost:8000/api/articles/${articleName}/upvote`, {
            method: 'post',
        });
        const body = await result.json();
        const info = { upvotes: body.upvotes, comments: body.comments }
        setArticleInfo(info);
    }
    return (
        <div id='upvotes-section' >
            <button onClick={upvoteArticle}>Upvote this article</button>
            <p>This post has been upvoted {upvotes} times </p>
        </div>
    );

}



export default UpVotesSection;