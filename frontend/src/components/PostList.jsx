import React from 'react';


const PostList = () => {

    const posts = [
        {
            id:1,
            title:"First Post",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content. and make up the bulk of the card's content. and make up the bulk of the card's content.",
            username: "Keynes"
        },
        {
            id:2,
            title:"Second Post",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content. and make up the bulk of the card's content. and make up the bulk of the card's content.",
            username: "Yves"
        },
        {
            id:3,
            title:"Third Post",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content. and make up the bulk of the card's content. and make up the bulk of the card's content.",
            username: "Kelvin"
        },
        {
            id:4,
            title:"Fourth Post",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content. and make up the bulk of the card's content. and make up the bulk of the card's content.",
            username: "Keynes"
        }
    ];

    const renderedPosts = Object.values(posts).map(post => {
        return (
            <div className="card" style={{ width: '30%', marginBottom: '20px'}} key={post.id}>
                        <h2>Post List goes down here</h2>

                <div className="card-body">
                    <h5 className="card-title mb-4">{post.title}</h5>
                    <p className="card-text">{post.content}</p>
                    <div>
                        <p>Posted by: <strong>{post.username}</strong></p>
                    </div>
                </div>
          </div>
        )
    })

    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {renderedPosts}
        </div>
    )
}

export default PostList;