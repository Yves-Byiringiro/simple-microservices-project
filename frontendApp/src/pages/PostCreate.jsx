import React, {useState, useEffect} from "react";
import axios from "axios";

import SimpleInput from "../components/Input"
import TextArea from "../components/TextArea";
import Button from "../components/Button";

import { countRemChars } from '../utitlities/countRemChars';

const PostCreate = () => {
    const [title, setTitle] =  useState("");
    const [tmaxChars, setTmaxChars] =  useState(60);
    const [tcharsCount, setTcharsCount] = useState(60);

    const [content, setContent] = useState("");
    const [cmaxChars, setCmaxChars] =  useState(250);
    const [ccharsCount, setCcharsCount] = useState(250);

    const time = new Date().toLocaleTimeString();
    const today = new Date().toLocaleDateString();
    const date = today + " , " + time;


    const handleTitleInput = (e) => {
        countRemChars(setTitle, e.target.value, e.target.value.length, tmaxChars, setTcharsCount);
    }

    const handleContentInput = (e) => {
        countRemChars(setContent, e.target.value, e.target.value.length, cmaxChars, setCcharsCount);
    }
    const handleForm = async (e) => {
        e.preventDefault();

        await axios.post(`http://localhost:8000/posts/`, { title, content, date });
        setTitle("");
        setContent("");
    }
    return (
    <div>
        <div className="container mt-4">
            <h4>New Post</h4>
            <hr />
            <div>
                <form onSubmit={handleForm}>
                    <SimpleInput 
                        label="Title"
                        value={title}
                        onChange={handleTitleInput}
                        maxLength={60}
                        charsCount={tcharsCount}
                    />

                    <TextArea 
                        label="Content"
                        value={content}
                        onChange={handleContentInput}
                        maxLength={250}
                        charsCount={ccharsCount}
                        rows="4"
                    />
                    <Button name="Submit" />
                </form>
            </div>
        </div>
    </div>);
};

export default PostCreate;




