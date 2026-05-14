import videos from "../data/videos";
import VideoCard from "../components/VideoCard";

const Home = () => {
  return (
    <div className="container">
      <h1>Video Library</h1>

      <div className="grid">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Home;