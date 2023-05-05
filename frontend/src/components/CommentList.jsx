import React from "react";

const CommentList = ({ comments }) => {

    const renderedComments = comments.map((comment) => {
        // let content;

        // if (comment.status === "approved") {
        //     content = comment.content;
        // }
        // if (comment.status === "rejected") {
        //     content = "This comment has been rejected";
        // }
        // if (comment.status === "pending") {
        //     content = "This comment is awaiting moderation";
        // }

        return <li key={comment.id}>{comment.content}</li>
    })
    return(
        <div>
            <h6>Comments:</h6>
            <ul>{renderedComments}</ul>
        </div>
    );
};


export default CommentList;