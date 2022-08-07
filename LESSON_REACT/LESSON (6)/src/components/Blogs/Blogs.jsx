import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogs } from "../../store/blog/blog-actions";
import "./Blogs.css";
function Blogs() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.blog.isLoading);
  const blogs = useSelector((state) => state.blog.blogs);

  React.useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const fetchData = () => {
    if (blogs.length > 0) {
      return blogs.map((item, index) => (
        <div className="col-4" key={index}>
          <div className="card mb-2">
            <div className="card-body">
              <img src={item.blog.imgUrl} alt={item.blog.title} />
              <h3>{item.blog.title}</h3>
              <p>{item.blog.desc}</p>
            </div>
          </div>
        </div>
      ));
    }
    return <div>No Data</div>;
  };
  return (
    <div className="container my-5">
      <h1>Blogs</h1>
      <div className="row">
        {isLoading && (
          <span className="spinner-border spinner-border-sm text-light" />
        )}
        {!isLoading && fetchData()}
      </div>
    </div>
  );
}

export default Blogs;
