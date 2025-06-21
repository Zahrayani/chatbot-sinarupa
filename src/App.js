import React, { useState, useEffect } from "react";
import ChatBox from "./components/ChatBox";
import Disclaimer from "./components/Disclaimer";
import Loading from "./components/Loading";

function App() {
  const [showLoading, setShowLoading] = useState(true);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  // Deteksi perangkat untuk menampilkan video mobile atau desktop
  const isMobile = /iPhone|Android/i.test(navigator.userAgent);

  const handleFinishLoading = () => {
    setShowLoading(false);
    setShowDisclaimer(true);
  };

  const handleAcceptDisclaimer = () => {
    setShowDisclaimer(false);
  };

  return (
    <>
      {showLoading ? (
        <Loading onFinish={handleFinishLoading} isMobile={isMobile} />
      ) : showDisclaimer ? (
        <Disclaimer onContinue={handleAcceptDisclaimer} />
      ) : (
        <ChatBox />
      )}
    </>
  );
}

export default App;
