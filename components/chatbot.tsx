'use client';

import { useState, useRef, useEffect } from 'react';
import { useRevealOnScroll } from '@/hooks/use-reveal-on-scroll';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Hi! I'm MarzBot. How can I help you today?",
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');

        // Simulate bot response
        setTimeout(() => {
            const botResponse = getBotResponse(inputValue);
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: botResponse,
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMessage]);
        }, 1000);
    };

    const getBotResponse = (input: string) => {
        const lowercaseInput = input.toLowerCase();
        if (lowercaseInput.includes('service') || lowercaseInput.includes('offer')) {
            return "Marzstack offers Product Management, UI/UX Design, and Fullstack Development services. Would you like to see the skills section?";
        } else if (lowercaseInput.includes('contact') || lowercaseInput.includes('hire')) {
            return "You can reach me via the contact form at the bottom of the page or email me at hello@marzstack.com.";
        } else if (lowercaseInput.includes('project')) {
            return "I've worked on some epic projects like Real Connect and PayRide. You can check them out in the 'Featured Projects' section!";
        } else if (lowercaseInput.includes('hi') || lowercaseInput.includes('hello')) {
            return "Hello! Hope you're having a great day. Feel free to ask me anything about Abdulrazak's work.";
        } else {
            return "That's interesting! I'm here to help you learn more about Abdulrazak's portfolio. Try asking about his projects or services.";
        }
    };

    return (
        <div className="fixed bottom-12 right-6 z-50">
            {/* Bot Window */}
            {isOpen && (
                <div className="absolute bottom-20 right-0 w-60 md:w-80 glass-card rounded-[2.5rem] border border-border/50 shadow-2xl overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300 flex flex-col max-h-[70vh] md:max-h-[80vh]">
                    {/* Header */}
                    <div className="bg-primary p-6 flex justify-between items-center text-primary-foreground shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-medium text-lg">MarzBot</h4>
                                <p className="text-xs">AI Assistant</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:opacity-70 transition-opacity">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide min-h-[250px]">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-4 rounded-2xl ${msg.sender === 'user'
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-secondary/30 text-foreground border border-border/50'
                                    }`}>
                                    <p className="text-sm font-medium leading-relaxed">{msg.text}</p>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-4 border-t border-border/50 bg-background/50">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                placeholder="Type a message..."
                                className="flex-1 bg-secondary/30 border border-border/50 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                            <button
                                onClick={handleSendMessage}
                                className="bg-primary text-primary-foreground p-2 rounded-xl hover:scale-105 active:scale-95 transition-all"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all animate-bounce-slow"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            </button>
        </div>
    );
}
