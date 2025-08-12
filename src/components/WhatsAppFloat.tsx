import { SITE } from "../config";

export default function WhatsAppFloat() {
  return (
    <a
      href={SITE.whatsappUrl}
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
      style={{ backgroundColor: "#25D366" }}
    >
      <span className="text-2xl">💬</span>
    </a>
  );
}
