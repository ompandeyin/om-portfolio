import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi';
import { CHATBOT_RESPONSES } from '../data/constants';

function getResponse(input) {
  const q = input.toLowerCase().trim();

  if (/^(hi|hey|hello|sup|yo|greet)/.test(q)) {
    return CHATBOT_RESPONSES.greetings[0];
  }
  if (/about|who is|tell me about|om pandey|background|bio/.test(q)) {
    return CHATBOT_RESPONSES.about[0];
  }
  if (/project|work|built|portfolio|show/.test(q)) {
    return CHATBOT_RESPONSES.projects[0];
  }
  if (/skill|tech|stack|language|tool|framework/.test(q)) {
    return CHATBOT_RESPONSES.skills[0];
  }
  if (/experience|job|role|company|worldquant|apna/.test(q)) {
    return CHATBOT_RESPONSES.experience[0];
  }
  if (/contact|email|reach|connect|hire/.test(q)) {
    return CHATBOT_RESPONSES.contact[0];
  }

  return CHATBOT_RESPONSES.fallback[Math.floor(Math.random() * CHATBOT_RESPONSES.fallback.length)];
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: CHATBOT_RESPONSES.greetings[0] },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const messagesEnd = useRef(null);

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const send = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { role: 'user', text: trimmed }]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const reply = getResponse(trimmed);
      setMessages((prev) => [...prev, { role: 'bot', text: reply }]);
      setTyping(false);
    }, 800 + Math.random() * 600);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      <motion.button
        className="chatbot-toggle"
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Toggle chatbot"
      >
        {open ? <FiX /> : <FiMessageCircle />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="chatbot-window glass-strong"
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="chatbot-header">
              <div className="chatbot-header-dot" />
              <h4>Om's AI Assistant</h4>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`chat-msg ${msg.role}`}>
                  {msg.text}
                </div>
              ))}
              {typing && (
                <div className="chat-typing">
                  <span /><span /><span />
                </div>
              )}
              <div ref={messagesEnd} />
            </div>

            <div className="chatbot-input-area">
              <input
                className="chatbot-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask about Om..."
                id="chatbot-input"
              />
              <button className="chatbot-send" onClick={send} aria-label="Send message">
                <FiSend />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
