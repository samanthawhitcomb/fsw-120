import React from "react"
import array from "./Post"
import BlogPost from "./BlogPost"

function BlogList() {
    const blogPosts = array.map((blog,index) => {
        console.log(blog)
        return(<BlogPost key={index} place={blog.title} price={blog.subTitle} timeToGo={blog.date} />)})
    return (
    <main style= {{display:"flex", flexDirection:"column", alignItems:"center",marginBottom:"20px"}}>{blogPosts}</main>
    )
}

export default BlogList
