import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articleContent from "./article-content";
import ArticlesList from "../components/ArticlesList";
import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/CommentsList";
import UpVotesSection from "../components/UpvotesSection";
import AddCommentForm from "../components/AddCommentForm";

const ArticlesPage = () => {
    const { name } = useParams();
    const article = articleContent.find(article => article.name === name)

    const otherArticles = articleContent.filter(article => article.name !== name);

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`http://localhost:8000/api/articles/${name}`);
            const body = await result.json();
            const info = { upvotes: body.upvotes, comments: body.comments }
            setArticleInfo(info);
        }
        fetchData();
    }, [name]);



    if (!article) return <NotFoundPage />


    return (

        <>
            <h1>{article.title}</h1>

            <UpVotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />

            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <CommentsList comments={articleInfo.comments} />
            <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
            <h3>Other Related Articles</h3>
            <ArticlesList articles={otherArticles} />
        </>

    );
}
export default ArticlesPage;