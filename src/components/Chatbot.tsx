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
  "What is your approach to data-driven growth?",
  "Tell me about the AI startup project",
  "How do you handle marketing performance analysis?",
  "In which tools are you most proficient?"
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello! I'm Elena's Strategy Bot. I can analyze her performance data, experience, and project frameworks. What would you like to explore first?" }
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
        setMessages(prev => [...prev, { role: 'assistant', content: "I'm currently offline for maintenance. Please check back later!" }]);
      }
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: "An error occurred while processing your request." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        className={styles.toggleButton} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Strategy Bot"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="x" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
              <Sparkles size={28} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={`glass-panel ${styles.chatContainer}`}
            initial={{ opacity: 0, y: 30, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, y: 30, scale: 0.9, x: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className={styles.chatHeader}>
              <div className={styles.avatar}>EK</div>
              <div className={styles.headerInfo}>
                <h3 className={styles.chatTitle}>Strategy Bot</h3>
                <div className={styles.statusRow}>
                  <span className={styles.statusDot}></span>
                  <p className={styles.chatStatus}>Expert in Elena's Data & Insights</p>
                </div>
              </div>
            </div>

            <div className={styles.messagesArea}>
              {messages.map((msg, idx) => (
                <div key={idx} className={`${styles.messageWrapper} ${msg.role === 'user' ? styles.userWrapper : styles.aiWrapper}`}>
                  <div className={`${styles.message} ${msg.role === 'user' ? styles.userMessage : styles.aiMessage}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className={`${styles.messageWrapper} ${styles.aiWrapper}`}>
                  <div className={`${styles.message} ${styles.aiMessage} ${styles.loading}`}>
                    <Loader2 size={16} className={styles.spinner} /> Analyzing...
                  </div>
                </div>
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
