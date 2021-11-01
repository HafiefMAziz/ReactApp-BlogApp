import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
// menggunakan useState untuk menjadikan variable reactive terhadap event
const [blogs, setBlogs] = useState([

    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
]); 

    return ( 
        <div className="Home">
            {/* <h2>Homepage</h2> */}
            <BlogList dataBlogs={blogs} title='All Blogs' />
            <BlogList dataBlogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" />
        </div>
     );
}
 
export default Home;