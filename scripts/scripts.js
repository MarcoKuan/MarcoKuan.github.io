// Javascript that will load items for my webpage

window.addEventListener("DOMContentLoaded", () => {
  createContacts();
});

/**
 * Creates the HTML tags for the Contact information
 */
function createContacts() {
  // Access the contact-info tag
  const contactObj = document.getElementById("contact-info");

  // Add the contact details to the contact tag
  let linkedinObj = new Contacts("../images/LinkedIn.png",
    "https://www.linkedin.com/in/marco-kuan-211079148", "LinkedIn");

  let gitObj = new Contacts("../images/github.png",
    "https://github.com/MarcoKuan", "Github");

  let mailObj = new Contacts("../images/Gmail.png",
    "mailto:kuan.n.marco@gmail.com", "Gmail");

  // Store the objects that will be created on the html block (contact-info)
  contactObj.appendChild(linkedinObj);
  contactObj.appendChild(gitObj);
  contactObj.appendChild(mailObj);
}