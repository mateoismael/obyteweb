export const SITE = {
  url: "https://ohanabyte.com.pe",
  phone: "", // TODO: +51 999 999 999
  emailVentas: "gproyectos@ohanabyte.com.pe",
  emailGerencia: "gerencia@ohanabyte.com.pe",
  whatsappNumber: "", // TODO: add number, e.g., +51999999999
  // Toggle sections
  showPartners: false, // oculta la franja de "partners" por defecto
  socials: {
    linkedin: "",
    facebook: "",
    youtube: "",
    instagram: "",
  },
  get whatsappUrl() {
    return this.whatsappNumber
      ? `https://wa.me/${this.whatsappNumber.replace(/[^\d]/g, "")}`
      : "#";
  },
  get telUrl() {
    return this.phone ? `tel:${this.phone.replace(/\s+/g, "")}` : "#";
  },
};
