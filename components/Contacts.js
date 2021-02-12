class Contacts extends HTMLElement {
  constructor(img, link, website) {
    super();

    // Create the shadow root
    const shadRoot = this.attachShadow({ mode: "open" });

    // Create div object that stores each contact info
    const divObj = document.createElement("div");

    // Create the Link
    const linkObj = document.createElement("a");
    linkObj.setAttribute("href", link);
    linkObj.innerHTML = website;

    // Create the break
    const breakObj = document.createElement("br");

    // Create the image
    const imgObj = document.createElement("img");
    imgObj.setAttribute("src", img);
    imgObj.setAttribute("id", "contactImg");

    // New line the image and text
    // Make the link connect to the picture
    linkObj.appendChild(breakObj);
    linkObj.appendChild(imgObj);

    // Create the CSS style
    const cssObj = document.createElement("link");
    cssObj.setAttribute("rel", "stylesheet");
    cssObj.setAttribute("href", "../styles/style.css");

    // Append the objects into the div object
    divObj.appendChild(cssObj);
    divObj.appendChild(linkObj);

    // Push the div object into the shadow root
    shadRoot.appendChild(divObj);
  }
}

customElements.define("contact-info", Contacts);