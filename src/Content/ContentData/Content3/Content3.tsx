import { useEffect, useState } from "react";
import MoreWork from "../../../components/Content/Content3/MoreWork";
import Video from "../../../components/Content/Content3/Video";
import "./Content3.scss";
// type videoArguments = {
//   width?: string;
//   marginLeft?:string;
//   greyTextLeft?: string;
//   greyTextRight?: string;
//   textLarge?: string;
//   source?:string;
// };
const Content3 = () => {
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
  return (
    <div className="content-3-container">
      <div className="videos">
        <span className="video-1">
        </span>
          <Video source="/videos/vid1.mp4" 
          width="clamp(40rem, 21.1429vw + 37.1429rem, 60rem)"
          // width="clamp(40rem, 21.1429vw + 37.1429rem, 50rem)"
          />
          <Video source="/videos/vid2.mp4"
          width="clamp(43.75rem, -8.5714vw + 46.4286rem, 35rem)"
          flexAlign="flex-end"
          />
          <Video source="/videos/vid3.mp4"
          width="clamp(43.75rem, 57.7143vw + 25.7143rem, 65rem)"
          // width="clamp(43.75rem, 57.7143vw + 25.7143rem, 60rem)"
          />
          <Video source="/videos/vid4.mp4"
          width="clamp(43.75rem, 21.1429vw + 37.1429rem, 50rem)"
          flexAlign="flex-end"
          />
          <Video source="/videos/vid5.mp4"
          width="clamp(43.75rem, -11.4286vw + 47.3214rem, 34.75rem)"
          />
          <Video source="/videos/vid6.mp4"
          width="clamp(43.75rem, -15.4286vw + 48.5714rem, 40rem)"
          // width="clamp(43.75rem, -15.4286vw + 48.5714rem, 34rem)"
          flexAlign="flex-end"
          />
          <Video source="/videos/vid7.mp4"
          width="clamp(43.75rem, 57.7143vw + 25.7143rem, 70rem)"
          // width="clamp(43.75rem, 57.7143vw + 25.7143rem, 60rem)"
          />
        <span className="video-2">
        </span>
        <span className="video-3">
        </span>
        <span className="video-4">
        </span>
        <span className="video-5">
        </span>
        <span className="video-6">
        </span>
        <span className="video-7">
        </span>
      </div>
      <MoreWork />
    </div>
  );
};

export default Content3;
