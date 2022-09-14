import { useIdleTimer } from 'react-idle-timer';
import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";

export default function AutoLogout() {
    const idleTimeRef = useRef(null);
    let navigate = useNavigate();
    
    const onIdle = () => {
        navigate("/");
    };

    const idleTimer = useIdleTimer({
        crossTab: true,
        ref: idleTimeRef,
        timeout: 3600 * 1000,
        onIdle: onIdle
   });
    return (
        <div idleTimer={idleTimer}></div>
    );
}



