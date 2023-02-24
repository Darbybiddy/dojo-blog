import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new blog website",
      body: "lorum ipsum ...",
      author: "mario",
      id: 1,
    },
    { title: "Welcome party", body: "lorum ipsum ...", author: "yoshi", id: 2 },
    { title: "Web dev top tips",
      body: "lorum ipsum ...",
      author: "mario",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
const newBlogs = blogs.filter(blog => blog.id !==id)
setBlogs(newBlogs)
  }

  useEffect(()=> {
    console.log('use effecr ran!')
  },[]) 
  return (
    <div className="home">
      <BlogList blogs={blogs} title='All Blogs!' handleDelete={handleDelete}/>
      {/* .filter(blog) is going to filter through the array of blogs at the top and select only the ones with the author of mario.
      since we set the filter to blog.author is === 'mario' */}
      {/* <BlogList blogs={blogs.filter((blog)=> blog.author === 'mario')} title='Marios Blogs'/> */}

    </div>
  );
};
export default Home;
