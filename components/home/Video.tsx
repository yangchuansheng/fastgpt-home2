const VideoPlayer = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-16 pt-16 md:pt-24 text-center">
      <video id="player" playsInline controls>
        <source
          src="https://otnvvf-imgs.oss.laf.run/fastgpt.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoPlayer;
