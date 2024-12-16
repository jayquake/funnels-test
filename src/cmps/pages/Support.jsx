import { useState } from "react";

export default function Support({ navigate }) {
  const [selectValue, setSelectValue] = useState(1);
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    author: "",
    createdOn: "",
  });
  const [blogs, setBlogs] = useState([
    {
      title: "Happy Rosh Hashana",
      content:
        "According to tradition, the Hebrew calendar started at the time of Creation, placed at 3761 BCE. The current (2022/2023) Hebrew year is 5783.",
      author: "Testing Testersson",
      createdOn: "25/09/2022",
    },
  ]);
  const [formVisible, setFormVisible] = useState(false);

  const openForm = () => setFormVisible(true);
  const closeForm = () => setFormVisible(false);

  const updateInputs = (e) => {
    const input = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [input]: value });
  };

  const getTodayDate = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;
    return today;
  };

  const createBlog = (e) => {
    e.preventDefault();
    const newBlog = {
      title: inputs.title,
      content: inputs.content,
      author: inputs.author,
      createdOn: `${getTodayDate()}`,
    };

    const updatedBlogs = [...blogs, newBlog];
    setBlogs(updatedBlogs);
    closeForm();
  };

  const deleteBlog = (index) => {
    let updatedBlogs = [...blogs];
    if (index <= 0) updatedBlogs.shift();
    else {
      updatedBlogs = updatedBlogs
        .slice(0, index)
        .concat(updatedBlogs.slice(index + 1));
    }
    setBlogs(updatedBlogs);
  };

  return (
    <div className="blog">
      <h1>Blog Articles</h1>
      <button className="btn" onClick={openForm}>
        Open Form modal
      </button>
      {formVisible ? (
        <div className="modal">
          <div className="modal-content">
            <span className="close" role="button" onClick={closeForm}>
              &times;
            </span>
            <form onSubmit={(e) => createBlog(e)} className="form-container">
              <h2>Create new blog</h2>
              <select
                onChange={(e) => setSelectValue(e.target.value)}
                value={selectValue}
              >
                <option>1</option>
                <option>2</option>
              </select>
              {selectValue === "2" ? <div className="isThis">ISTHIS</div> : ""}
              <div className="form-field">
                <label htmlFor="title">
                  <b>Title</b>
                </label>
                <input
                  type="text"
                  placeholder="Blog title"
                  name="title"
                  required
                  onChange={(e) => {
                    updateInputs(e);
                  }}
                />
              </div>
              <div className="form-field">
                <label htmlFor="content">
                  <b>Content</b>
                </label>
                <textarea
                  type="text"
                  placeholder="Enter blog content"
                  name="content"
                  required
                  onChange={(e) => {
                    updateInputs(e);
                  }}
                />
              </div>
              <div className="form-field">
                <label htmlFor="author">
                  <b>Author</b>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  name="author"
                  required
                  onChange={(e) => {
                    updateInputs(e);
                  }}
                />
              </div>
              <button type="submit" className="btn">
                Publish blog
              </button>
              <button type="button" className="btn" onClick={closeForm}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      ) : (
        <></>
      )}
      {blogs.length ? (
        <div className="blogs-list-container">
          <ul>
            {blogs.map((blog, index) => (
              <li className={`blog-${index}`} key={blog - index}>
                <h2>{blog.title}</h2>
                <p>{blog.content}</p>
                <span>{`By ${blog.author}`}</span>
                <span>{`${blog.createdOn}`}</span>
                <button
                  type="button"
                  className="btn"
                  onClick={() => deleteBlog(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
