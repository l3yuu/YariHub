import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

const quickReplies = [
  'What services do you offer?',
  'How much does a website cost?',
  'I want to start a project',
  'How long does development take?',
];

const botResponses: Record<string, string> = {
  'what services do you offer?':
    "We offer three core services:\n\n🎨 **UI/UX Design** — intuitive, engaging interfaces\n💻 **Web Development** — custom, responsive websites\n⚙️ **System Development** — business process automation\n\nWould you like to know more about any of these?",
  'how much does a website cost?':
    "Our pricing depends on the project scope, but here's a general range:\n\n• Landing Page: ₱8,000–₱15,000\n• Business Website: ₱15,000–₱35,000\n• Web App / System: ₱35,000+\n\nWe'd love to give you a custom quote! Drop your details in our Contact form or tell me more about your project.",
  'i want to start a project':
    "That's awesome! 🚀 Here's how to get started:\n\n1. Tell us about your project idea\n2. We'll schedule a free 30-min discovery call\n3. You'll receive a proposal within 48 hours\n\nYou can fill out our contact form below, or just describe your project here and we'll reach out!",
  'how long does development take?':
    "Typical timelines:\n\n⏱️ Landing Page: 1–2 weeks\n⏱️ Business Website: 2–4 weeks\n⏱️ Web App / System: 4–8+ weeks\n\nTimelines depend on complexity and feedback turnaround. We always set clear milestones!",
};

const getResponse = (input: string): string => {
  const lower = input.toLowerCase().trim();

  for (const [key, response] of Object.entries(botResponses)) {
    if (lower.includes(key) || key.includes(lower)) return response;
  }

  // Keyword matching
  if (lower.includes('price') || lower.includes('cost') || lower.includes('budget'))
    return botResponses['how much does a website cost?'];
  if (lower.includes('service') || lower.includes('offer') || lower.includes('what do you'))
    return botResponses['what services do you offer?'];
  if (lower.includes('start') || lower.includes('project') || lower.includes('hire') || lower.includes('build'))
    return botResponses['i want to start a project'];
  if (lower.includes('time') || lower.includes('long') || lower.includes('deadline') || lower.includes('duration'))
    return botResponses['how long does development take?'];
  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey'))
    return "Hey there! 👋 Welcome to YariHub. How can I help you today? Feel free to ask about our services, pricing, or how to get started!";

  return "Thanks for your message! For detailed inquiries, please use our contact form below or email us at hello@yarihub.tech. I can also answer questions about our services, pricing, and timelines!";
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Hi! 👋 I'm YariBot, your virtual assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getResponse(text);
      const botMsg: Message = {
        id: Date.now() + 1,
        text: response,
        sender: 'bot',
        timestamp: new Date(),
      };
      setIsTyping(false);
      setMessages((prev) => [...prev, botMsg]);
    }, 800 + Math.random() * 700);
  };

  const formatText = (text: string) => {
    return text.split('\n').map((line, i) => {
      const formatted = line
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      return (
        <span key={i}>
          <span dangerouslySetInnerHTML={{ __html: formatted }} />
          {i < text.split('\n').length - 1 && <br />}
        </span>
      );
    });
  };

  return (
    <>
      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-20 right-4 z-50 flex h-[28rem] w-[22rem] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-black/15 sm:bottom-24 sm:right-6 sm:h-[32rem] sm:w-[24rem]"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-gradient-to-r from-[#0E6AF3] to-[#4F46E5] px-4 py-3">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <Bot className="h-5 w-5 text-white" />
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#0E6AF3] bg-emerald-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-white">YariBot</p>
                <p className="text-[10px] text-white/70">Always online • Instant replies</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-7 w-7 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/20 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-slate-50">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div
                    className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${
                      msg.sender === 'bot'
                        ? 'bg-gradient-to-br from-[#0E6AF3] to-[#4F46E5]'
                        : 'bg-slate-700'
                    }`}
                  >
                    {msg.sender === 'bot' ? (
                      <Bot className="h-3.5 w-3.5 text-white" />
                    ) : (
                      <User className="h-3.5 w-3.5 text-white" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] rounded-2xl px-3.5 py-2 text-[13px] leading-relaxed ${
                      msg.sender === 'bot'
                        ? 'rounded-tl-sm bg-white text-slate-700 shadow-sm border border-slate-100'
                        : 'rounded-tr-sm bg-[#0E6AF3] text-white'
                    }`}
                  >
                    {formatText(msg.text)}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2"
                >
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0E6AF3] to-[#4F46E5]">
                    <Bot className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div className="rounded-2xl rounded-tl-sm bg-white px-4 py-3 shadow-sm border border-slate-100">
                    <div className="flex gap-1">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: '0ms' }} />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: '150ms' }} />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 1 && !isTyping && (
              <div className="flex flex-wrap gap-1.5 border-t border-slate-100 bg-white px-3 py-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => sendMessage(reply)}
                    className="rounded-full border border-[#0E6AF3]/20 bg-[#0E6AF3]/5 px-2.5 py-1 text-[11px] font-medium text-[#0E6AF3] transition-all hover:bg-[#0E6AF3]/10 hover:border-[#0E6AF3]/40"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex items-center gap-2 border-t border-slate-200 bg-white px-3 py-2.5"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all focus:border-[#0E6AF3]/40 focus:ring-2 focus:ring-[#0E6AF3]/10"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#0E6AF3] text-white shadow-md shadow-blue-500/25 transition-all hover:bg-[#0D5DD3] disabled:opacity-40 disabled:shadow-none"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="fixed bottom-4 right-4 z-50 flex h-13 w-13 items-center justify-center rounded-full bg-gradient-to-br from-[#0E6AF3] to-[#4F46E5] p-3.5 shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
        aria-label="Open chatbot"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X className="h-6 w-6 text-white" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle className="h-6 w-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
};

export default Chatbot;
