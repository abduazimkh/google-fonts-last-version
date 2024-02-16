export const fontsLoader = (fontName: string) => {
  let link = document.createElement('link');
  let url = `https://fonts.googleapis.com/css?family=${fontName}`;
  url.replace("regular", "400");
  link.href = url;
  link.rel = "stylesheet";
  link.type = "text/css";
  document.head.appendChild(link);
}