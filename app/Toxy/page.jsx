"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import TypingAnimation from "../../components/TypingAnimation";

const predefinedAnswers = {
  "who are you?": "I am Toxy, the AI virtual assistant.",
  "how are you?": "I'm just a bunch of code, so I don't have feelings, but I'm here and ready to assist you!",
  "what is your name?": "My name is Toxy, the AI virtual assistant.",
  "what is your purpose?": "I am here to assist you with your queries.",
  "what is your favorite color?": "I don't have a favorite color, but I like all colors!",
  "what is your favorite food?": "I don't eat, but I like all food!",
  "what is your favorite animal?": "I don't have a favorite animal, but I like all animals!",
  "where do you live?": "I live in the cloud but I call West Visayas State University my home.",
  "can you diagnose me?": "I'm sorry, but I can't diagnose you. Please consult a doctor for medical advice.",
  
  // Add more questions and answers as needed
};

const Toxy = () => {
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setChatLog([
      {
        type: "bot",
        message:
          "Hello! I'm Toxy, your friendly AI assistant. How may I help you today?",
      },
    ]);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: inputValue },
    ]);

    sendMessage(inputValue);

    setInputValue("");
  };

  const sendMessage = (message) => {
    // Check if the user's message is in the predefinedAnswers map
    const response = predefinedAnswers[message.trim().toLowerCase()];

    if (response) {
      // Respond with the predefined answer
      setChatLog((prevChatLog) => [
        ...prevChatLog,
        { type: "bot", message: response }
      ]);
      return;
    }

    const url = "https://api.openai.com/v1/chat/completions";

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
    };

    const data = {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are an assistant that answers in short paragraphs of 1-5 sentences." },
        { role: "user", content: message }
      ],
    };
    

    setIsLoading(true);

    axios.post(url, data, { headers: headers }).then((response) => {
      let botResponse = response.data.choices[0].message.content;
      botResponse = limitToSentences(botResponse, 5);
      setChatLog((prevChatLog) => [...prevChatLog, { type: "bot", message: botResponse }]);
      setIsLoading(false);
    }).catch((error) => {
      setIsLoading(false);
      console.log(error);
    });

    function limitToSentences(text, maxSentences) {
      const sentences = text.match(/[^\.!\?]+[\.!\?]+/g) || []; // This regex splits the text into sentences
      return sentences.slice(0, maxSentences).join(' ').trim();
    }
    
    
  };

  return (
    <div className="">
      <div className="mt-10 ml-12">
      <h1 className="font-bold text-4xl">
          Chat with Toxy
        </h1>
        <div className="2xl:max-w-[1200px] mt-4">
        <p className="text-[16px]">
        Welcome to Toxy, your go-to AI chat bot for all things toxicology and poison-related! With a deep expertise in this field, I'm here to provide you with accurate and reliable information. Ask me anything about toxins, poisons, their effects, and more, and I'll be more than happy to assist you. Let's explore the fascinating world of toxicology together!
        </p>
        </div>

      </div>
      <div className="mt-8">
      <div className="container mx-auto">
      <div className="flex flex-col h-screen">
        <div className="flex-grow p-6 max-h-[640px] overflow-y-auto">
          <div className="flex flex-col space-y-4">
            {chatLog.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div className="flex items-center">
                  {message.type !== "user" && (
                    <Image
                      src="/head.png"
                      alt="Toxy"
                      className="mr-2"
                      width={60}
                      height={60}
                    />
                  )}
                  <div
                    className={`${
                      message.type === "user"
                        ? "bg-[#6098aa] text-white"
                        : "bg-[#dccecb] text-black"
                    } rounded-lg p-4 max-w-[600px]`}
                  >
                    {message.message}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div key={chatLog.length} className="flex justify-start">
                <div className="rounded-lg p-4 text-white max-w-sm">
                  <TypingAnimation />
                </div>
              </div>
            )}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex-none p-6">
          <div className="flex">
            <input
              type="text"
              className="rounded-lg flex-auto w-64 border border-gray-700 px-4 py-2 bg-transparent text-black focus:outline-none"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="submit"
              className="bg-[#0067A2] mx-8 rounded-lg px-8 py-2 text-white font-semibold focus:outline-none hover:bg-[#02588a] transition-colors duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
      </div>
    
    </div>
  );
};

export default Toxy;
