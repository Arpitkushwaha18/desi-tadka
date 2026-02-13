import whatsappIcon from "../assets/images/whatsapp icon.png";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919956785112"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 bg-gradient-to-br from-emerald-400 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 active:scale-95 text-white px-4 py-4 sm:px-5 sm:py-4 rounded-full shadow-xl hover:shadow-2xl flex items-center gap-2 transition-all duration-300 font-bold text-sm sm:text-base"
      style={{
        boxShadow: "0 10px 30px rgba(16, 185, 129, 0.3)",
      }}
      aria-label="Chat with us on WhatsApp"
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
      />
      <span className="hidden sm:inline">Chat</span>
    </a>
  );
}
