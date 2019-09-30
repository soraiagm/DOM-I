const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

////////////////NAVIGATION//////////////////////
const nav = document.querySelectorAll("a");
// console.log(nav);
const navigation = Object.values(siteContent.nav);

nav.forEach((e, i) => {
  e.textContent = navigation[i];
});

////navImage////
const navImage = document.getElementById("logo-img");
// console.log(navImage);
navImage.src = siteContent["nav"]["img-src"]
navImage.alt = "Image of nav logo"


////////////////APPEND & PREPEND////////////////
////create new nav anchor to append////
const newNav = document.createElement("a");
// console.log(newNav);
////added content to new element////
newNav.textContent = "Sign Up";
////appendToNav////
const newNavAppend = document.querySelector("nav");
// console.log(newNavAppend); 
newNavAppend.append(newNav);

////creat new nav anchor to prepend////
const otherNewNav = document.createElement("a");
console.log(otherNewNav);
////added content to new element////
otherNewNav.textContent = "Login";
////prepend to Nav////
const newNavPrepend = document.querySelector("nav");
newNavPrepend.prepend(otherNewNav);
////////////////////////////////////////////////////

////////////////////textGreen/////////////////////
const textGreen = document.querySelectorAll("nav a");
// console.log(textGreen);
textGreen.forEach(element => {
  // console.log(element);
  element.style.color = "Green";
});




////////////////CTA///////////////////////////
const ctaText = document.querySelector(".cta .cta-text h1")
// console.log(ctaText);
ctaText.textContent = siteContent["cta"]["h1"]

const ctaButton = document.querySelector(".cta .cta-text button")
// console.log(ctaButton);
ctaButton.textContent = siteContent["cta"]["button"]

////ctaImage////
const ctaImage = document.getElementById("cta-img");
// console.log(ctaImage);
ctaImage.src = siteContent["cta"]["img-src"]
ctaImage.alt = "Image of a code snippet"



////////////////MAIN-CONTENT///////////////////
const mainContentHeader = document.querySelectorAll(".main-content .text-content h4");
// console.log(mainContentTop);
mainContentHeader[0].textContent = siteContent["main-content"]["features-h4"]
mainContentHeader[1].textContent = siteContent["main-content"]["about-h4"]
mainContentHeader[2].textContent = siteContent["main-content"]["services-h4"]
mainContentHeader[3].textContent = siteContent["main-content"]["product-h4"]

const mainContentPara = document.querySelectorAll(".main-content .text-content p")
mainContentPara[0].textContent = siteContent["main-content"]["features-content"]
mainContentPara[1].textContent = siteContent["main-content"]["about-content"]
mainContentPara[2].textContent = siteContent["main-content"]["services-content"]
mainContentPara[3].textContent = siteContent["main-content"]["vision-content"]

////mainImage////
const mainImage = document.getElementById("middle-img");
// console.log(mainImage);
mainImage.src = siteContent["main-content"]["middle-img-src"]
mainImage.alt = "Image of code snippets across the screen"




/////////////////CONTACT///////////////////////
const contactName = document.querySelector(".contact h4");
// console.log(contactName);
contactName.textContent = siteContent["contact"]["contact-h4"];

const contactPara = document.querySelectorAll(".contact p");
// console.log(contactPara);
contactPara[0].textContent = siteContent["contact"]["address"]
contactPara[1].textContent = siteContent["contact"]["phone"]
contactPara[2].textContent = siteContent["contact"]["email"]




//////////////////FOOTER////////////////////////
const footer = document.querySelector("footer p");
// console.log(footer);
footer.textContent = siteContent["footer"]["copyright"]


