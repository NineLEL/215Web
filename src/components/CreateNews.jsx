import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

import "../styles/CreateNewsStyles.css";

const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    localStorage.setItem("isAuth", true);
    setIsAuth(true);
    // navigate("/");
  });
};

function CreateNews({ isAuth }) {
  if (isAuth == false) {
    return (
      <div className="createPostPage">
        <p>You must logged in to create new news.</p>
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
        </div>
    )
  }
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");
  
    const postsCollectionRef = collection(db, "posts");
    let navigate = useNavigate();
  
    const createPost = async () => {
      await addDoc(postsCollectionRef, {
        title,
        postText,
        author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      });
      navigate("/news");
    };
  
    // useEffect(() => {
    //   if (!isAuth) {
    //     return (
    //       <div>
    //         <p>You must logged in to create new news.</p>
    //         <button className="login-with-google-btn" onClick={signInWithGoogle}>
    //           Sign in with Google
    //         </button>
    //         </div>
    //     )
    //   }
    // }, []);
  
    return (
      <div className="createPostPage">
        <div className="cpContainer">
          <h1>Create a Post</h1>
          <div className="inputGp">
            <label> Title:</label>
            <input
              placeholder="Title..."
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <div className="inputGp">
            <label> Post:</label>
            <textarea
              placeholder="Post..."
              onChange={(event) => {
                setPostText(event.target.value);
              }}
            />
          </div>
          <button onClick={createPost}> Submit Post</button>
        </div>
      </div>
    );
  }

export default CreateNews;