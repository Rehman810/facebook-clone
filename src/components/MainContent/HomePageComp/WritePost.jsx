import React from "react";
import Profile from "../../../assets/profile.jpg";
import { MdVideoCameraBack } from "react-icons/md";
import { MdPhotoLibrary } from "react-icons/md";
import { BiHappyAlt } from "react-icons/bi";

const WritePost = () => {
  return (
    <div className="write-post">
      <div className="Write">
        <img
          src={Profile}
          alt="profile"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50px",
            marginLeft: 10,
            marginRight: 20,
          }}
        />
        <div className="search" style={{ width: "85%" }}>
          <input
            className="search-input"
            type="text"
            placeholder="What's on your mind, Abdul Rehman?"
          />
        </div>
      </div>
      <div className="write-vid-activity">
        <div className="write-btn">
          <MdVideoCameraBack color="red" size={20} />
          <span>Live video</span>
        </div>
        <div className="write-btn">
          <MdPhotoLibrary color="green" size={20} />
          <span>Photo/video</span>
        </div>
        <div className="write-btn">
          <BiHappyAlt color="yellow" size={20} />
          <span>Feeling/activity</span>
        </div>
      </div>
    </div>
  );
};

export default WritePost;
