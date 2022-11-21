
// -------------- DROPDOWN

document.addEventListener("click", e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]") // boolean
  //if clicked element has data-dropdown-button property and is a child of element w/ data-dropdown property, then do nothing
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

  let currentDropdown
  if (isDropdownButton) {
    //sets parent element w/ data-dropdown property to active
    //also keeps track of currentDropdown for deactivator
    currentDropdown = e.target.closest("[data-dropdown]")
    currentDropdown.classList.toggle("active")
  }
  //selects all data-dropdown elements, deactivates all that isnt currentDropdown
  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove("active")
  })
})

// ------------- BACK TO TOP BUTTON

const divideHeightBy = 10; // value to divide docHeight by for offset

let btt = document.getElementById('back-to-top'), // button
    body = document.body, // to get scrollHeight, offsetHeight values
    docElem = document.documentElement, // to get clientHeight, scrollHeight, offsetHeight values 
    offset = 100, // default value
    scrollPos, docHeight;

// calculate document height
docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight); // Math.max is used because different browsers calculate height differently
if (docHeight != 'undefined' && docHeight != null) {
  offset = docHeight / divideHeightBy; // sets the scroll threshold
}

// add scroll event listener
window.addEventListener('scroll', function(e) {
  scrollPos = body.scrollTop || docElem.scrollTop; // cross browser, some uses body, some uses docElem
  btt.className = (scrollPos > offset) ? "visible" : ""; // if current position is lower than threshold, give button "visible" class. else remove "visible" class
})