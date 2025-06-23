import React, { useState, useEffect } from "react";
import "../styles/chatbox.css";
import jsonData from "../data/quick_response_sinarupa_15.json";

const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [quickReplies, setQuickReplies] = useState([]);
  const [botResponses, setBotResponses] = useState({});
  const [isTyping, setIsTyping] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
    setQuickReplies(jsonData.quickReplies);
    setBotResponses(jsonData.botResponses);
  }, []);

  const handleSend = () => {
    if (selectedQuestion) {
      sendMessage(selectedQuestion);
      setSelectedQuestion(null);
    }
  };

  const sendMessage = async (userText) => {
    if (!userText) return;

    const userMsg = { role: "user", content: userText };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    const botResponse = botResponses[userText];

    if (botResponse) {
      setTimeout(() => {
        setMessages((prev) => [...prev, { role: "bot", content: botResponse }]);
        setIsTyping(false);
      }, 1000);
    } else {
      try {
        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ role: "user", parts: [{ text: userText }] }],
            }),
          }
        );

        const data = await res.json();
        const aiReply =
          data.candidates?.[0]?.content?.parts?.[0]?.text ||
          "Maaf, Tompa belum memiliki jawaban untuk itu. Kamu bisa hubungi IG @sinarupa2025 ya!";
        setMessages((prev) => [...prev, { role: "bot", content: aiReply }]);
      } catch (err) {
        console.error("❌ Error:", err);
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            content:
              "Tompa lagi error nih. Coba tanya lagi nanti ya, atau langsung kontak panitia di IG @sinarupa2025.",
          },
        ]);
      } finally {
        setIsTyping(false);
      }
    }
  };

  return (
    <div className="chat-wrapper">
      {/* HEADER */}
      <div className="chat-header">
        <img
          src="/assets/profile-tompa.png"
          alt="Tompa Logo"
          className="tompa-logo"
        />
        <span className="tompa-title">TOMPA</span>
      </div>

      {/* CHAT BOX */}
      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.role}`}>
            {msg.content}
          </div>
        ))}
        {isTyping && <div className="typing">Tompa sedang mengetik...</div>}
      </div>

      {/* QUICK REPLIES */}
      <div className="quick-replies">
        {quickReplies.map((text, i) => (
          <button
            key={i}
            onClick={() => setSelectedQuestion(text)}
            disabled={isTyping}
            className={`reply-btn ${selectedQuestion === text ? 'selected' : ''}`}
          >
            {text}
          </button>
        ))}
      </div>
      <div className="chat-input-area">
        <button
          onClick={handleSend}
          className="kirim-btn"
          disabled={isTyping || !selectedQuestion}
        >
          <img src="/assets/button-kirim.png" alt="Kirim" />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
