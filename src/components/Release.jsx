import React, { useState, useEffect } from 'react';
import './Release.css';

const Releases = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchYouTubeVideos = async () => {
      // 1. Pulling your secure key from the .env file
      const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY; 
      
      // 2. ⚠️ PASTE YOUR YOUTUBE CHANNEL ID HERE ⚠️
      const CHANNEL_ID = 'UCgddu8zf3TKUILfMjuHuezA'; 
      
      const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=4`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        console.log("YouTube API Response:", data);
        
        // Filter to ensure we only render actual videos, not playlists or channels
        if (data.items) {
          const videoResults = data.items.filter(item => item.id.videoId);
          setVideos(videoResults);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching from YouTube API", error);
        setLoading(false);
      }
    };

    fetchYouTubeVideos();
  }, []);

  return (
    <section className="releases-section" id="projects">
      <div className="releases-header">
        <h2 className="releases-heading">Latest Releases</h2>
        <p className="releases-subtext">Direct from the studio to your speakers.</p>
      </div>

      {loading ? (
        <p className="loading-text">Loading latest tracks...</p>
      ) : (
        <div className="video-grid">
          {videos.map((video) => (
            <a 
              key={video.id.videoId} 
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-card"
              aria-label={`Open ${video.snippet.title} on YouTube`}
            >
              <div className="card-inner">
                <div className="thumbnail-container">
                  <div className="badge-top">Latest Track</div>

                  <img 
                    src={video.snippet.thumbnails?.maxres?.url || video.snippet.thumbnails?.high?.url} 
                    alt={video.snippet.title} 
                    className="video-thumbnail"
                  />

                  <div className="badge-bottom">Stream Now</div>
                </div>

                <div className="video-info">
                  <h3 
                    className="video-title" 
                    dangerouslySetInnerHTML={{ __html: video.snippet.title }} 
                  />
                  <div className="video-subtitle">
                    <span className="subtitle-icon">▪</span> RVM Studio
                  </div>
                </div>

                <div className="video-stats">
                  <div className="stat-block">
                    <span className="stat-label">Published</span>
                    <span className="stat-value">
                      {new Date(video.snippet.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  <div className="stat-block align-right">
                    <span className="stat-label">Platform</span>
                    <span className="stat-value">YouTube</span>
                  </div>
                </div>

              </div>
            </a>
          ))}
        </div>
      )}
      
      <div className="releases-footer">
        <a href="/projects" className="projects-btn">Explore Projects</a>
      </div>
    </section>
  );
};

export default Releases;