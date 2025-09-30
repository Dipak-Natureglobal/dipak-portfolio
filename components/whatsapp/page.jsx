"use client"
import { useState } from "react"

import { MessageSquare, X, Mail, ArrowRight, MessageCircleMore, Inbox, MessageSquareText } from "lucide-react"
import Image from "next/image"

const EnhancedContactButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isWhatsAppChatOpen, setIsWhatsAppChatOpen] = useState(false)
  const [message, setMessage] = useState("")

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen)
    if (isWhatsAppChatOpen) {
      setIsWhatsAppChatOpen(false)
    }
  }

  const openGmail = () => {
    const email = "dipakmourya1508@gmail.com"
    const subject = encodeURIComponent("Work Inquiry")
    const body = encodeURIComponent("Hi there, I have some work for you!")
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_blank")
    setIsPopupOpen(false)
  }

  const openWhatsAppChat = () => {
    setIsWhatsAppChatOpen(true)
    setIsPopupOpen(false)
  }

  const sendWhatsAppMessage = () => {
    if (message.trim()) {
      const phoneNumber = "+918910171611"
      const encodedMessage = encodeURIComponent(message)
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
      setIsWhatsAppChatOpen(false)
      setMessage("")
    }
  }

  const closeWhatsAppChat = () => {
    setIsWhatsAppChatOpen(false)
    setMessage("")
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendWhatsAppMessage();
    }
  };

  return (
    <>
      <div className="fixed  bottom-4 right-4 sm:bottom-6 sm:right-6  z-50"  >
        <button
          onClick={togglePopup}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] w-16 h-16 rounded-full bg-gradient-to-r from-[#2eb329] to-[#6df7ee] 
             dark:from-[#ADFF2F] dark:to-[#22c55e]   hover:opacity-90  text-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
        >
          {isPopupOpen ? (
            <X
              size={24}
              className="transition-transform duration-300 ease-in-out rotate-0 group-hover:rotate-90"
            />
          ) : (
            <MessageCircleMore
              size={38}
              className="transition-opacity duration-300 ease-in-out opacity-100"
            />
          )}
        </button>

        {/* Animated Popup Options */}
        {isPopupOpen && (
          <div
            className={`absolute bottom-14 sm:bottom-16 right-0 bg-white dark:bg-[#36363c] rounded-lg shadow-xl p-3 sm:p-4 min-w-[180px] sm:min-w-[200px] transform transition-all duration-500 ease-out ${isPopupOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
              }`}
            style={{
              animation: isPopupOpen ? "slideInUp 0.5s ease-out" : "slideOutDown 0.3s ease-in",
            }}
          >
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-3">Get in touch</h3>

            <div className="space-y-2">
              {/* Gmail Option */}
              <button
                onClick={openGmail}
                className="w-full flex items-center space-x-3 p-2 sm:p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-primary transition-all duration-300 transform hover:scale-105"
                style={{
                  animation: isPopupOpen ? "fadeInLeft 0.6s ease-out 0.1s both" : "",
                }}
              >
                <div className="p-1.5 sm:p-2 bg-red-100 dark:bg-red-900 rounded-full">
                  <Mail size={14} className="sm:w-4 sm:h-4 text-red-600 dark:text-red-400" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-medium text-gray-800 dark:text-white">Email</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Send an email</div>
                </div>
              </button>

              {/* WhatsApp Option */}
              <button
                onClick={openWhatsAppChat}
                className="w-full flex items-center space-x-3 p-2 sm:p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-primary transition-all duration-300 transform hover:scale-105"
                style={{
                  animation: isPopupOpen ? "fadeInLeft 0.6s ease-out 0.2s both" : "",
                }}
              >
                <div className="p-1.5 sm:p-2 bg-green-100 dark:bg-green-900 rounded-full">
                  <MessageSquare size={14} className="sm:w-4 sm:h-4 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-medium text-gray-800 dark:text-white ">WhatsApp</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Start a chat</div>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* WhatsApp Chat Interface */}
      {isWhatsAppChatOpen && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center p-2 sm:p-4 bg-black bg-opacity-50 transition-opacity duration-300"
          style={{
            animation: isWhatsAppChatOpen ? "fadeIn 0.3s ease-out" : "",
          }}
          onClick={closeWhatsAppChat} // Add this line to close on backdrop click
        >
          <div
            className="bg-white w-full max-w-sm sm:max-w-md h-[90vh] sm:h-[600px] flex flex-col shadow-2xl rounded-lg sm:rounded-xl overflow-hidden transform transition-all duration-500 ease-out"
            style={{
              animation: isWhatsAppChatOpen ? "zoomIn 0.5s ease-out" : "",
            }}
            onClick={(e) => e.stopPropagation()} // Add this line to prevent closing when clicking inside the chat
          >
            {/* WhatsApp Header */}
            <div className="bg-[#075E54] text-white p-3 sm:p-4 flex items-center space-x-3">


              {/* Profile Section */}
              <div className="flex items-center space-x-2 sm:space-x-3 flex-1">
                {/* Avatar */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full relative overflow-hidden">
                  <Image
                    src="/assets/profile/profile.png"
                    alt="Dipak Mourya"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 40px, 48px"
                    priority
                  />
                </div>


                {/* Name and Status */}
                <div className="flex-1">
                  <h3 className="font-medium text-white text-sm sm:text-base">Dipak Mourya</h3>
                  <p className="text-xs text-green-200 flex items-center">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full mr-1"></span>
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={closeWhatsAppChat}
                className="p-1 hover:bg-white hover:bg-opacity-20 rounded-full transition-all duration-200 transform hover:scale-110"
              >
                <X size={18} className="sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Chat Background */}
            <div
              className="flex-1 p-3 sm:p-4 overflow-y-auto"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23e5ddd5' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundColor: "#e5ddd5",
              }}
            >
              {/* Welcome Message from Dipak */}
              <div
                className="flex justify-start flex-col mb-4 my-2 space-y-2"
                style={{
                  animation: isWhatsAppChatOpen ? "slideInLeft 0.6s ease-out 0.3s both" : "",
                }}
              >
                <div className="bg-white rounded-lg rounded-tl-none p-2 sm:p-3 max-w-[85%] sm:max-w-[80%] shadow-sm">
                  <p className="text-gray-800 text-xs">Hi! How can I help you? 😄</p>
                  <div className="text-xs text-gray-500 mt-0 text-right">
                    {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </div>
                </div>
                <div className="bg-white rounded-lg rounded-tl-none p-2 sm:p-3 max-w-[90%] sm:max-w-[85%] shadow-sm">
                  <p className="text-gray-800 text-xs">I&#39;m open to freelance opportunities, technical consultations, and collaborations.
                  </p>

                  <div className="text-xs text-gray-500 mt-1 text-right">
                    {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </div>
                </div>
              </div>
            </div>

            {/* Unified Message Input Area */}
            <div className="bg-[#f0f0f0] p-2 sm:p-3">
              <div className="bg-white rounded-full flex items-center shadow-sm border border-gray-200">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message"
                  className="flex-1 outline-none text-sm bg-transparent px-4 py-3 rounded-l-full text-primary"
                />

                {/* Integrated Send Button */}
                <button
                  onClick={sendWhatsAppMessage}
                  disabled={!message.trim()}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 transform mr-1 ${message.trim()
                    ? "bg-[#25D366] hover:bg-[#20b358] text-white shadow-md hover:scale-105"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                >
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideOutDown {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}

export default EnhancedContactButton
