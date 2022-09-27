import { style } from "@mui/system";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../static/logo.png";
import { FiBookmark } from "react-icons/fi";
import Link from "next/link";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
const PostCard = ({ post }) => {
  const styles = {
    wrapper:
      "flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer",
    authorContainer: "flex gap-[.4rem]",
    authorImageContainer:
      "grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]",
    authorImage: " object-cover ",
    postDetails: "flex-[2.5] flex flex-col",
    briefing: "text-[#787878]",
    title: "font-bold text-2xl",
    authorName: "font-semibold",
    articleDetails: "my-2 text-[.8rem]",
    detailsContainer: "flex items-center justify-between text-[#787878]",
    category: "bg-[#F2F3F2] p-1 rounded-full",
    bookmarkContainer: "cursor-pointer",
    thumbnailContainer:"flex-1",
  };

  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    const getAuthorData = async () => {
        // console.log((await getDoc(doc(db, "users", post.data.author))).data())
      setAuthorData((await getDoc(doc(db, "users", post.data.author))).data());
    };
    getAuthorData()
    
  },[]);
//   const date = new Date(post.data.postedOn.seconds*1000);
//   console.log(date.toLocaleString("en-US",{
//     day:'numeric',
//     month:'short',
//   }))
  return (
    <Link href={`/post/${post.id}`}>
      <div className={styles.wrapper}>
        <div className={style.postDetails}>
          <div className={styles.authorContainer}>
            <div className={styles.authorImageContainer}>
              <Image
                alt="/"
                src={`https://res.cloudinary.com/demo/image/fetch/${authorData?.imageUrl}`}
                className={styles.authorImage}
                width={40}
                height={40}
              />
            </div>
            <div className={styles.authorName}>{authorData?.name}</div>
          </div>
          <h1 className={styles.title}>
            {post.data.title}
          </h1>
          <div className={styles.briefing}>
          {post.data.brief}
          </div>
          <div className={styles.detailsContainer}>
            <span className={styles.articleDetails}>
            {new Date(post.data.postedOn.seconds*1000).toLocaleString('en-US',{
                day:'numeric',
                month:"short"
            })}
              {" "}  • {post.data.postLength} min read • {" "}
              <span className={styles.category}>{post.data.category}</span>
            </span>
            <span className={style.bookmarkContainer}>
              <FiBookmark className="h-5 w-5" />
            </span>
          </div>
        </div>
        <div className={styles.thumbnailContainer}>
          <Image height={100} width={100} src={`https://res.cloudinary.com/demo/image/fetch/${post.data.bannerImage}`} alt="/" />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
