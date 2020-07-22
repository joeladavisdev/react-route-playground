import React, { useState, useEffect } from 'react';


export default function FetchData() {
    const [posts, setPosts] = useState([]);


  
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        .then(data => {
            setPosts(data)
                // useState({ persons: res.data})
            })
    }, [])
    
    return (
        <div>
        <button>Fetch Data</button>
            {
                posts.map(post => {
                    return (
                        <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )


     
    
    
    
  
}


// - Create a class component that will fetch posts and render the title and body
// - Refactor that into a functional component using hooks to do the same
// - URL to fetch the posts: ‘https://jsonplaceholder.typicode.com/posts’
// - You can use Axios or fetch... why not try both?