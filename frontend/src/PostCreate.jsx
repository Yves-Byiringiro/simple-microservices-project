import React from "react";

const PostCreate = () => {
    return (
    <div>
        <div className="container mt-4">
            <h4>New Post</h4>
            <hr />
            <div>
                <form>
                    <div className="form-group">
                        <label>Title</label>
                        <input
                        // value={title}
                        // onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>Content</label>
                        <textarea
                        // value={title}
                        // onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                        ></textarea>
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>);
};

export default PostCreate;