import React, { useEffect, useState } from 'react'
import TimerControls from './TimerControls'
import TimerDisplay from './TimerDisplay'
import ReactAudioPlayer from 'react-audio-player'

const PomodoroTimer = () => {
    const [time, setTime] = useState(10) //seting of intial time
    const [isActive, setIsActive] = useState(false) // timer is inactive so it is false

    useEffect(() => {
        let timer
        if (isActive && time > 0) {
            timer = setInterval(() => {
                setTime((decTime) => decTime - 1)
                document.getElementById('audio').play() // id by using alarm sound every sec
            }, 1000)
        }
        return () => clearInterval(timer)

    }, [isActive, time])//mangaing the side effects in time

    const handleStartStop = () => {
        setIsActive(!isActive) //toggle
    }

    const handleReset = () => {
        setTime(0)//reset
    }

    return (
        <div>
            <TimerDisplay time={time} />
            <TimerControls isActive={isActive} onStartStop={handleStartStop} setTime={setTime} time={time} reset={handleReset} />

            <ReactAudioPlayer id='audio' src='mixkit-tick-tock-clock-close-up-1059_x4D2m4oG.wav' />
        </div>
    )
}

export default PomodoroTimer
