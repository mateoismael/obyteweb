export const SITE = {
  url: "https://ohanabyte.com.pe",
  whatsappNumber: "", // TODO: add number, e.g., +51999999999
  get whatsappUrl() {
    return this.whatsappNumber
      ? `https://wa.me/${this.whatsappNumber.replace(/[^\d]/g, "")}`
      : "#";
  },
};
