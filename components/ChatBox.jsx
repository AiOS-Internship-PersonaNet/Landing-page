"use client";
import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

export default function ChatBox({ onClose }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isSending, setIsSending] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  const [users, setUsers] = useState([]);
  const [userMap, setUserMap] = useState({});
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Fetch the list of users on component mount
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/list`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        // Create a mapping of username to _id
        const mapping = {};
        data.forEach((user) => {
          mapping[user.username] = user._id;
        });
        setUserMap(mapping);
        setUsers(data);
        if (data.length > 0) {
          setSelectedUser(data[0].username);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    // Clear chat messages on username change
    setMessages([]);
    // Call endChat API
    (async () => {
      try {
        console.log("Calling endChat API due to user switch.");
        await fetch("http://localhost:4000/api/personaChat/endChat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        console.error("Error ending chat:", error);
      }
    })();
  }, [selectedUser]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = input;
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInput("");
    setIsSending(true);

    try {
      const targetUserId = userMap[selectedUser];
      if (!targetUserId) {
        throw new Error("Selected user ID not found");
      }

      const response = await fetch("http://localhost:4000/api/personaChat/publicchat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
     },
        body: JSON.stringify({
          message: userMessage,
          targetUser: targetUserId,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data);

      if (data && data.response) {
        const cleanedResponse = data.response.replace(/,/g, '');
        setMessages((prev) => [...prev, { sender: "bot", text: cleanedResponse }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "No valid response from the bot." },
        ]);
      }
      
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: `Error: ${error.message}` },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose} />
      <div className="relative bg-white/20 backdrop-blur-sm rounded-lg shadow-lg p-4 max-w-3xl w-full z-10 border border-white/30">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-100 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2 text-white">Chat</h2>
          {/* Dropdown for selecting a user */}
          <div className="mb-4">
            <label htmlFor="userSelect" className="text-white mr-2">
              Select Persona:
            </label>
            <select
              id="userSelect"
              value={selectedUser}
              onChange={handleUserChange}
              className="p-2 rounded border border-white/30 text-white appearance-none bg-black/70"
            >
              {users.map((user) => (
                <option key={user._id} value={user.username}>
                  {user.username}
                </option>
              ))}
            </select>
          </div>
          <div className="h-64 overflow-y-auto border border-white/30 p-2 mb-4 rounded bg-gradient-to-r from-gray-800 via-black to-gray-800">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded ${
                    msg.sender === "bot"
                      ? "bg-black/70"
                      : "bg-black/70 self-end text-right"
                  }`}
                >
                  <p className="text-white">
                    {msg.sender === "bot" ? "Bot: " : "User: "}
                    {msg.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border border-white/30 rounded-l p-2 bg-transparent text-white focus:outline-none"
              placeholder="Type your message..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
            />
            <button
              onClick={handleSend}
              disabled={isSending}
              className="bg-teal-500 hover:bg-teal-600 text-white rounded-r p-2"
            >
              {isSending ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      </div>
      {/* Custom CSS to style the select and options */}
      <style jsx>{`
        select {
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 0.375rem;
          appearance: none;
        }
        select option {
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
        }
      `}</style>
    </div>
  );
}
