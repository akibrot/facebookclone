import React, { useEffect, useState } from "react";
import { FaUser, FaVideo, FaPhotoVideo, FaSmile, FaSave } from "react-icons/fa";
import "./Center.scss";
import FileBase from "react-file-base64";
import axios from "axios";
import { useDispatch } from "react-redux";
import { GET_POST } from "./Redux/actions/actions";
function CreatePost() {
  const dispatch = useDispatch();
  const [pic, setpic] = useState("");
  const [discription, setdiscription] = useState("");

  const getpost = async (e) => {
    await axios
      .get("https://facebookclonebackendaki.herokuapp.com/getpost")
      .then((res) => {
        dispatch(GET_POST(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submit = async (e) => {
    e.preventDefault();

    const datasend = {
      discription,
      pic,
    };
    await axios.post("https://facebookclonebackendaki.herokuapp.com/savepost", datasend).then((res) => {
      setdiscription("");
      getpost();
    });
    console.log("cliked");
  };

  return (
    <div className="createpost">
      <div className="top">
        <div className="ic">
          <FaUser />
        </div>
        <div className="input">
          <form onSubmit={submit}>
            <input
              type="text"
              name=""
              id=""
              placeholder="What is on your mind Aki"
              onChange={(e) => setdiscription(e.target.value)}
            />
          </form>
        </div>
      </div>
      <div className="line"></div>
      <div className="bottom">
        <div className="box">
          <FaVideo /> <span>live video</span>
        </div>
        <div className="box testpost">
          <FaPhotoVideo /> <span>Photo/Video</span>
          <div className="filehidden">
            <FileBase
              onDone={({ base64 }) => setpic({ base64 })}
              className="test"
            />
          </div>
        </div>
        <div className="box" onClick={submit}>
          <FaSave /> <span>Post</span>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
