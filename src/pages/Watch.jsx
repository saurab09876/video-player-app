import { useParams } from "react-router-dom";
import videos from "../data/video";

const Watch = () => {
  const { id } = useParams();

  const video = videos.find((v) => v.id == id);

  return (
    <div className="player-container">
      <h1>{video.title}</h1>

      <video
        width="100%"
        height="500"
        controls
        autoPlay
        muted
      >
        <source src={video.videoUrl} type="video/mp4" />

        Your browser does not support video tag.
      </video>
    </div>
  );
};

export default Watch;