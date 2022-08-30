import React from "react";
import "./video.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const video = () => {
  return (
    <>
      <div className="video-card">
        <div className="video-card-sub">
          <div className="video-head-data">
            <div>
              <h4>Product Video</h4>
            </div>
            <div>
              <MoreVertIcon className="video-three-dot" />
            </div>
          </div>
          <div className="video-img-data">
            <div className="video-img-data-2">
              <div className="play-btn">
                <PlayArrowIcon className="playBtn" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default video;
