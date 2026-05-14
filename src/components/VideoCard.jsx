import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <Link to={`/watch/${video.id}`} className="card">
      <img src={video.thumbnail} alt={video.title} />
      <h3>{video.title}</h3>
    </Link>
  );
};

export default VideoCard;