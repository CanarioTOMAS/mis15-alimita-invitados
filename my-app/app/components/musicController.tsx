"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Stack,
  Slider,
  Typography
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PauseIcon from '@mui/icons-material/Pause';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

const MusicPlayer: React.FC = () => {
  const theme = useTheme();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); // Initial volume
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const playlist = [
    "../Musica1.mp3",
    "../Musica2.mp3",
    "../Musica3.mp3"
  ];

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener("loadeddata", handleAutoPlay);
    }
    return () => {
      if (audioElement) {
        audioElement.removeEventListener("loadeddata", handleAutoPlay);
      }
    };
  }, [currentSongIndex]);

  const handleAutoPlay = () => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    }
  };

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (event: Event, newVolume: number | number[]) => {
    if (Array.isArray(newVolume)) {
      newVolume = newVolume[0];
    }
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  };

  const handlePrevious = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + playlist.length) % playlist.length);
  };

  const reproductor = (action: boolean) => {
    if (action) {
      handlePlay();
    } else {
      handlePause();
    }
  };

  return (
    <Box component="section">
      <audio ref={audioRef} src={playlist[currentSongIndex]} />

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
          <BottomNavigationAction
            label="Prev"
            onClick={handlePrevious}
            icon={theme.direction === "rtl" ? <SkipNextIcon /> : <SkipPreviousIcon />}
          />
          <BottomNavigationAction
            sx={{ color: 'black' }}
            label={isPlaying ? 'Pause' : 'Play'}
            onClick={() => reproductor(!isPlaying)}
            icon={isPlaying ? <PauseIcon sx={{ height: 38, width: 38 }} /> : <PlayArrowIcon sx={{ height: 38, width: 38 }} />}
          />
          <BottomNavigationAction
            label="Next"
            onClick={handleNext}
            icon={theme.direction === "rtl" ? <SkipPreviousIcon /> : <SkipNextIcon />}
          />
        </BottomNavigation>

        <Box component="section" sx={{ textAlign: 'center' }} className="hidden md:block">
          <Stack
            spacing={3}
            direction="row"
            sx={{ mb: 1, marginLeft: '15%', marginRight: '15%' }}
            alignItems="center"
          >
            <VolumeDown />
            <Slider
              aria-label="Volume"
              value={volume}
              onChange={handleVolumeChange}
              min={0}
              max={1}
              step={0.01}
            />
            <VolumeUp />
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

export default MusicPlayer;
