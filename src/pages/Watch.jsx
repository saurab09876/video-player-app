import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import videos from "../data/videos";

const Watch = () => {
  const { id } = useParams();

  const video = videos.find((v) => v.id == id);

  return (
    <div className="player-container">
      <h2>{video.title}</h2>

      <ReactPlayer
        url={video.videoUrl}
        controls
        playing
        width="100%"
        height="500px"
      />
    </div>
  );
};

export default Watch;