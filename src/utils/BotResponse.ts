export const getBotResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();

  if (
    message.includes("hello") ||
    message.includes("hi") ||
    message.includes("hey")
  ) {
    return "Hello there! It's great to meet you. What would you like to talk about today? 👋";
  }

  if (message.includes("help")) {
    return "I'm here to help! You can ask me questions, request jokes, or just have a friendly conversation. What do you need assistance with?";
  }

  if (message.includes("name")) {
    return "You can call me ChatBot! I'm your friendly AI assistant. What's your name?";
  }

  if (message.includes("time") || message.includes("date")) {
    const now = new Date();
    return `The current time is ${now.toLocaleTimeString()} and today's date is ${now.toLocaleDateString()}. ⏰`;
  }

  if (message.includes("thank") || message.includes("thanks")) {
    return "You're very welcome! I'm happy I could help. Is there anything else you'd like to know? 😊";
  }

  if (message.includes("bye") || message.includes("goodbye")) {
    return "Goodbye! It was wonderful chatting with you. Feel free to come back anytime you want to talk! 👋";
  }

  if (message.includes("love") || message.includes("like")) {
    return "That's wonderful! I love when people share their interests and passions. Tell me more about what you enjoy! ❤️";
  }

  // Default responses
  const responses = [
    "That's interesting! Can you tell me more about that?",
    "I appreciate you sharing that with me. What else is on your mind?",
    "Thanks for letting me know! Is there anything specific you'd like help with?",
    "I find that fascinating! What made you think about that?",
    "That's a great point! I'd love to hear more of your thoughts on this.",
  ];

  return responses[Math.floor(Math.random() * responses.length)];
};
