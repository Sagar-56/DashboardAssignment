import React from "react";
import "./video.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ImageIcon from './images/video-thumbnail.png'

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
                
              {/* <img src={ImageIcon} alt="videoImage" /> */}
              {/* <span className="play-span1"> */}
                {/* <span className="play-span2"> */}
                    {/* <span className="play-span3"> */}
                        {/* <PlayArrowOutlinedIcon /> */}
                    {/* </span> */}
                {/* </span> */}
              {/* </span> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default video;
