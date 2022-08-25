import React from "react";
import "./Post.scss";
import img from '../pic1.jpg'
function PostGenerator({data}) {
  return (
    <div className="postbox">
      <div className="top">
        <div className="propic">
            <img src={img} alt="" width="auto" />
        </div>
        <span>
          <b>Akibrot Samuel</b>
        </span>
      </div>
      <div className="bottom">
        <div className="text">
          <p>
            {
              data.discription
            }
          </p>
        </div>
        <div className="picture">
            <img src={data.pic.base64} alt="" />
        </div>
      </div>
    </div>
  );
}

export default PostGenerator;
