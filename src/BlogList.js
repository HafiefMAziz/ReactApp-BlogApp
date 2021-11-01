const BlogList = (props) => {
    const blogs = props.dataBlogs;
    const title = props.title;

    return ( 
        <div className="blog-list">
             <h2>{ title }</h2>
            {/* Menggunakan map seperti foreach untuk menampilkan list */}
            { blogs.map((blog)=> ( 
                <div className="blog-preview" key={ blog.id }>
                    <h2>{ blog.title }</h2>
                    <p>Writen by : { blog.author }</p>
                </div>
            )) }
        </div>
     );
}
 
export default BlogList;