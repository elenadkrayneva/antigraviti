'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Loader2, Sparkles } from 'lucide-react';
import styles from './Chatbot.module.css';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const SUGGESTED_PROMPTS = [
  "How did she optimize the AI Startup marketing?",
  "Analyze her B2B Analytics project results",
  "What is her approach to funnel optimization?",
  "What is her background in Digital Marketing?"
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello! I'm Elena's Career Strategist. I can analyze her performance data, experience frameworks, and project ROI. What analytical challenge or project would you like to explore first?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-chatbot', handleOpen);
    return () => window.removeEventListener('open-chatbot', handleOpen);
  }, []);

  const handleSubmit = async (e?: React.FormEvent, promptOverride?: string) => {
    if (e) e.preventDefault();
    const userMsg = promptOverride || input.trim();
    if (!userMsg || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg, history: messages }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
      } else {
        const errorMsg = data.reply || "I'm having a bit of a quiet moment while I catch up on data insights, but I'm here! What would you like to know about Elena's background?";
        setMessages(prev => [...prev, { role: 'assistant', content: errorMsg }]);
      }
    } catch (err) {
      console.error('Chatbot fetch error:', err);
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm momentarily quiet while I sync up my notes, but I'm always available to help explore Elena's profile! Would you like to check her projects or perhaps her background in analytics?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderMessage = (content: string) => {
    // Simple regex to handle **bold**, ### headers, and - lists for professional formatting
    const lines = content.split('\n');
    return lines.map((line, i) => {
      if (line.trim() === '') return <br key={i} />;
      
      let processed = line
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/### (.*)/g, '<h4 style="margin: 0.8rem 0 0.4rem; color: #2563eb; font-size: 1.1rem; font-weight: 700;">$1</h4>')
        .replace(/^- (.*)/g, '<li style="margin-left: 1.25rem; margin-bottom: 0.25rem; list-style-type: disc;">$1</li>');
      
      return <div key={i} className={styles.messageLine} dangerouslySetInnerHTML={{ __html: processed }} />;
    });
  };

  return (
    <>
      <button 
        className={styles.toggleButton} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Ask AI About Me"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="x" className={styles.toggleIconWrap} initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div key="chat" className={styles.toggleIconWrap} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
              <Sparkles size={28} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={styles.chatContainer}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
          >
            <div className={styles.chatHeader}>
              <div className={styles.botInfo}>
                <div className={styles.botAvatar}>
                  <Sparkles size={20} />
                </div>
                <div className={styles.botName}>
                  <h3>Elena&apos;s AI Assistant</h3>
                  <div className={styles.botStatus}>
                    <div className={styles.statusDot} />
                    Ready to analyze
                  </div>
                </div>
              </div>
              <button 
                className={styles.closeBtn} 
                onClick={() => setIsOpen(false)}
                aria-label="Close Chat"
              >
                <X size={18} />
              </button>
            </div>

            <div className={styles.messagesArea}>
              {messages.map((msg, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx === messages.length - 1 ? 0.1 : 0 }}
                  className={`${styles.messageWrapper} ${msg.role === 'user' ? styles.userWrapper : styles.aiWrapper}`}
                >
                  <div className={`${styles.message} ${msg.role === 'user' ? styles.userMessage : styles.aiMessage}`}>
                    {msg.role === 'assistant' ? renderMessage(msg.content) : msg.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`${styles.messageWrapper} ${styles.aiWrapper}`}
                >
                  <div className={`${styles.message} ${styles.aiMessage} ${styles.loading}`}>
                    <div className={styles.typingDots}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    Analyzing data...
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className={styles.inputSection}>
              {messages.length < 5 && !isLoading && (
                <div className={styles.suggestedPrompts}>
                  {SUGGESTED_PROMPTS.map((prompt, i) => (
                    <button 
                      key={i} 
                      className={styles.promptBtn}
                      onClick={() => handleSubmit(undefined, prompt)}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}
              
              <form onSubmit={e => handleSubmit(e)} className={styles.inputArea}>
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a strategic question..."
                  className={styles.input}
                  disabled={isLoading}
                />
                <button 
                  type="submit" 
                  className={styles.sendButton}
                  disabled={!input.trim() || isLoading}
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
