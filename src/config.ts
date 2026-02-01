export const SITE = {
  url: "https://ohanabyte.com.pe",
  phone: "", // TODO: +51 999 999 999
  emailVentas: "gproyectos@ohanabyte.com.pe",
  emailGerencia: "gerencia@ohanabyte.com.pe",
  whatsappNumber: "+51960560901",
  // Toggle sections
  showPartners: false, // oculta la franja de "partners" por defecto
  socials: {
    linkedin: "",
    facebook: "",
    youtube: "",
    instagram: "",
  },
  whatsappMessage: "Hola, vengo desde la web de Ohanabyte y me interesa conocer más sobre sus servicios de TI.",
  get whatsappUrl() {
    if (!this.whatsappNumber) return "#";
    const phone = this.whatsappNumber.replace(/[^\d]/g, "");
    const message = encodeURIComponent(this.whatsappMessage);
    return `https://wa.me/${phone}?text=${message}`;
  },
  get telUrl() {
    return this.phone ? `tel:${this.phone.replace(/\s+/g, "")}` : "#";
  },
};
