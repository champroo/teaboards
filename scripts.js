let currentBoard = null;
let cardContainer;
let templateCard;
const boardSpecs = ["brand", "model", "layout", "case", "weight", "mount", "plate", "description", "images"];
const switchSpecs = ["switchName", "switchType", "actuationForce"];
const keycapSpecs = ["keycapManu", "keycapName"];

// This calls the showCards() function and maintains a template card when the page is first loaded
document.addEventListener("DOMContentLoaded", function() {
  cardContainer = document.getElementById("card-container");
  templateCard = document.querySelector(".card");
  showCards();
});

// This function creates cards from the object array and adds to container
function showCards() 
{
  cardContainer.innerHTML = "";

  for (let i = 0; i < keyboards.length; i++) {
    let board = keyboards[i];

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, board, i+1); // Edit card data
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

// this function displays the name and array of images of each object in the array
// a main image is displayed along with thumbnails of other images that can be viewed
function editCardContent(card, board, entryNum) 
{
  card.style.display = "block";
  card.addEventListener("click", function() {
    openDetail(board);
  });

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = entryNum + ". " + board.brand + " " + board.model;

  if (board.images)
  {
    const mainImage = card.querySelector(".main-image");
    mainImage.src = board.images[0];
    mainImage.alt = board.brand + " " + board.model;

    const thumbnailContainer = card.querySelector(".thumbnails");
    thumbnailContainer.innerHTML = "";

    // iterate through our array of images and create an image element
    // when image is clicked, display it as the main image
    for (let i = 0; i < board.images.length; i++)
    {
      const thumb = document.createElement("img");
      thumb.src = board.images[i];
      thumb.className = "thumbnail";

      thumb.addEventListener("click", function() {
        mainImage.src = board.images[i];
        openDetail(board);
    });

    thumbnailContainer.appendChild(thumb);
    }
  }
}

// this function opens a detail panel when a card is clicked
// accesses array of objects to display keyboard details in table
function openDetail(board) 
{
  currentBoard = board;
  const panel = document.getElementById("detail-panel");

  document.getElementById("detail-board").textContent = board.brand + " " + board.model;   

  const boardSpecs = document.getElementById("board-specs");  
  boardSpecs.innerHTML = 
  `
    <li><span class="spec-label">Layout: </span><span class="spec-value">${board.layout}</span></li>
    <li><span class="spec-label">Case: </span><span class="spec-value">${board.case}</span></li>
    <li><span class="spec-label">Weight: </span><span class="spec-value">${board.weight}</span></li>
    <li><span class="spec-label">Mount: </span><span class="spec-value">${board.mount}</span></li>
    <li><span class="spec-label">Plate: </span><span class="spec-value">${board.plate}</span></li>
    <li><span class="spec-label">Description: </span><span class="spec-value">${board.description}</span></li>
  `
  const switchSpecs = document.getElementById("switch-specs");
  switchSpecs.innerHTML = 
  `
    <li><span class="spec-label">Name: </span><span class="spec-value">${board.switches.switchName}</span></li>
    <li><span class="spec-label">Type: </span><span class="spec-value">${board.switches.switchType}</span></li>
    <li><span class="spec-label">Actuation force: </span><span class="spec-value">${board.switches.actuationForce}</span></li>
  `
  const keycapSpecs = document.getElementById("keycap-specs");
  keycapSpecs.innerHTML = 
  `
    <li><span class="spec-label">Manufacturer: </span><span class="spec-value">${board.keycap.keycapManu}</span></li>
    <li><span class="spec-label">Name: </span><span class="spec-value">${board.keycap.keycapName}</span></li>
  `

  panel.style.display = "block";
}

// this function closes our windows
function closeDetail(modalId) 
{
  document.getElementById(modalId).style.display = "none";
}

// this function opens a modal for editing and prefills the fields with existing data
function openModal(modalId)
{
  console.log("openModal called, currentBoard is:", currentBoard, "modal id =", modalId);
  const modal = document.getElementById(modalId);
  console.log("modal element: ", modal);

  if (modalId == "edit-modal-board")
  {
    for (let i = 0; i < boardSpecs.length; ++i)
    {
      document.getElementById("edit-" + boardSpecs[i]).value = currentBoard[boardSpecs[i]];
    }
  }
  else if (modalId == "edit-modal-switches")
  {
    for (let i = 0; i < switchSpecs.length; ++i)
    {
      document.getElementById("edit-" + switchSpecs[i]).value = currentBoard.switches[switchSpecs[i]];
    }
  }
  else if (modalId == "edit-modal-keycaps")
  {
    for (let i = 0; i < keycapSpecs.length; ++i)
    {
      document.getElementById("edit-" + keycapSpecs[i]).value = currentBoard.keycap[keycapSpecs[i]];
    }
  }

  modal.style.display = "flex";
}

// this function checks which object (keyboard, switches, or keycaps) we're adding data to,
// then populates those fields with data input from the form
function populateFields(board, modalId)
{
  if (modalId == "edit-modal-board") // if edit board, fill modal form with corresponding board spec details
  {
    for (let i = 0; i < boardSpecs.length; ++i)
    {
      if (boardSpecs[i] == "images") // if it's an image property, we need to push into the image array
      {
        board.images = [] // empty the array of images
        board.images.push(document.getElementById("edit-images").value); // add the new image
      }
      else
      {
        board[boardSpecs[i]] = document.getElementById("edit-" + boardSpecs[i]).value;
      }
    }
  }
  else if (modalId == "edit-modal-switches")
  {
    for (let i = 0; i < switchSpecs.length; ++i)
    {
      board.switches[switchSpecs[i]] = document.getElementById("edit-" + switchSpecs[i]).value;
    }
  }
  else if (modalId == "edit-modal-keycaps")
  {
    for (let i = 0; i < keycapSpecs.length; ++i)
    {
      board.keycap[keycapSpecs[i]] = document.getElementById("edit-" + keycapSpecs[i]).value;
    }
  }
  else if (modalId == "add-modal-board") // if adding, fill board specs and switch/keycap with corresponding details
  {
    board.switches = {};
    board.keycap = {};
    board.images = [];
    for (let i = 0; i < boardSpecs.length; ++i)
    {
      if (boardSpecs[i] == "images") // if it's an image property, we need to push into the image array
      {
        board.images.push(document.getElementById("add-images").value);
        console.log("board image link: ", board.images)
      }
      else
      {
        board[boardSpecs[i]] = document.getElementById("add-" + boardSpecs[i]).value;

        if (i < switchSpecs.length)
        {
          board.switches[switchSpecs[i]] = document.getElementById("add-" + switchSpecs[i]).value;
        }
        if (i < keycapSpecs.length)
        {
          board.keycap[keycapSpecs[i]] = document.getElementById("add-" + keycapSpecs[i]).value;
        }
      }
    }
  }
}

// this function calls populateFields to input data,
// then rerenders the cards to reflect updates
function saveEdit(modalId) 
{
  populateFields(currentBoard, modalId);
  closeDetail(modalId);
  openDetail(currentBoard);
  showCards();
}

// this function calls populateFields and passes a new board object into it to be
// filled and pushed into our array of objects. after being added to the array,
// the cards are rerendered
function addBoard(modalId)
{
  let newBoard = {};

  populateFields(newBoard, modalId);
  keyboards.push(newBoard);
  closeDetail(modalId);
  showCards();
}

// this function prompts user to input board they want deleted
// then splices the array to remove the board at that index of the array
// and shift every element over. then it rerenders cards
function deleteBoard()
{
  let promptMsg = "Please enter the number of the keyboard to delete.";
  let numToDelete = prompt(promptMsg);

  if (isNaN(numToDelete)) // input checking, only numeric chars allowed
  {
    alert("Invalid input. Only numeric characters allowed.");
  }
  else if (+numToDelete - 1 >= keyboards.length || +numToDelete <= 0)
  {
    alert("Invalid Number.")
  }
  else
  {
    keyboards.splice(+numToDelete - 1, 1);
  }

  showCards();
}

// this function opens our dropdown window for the sort by button
// closes whenever we click out
function dropdownFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 

// this function utilizes array sort() method to sort the array according
// to the sort type. accesses object properties and compares to determine order
function sortBoards(sortOption)
{
  if (sortOption == "layout")
  {
    // converts our string into an integer and sorts ascending
    keyboards.sort((a, b) => {
      const layoutA = parseInt(a.layout);
      const layoutB = parseInt(b.layout);
      // if either of the strings are not numeric, put the numeric value first
      if (layoutA == NaN)
      {
        return 1;
      }
      if (layoutB == NaN)
      {
        return -1;
      }
      else
      {
        return layoutA - layoutB;  
      }
    });

    showCards();
  }
  else if (sortOption == "brand")
  {
    keyboards.sort((a, b) => {
      const nameA = a.brand.toUpperCase();
      const nameB = b.brand.toUpperCase();
      if (nameA < nameB)
      {
         return -1;
      }
      else if (nameA > nameB)
      {
         return 1;
      }
      else
      {
        return 0;
      }
    });
  
    showCards();
  }
}