import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { database } from "../config/firebase";

const endpoint = "mxn/blog/posts";

const BlogScreen = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const refReference = ref(database, endpoint);
    get(refReference)
      .then((snapshot) => setPosts(Object.entries(snapshot.val())))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="blog">
      {posts &&
        posts.map((post) => {
          return (
            <Link key={`post_${post[1].title}`} to={`/blogposts/${post[0]}`}>
              {post[1]?.title}
            </Link>
          );
        })}
    </div>
  );
};

export default BlogScreen;
