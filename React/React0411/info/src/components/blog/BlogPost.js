import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { database } from "../../config/firebase";

const BlogPost = () => {
  const { blog_id } = useParams();
  const endpoint = "mxn/blog/posts";
  const [post, setPost] = useState();

  useEffect(() => {
    const refReference = ref(database, `${endpoint}/${blog_id}`);
    get(refReference)
      .then((snapshot) => {
        setPost(Object.entries(snapshot.val()));
        console.log(Object.entries(snapshot.val()));
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {post && (
        <div>
          <h2>{post[3][1]}</h2>
          <p>{post[2][1]}</p>
          <img src={`${post[1][1]}`}/>
          <p>{post[0][1]}</p>
        </div>
      )}
    </div>
  );
};

export default BlogPost;
