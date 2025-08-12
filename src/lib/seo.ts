export function setSEO({
  title,
  description,
  canonical,
}: {
  title?: string;
  description?: string;
  canonical?: string;
}) {
  if (title) document.title = title;
  if (description) setOrCreateMeta("description", description);
  if (canonical) setOrCreateLink("canonical", canonical);
}

function setOrCreateMeta(name: string, content: string) {
  let el = document.querySelector(
    `meta[name="${name}"]`
  ) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setOrCreateLink(rel: string, href: string) {
  let el = document.querySelector(
    `link[rel="${rel}"]`
  ) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}
