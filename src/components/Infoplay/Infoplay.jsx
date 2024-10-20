import React from 'react';

const convertToEmbedUrl = (url) => {
  // Converte o link para o formato embed
  return url.includes('youtu.be/') 
    ? url.replace('https://youtu.be/', 'https://www.youtube.com/embed/')
    : url;
};

const Infoplay = ({ videoUrl }) => {
  const embedUrl = convertToEmbedUrl(videoUrl);

  return (
    <div className="w-full h-full pb-4 ">
      <iframe
        className="w-full h-72 max-h-full"
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default Infoplay;