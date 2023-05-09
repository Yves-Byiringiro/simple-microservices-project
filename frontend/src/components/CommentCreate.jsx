import React, {useState} from "react";
import axios from "axios";


const CommentCreate = ({postId}) => {
    const [content, setContent] = useState("");

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
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} className="form-control"></textarea>
                    <button className="btn btn-outline-success my-3" type="submit">Submit</button>
                </form>
            </div>
        </div>

    );
};


export default CommentCreate;