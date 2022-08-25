import React, { useEffect, useState } from "react";
import "./Center.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import Carousel from "react-elastic-carousel";
import { FaUser, FaVideo, FaPhotoVideo, FaSmile } from "react-icons/fa";
import Storygenerator from "./Storygenerator";
import CreatePost from "./CreatePost";
import PostGenerator from "./PostGenerator";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { GET_POST } from "./Redux/actions/actions";
function Center() {
  const dispatch = useDispatch();
  const [data, setdata] = useState([]);
  const getpost = async (e) => {
    await axios
      .get("https://facebookclonebackendaki.herokuapp.com/getpost")
      .then((res) => {
        setdata(res.data);
        dispatch(GET_POST(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getpost();
  }, []);
  const { Posts } = useSelector((state) => state.GetPostReducer);
  return (
    <div>
      <div className="stories">
        <Storygenerator />
        <Storygenerator />
        <Storygenerator />
        <Storygenerator />
        <Storygenerator />
      </div>
      <CreatePost />
      {Posts.map((getpost) => {
        return <PostGenerator key={getpost._id} data={getpost}></PostGenerator>;
      })}
    </div>
  );
}

export default Center;
