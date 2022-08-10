import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewBlog } from "../../store/blog/blog-actions";

function AddBlog() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.blog.isLoading);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBlog = {
      title: event.target.title.value,
      imgUrl: event.target.imgUrl.value,
      desc: event.target.desc.value,
    };
    dispatch(addNewBlog(newBlog));
    event.target.reset();
  };
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-6 offset-3">
          <h2>Add a new bog</h2>
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="title"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="imgUrl" className="form-label">
                    Image Url
                  </label>
                  <input
                    required
                    type="url"
                    className="form-control"
                    id="imgUrl"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="desc">
                    Description
                  </label>
                  <textarea required className="form-control" id="desc" />
                </div>
                <button
                  disabled={isLoading}
                  type="submit"
                  className="btn btn-primary"
                >
                  {isLoading && (
                    <span className="spinner-border spinner-border-sm text-light" />
                  )}
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBlog;
