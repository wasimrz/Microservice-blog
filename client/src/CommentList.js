import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({ comments }) => {
    // const [comments, setComments] = useState([]);
    // console.log({ postId })
    // const fetchData = async() => {
    //     const res = await axios.get(
    //         `http://localhost:4001/posts/${postId}/comments`
    //     );
    //     console.log(res)
    //     setComments(res.data);
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    const renderedComments = comments.map((comment) => {
        let content;
        if (comment.status === "approved") {
            content = comment.content
        }
        if (comment.status === "pending") {
            content = "Pending"
        }
        if (comment.status === "rejected") {
            content = "Rejected"
        }
        return <li key = { comment.id } > { content } < /li>;
    });

    return <ul > { renderedComments } < /ul>;
};

export default CommentList;