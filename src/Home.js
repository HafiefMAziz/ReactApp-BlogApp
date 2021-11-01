import { useState } from "react";

const Home = () => {
// menggunanakan useState untuk menjadikan variable rective terhadap event
const [blogs, setBlogs] = useState([

    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
]); 

    return ( 
        <div className="Home">
            <h2>Homepage</h2>
            {/* Menggunakan map speprti forecah unutk menampilkan list */}
            { blogs.map((blog)=> ( 
                <div className="blog-preview" key={ blog.id }>
                    <h2>{ blog.title }</h2>
                    <p>Writen by : { blog.author }</p>
                </div>
            )) }
        </div>
     );
}
 
export default Home;