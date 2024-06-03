import { useEffect, useRef, useState } from "react";

const AvatarVideo = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        videoRef.current.play();
        setIsPlaying(true);
    };

    return (
        <div className="relative w-full h-full">
            <video ref={videoRef} src="/hmdl.mp4" loop className="w-full h-full" />
            {!isPlaying && (
                <button
                    onClick={handlePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl"
                >
                    Play Video
                </button>
            )}
        </div>
    );
};

export default AvatarVideo;
