import React, {useState} from "react";
import axios from "axios";

import { countRemChars } from "../utitlities/countRemChars";

import Button from "./Button";
import TextArea from "./TextArea";

const CommentCreate = ({postId}) => {
    const [content, setContent] = useState("");
    const [cmaxChars, setCmaxChars] =  useState(55);
    const [ccharsCount, setCcharsCount] = useState(55);

    const handleCommentInput = (e) => {
        countRemChars(setContent, e.target.value, e.target.value.length, cmaxChars, setCcharsCount);
    };

    const handleForm = async(e) => {
        e.preventDefault();
        await axios.post(`http://localhost:8001/post/${postId}/comments`, { content });
        setContent("");
    };

    return (
        <div className="container mt-3">
            <hr />
            <div className='add-comment'>
                <form onSubmit={handleForm}>
                    <TextArea 
                        value={content}
                        onChange={handleCommentInput}
                        maxLength={55}
                        charsCount={ccharsCount}
                        rows="2"
                    />
                    <Button name="Submit" />
                </form>
            </div>
        </div>

    );
};


export default CommentCreate;