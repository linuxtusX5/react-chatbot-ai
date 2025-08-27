export interface QuickReply {
  text: string;
  response: string;
}

export const quickReplies: QuickReply[] = [
  {
    text: "Tell me a joke",
    response:
      "Why don't scientists trust atoms? Because they make up everything! 😄",
  },
  {
    text: "What's the weather like?",
    response:
      "I don't have access to real-time weather data, but I hope it's beautiful where you are! ☀️",
  },
  {
    text: "How are you?",
    response:
      "I'm doing great, thank you for asking! I'm always excited to help and chat with users like you. How are you doing today? 😊",
  },
  {
    text: "Tell me something interesting",
    response:
      "Did you know that octopuses have three hearts and blue blood? Two hearts pump blood to the gills, while the third pumps blood to the rest of the body! 🐙",
  },
];
