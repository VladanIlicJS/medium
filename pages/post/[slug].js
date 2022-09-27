import React from "react";
import ArticleMain from "../../components/ArticleMain";
import ReadersNav from "../../components/ReadersNav";
import Recommendations from "../../components/Recommendations";
import { MediumContext } from "../../context/MediumContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
const Post = () => {
  const styles = {
    content: "flex",
  };
  const router = useRouter();
  const { posts, users } = useContext(MediumContext);
  const [post, setPost] = useState([]);
  const [user, setUser] = useState([]);
  useEffect(() => {
    if (posts.length === 0) {
      return;
    }

    setPost(posts.find((post) => post.id === router.query.slug));
    setUser(users.find((user) => user.id === post.data?.author));
  },[post]);

  return (
    <div className={styles.content}>
      <ReadersNav />
      <ArticleMain post={post} author={user} />
      <Recommendations />
    </div>
  );
};

export default Post;
