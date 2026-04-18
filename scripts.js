
// This function adds cards the page to display the data in the array
let currentBoard = null;

function showCards() 
{
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < keyboards.length; i++) {
    let board = keyboards[i];

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, board, i+1); // Edit title
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}



function editCardContent(card, board, entryNum) 
{
  card.style.display = "block";
  card.addEventListener("click", function() {
    openDetail(board);
  });

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = entryNum + ". " + board.brand + " " + board.model;

  const mainImage = card.querySelector(".main-image");
  mainImage.src = board.images[0];
  mainImage.alt = board.brand + " " + board.model;

  const thumbnailContainer = card.querySelector(".thumbnails");

  for (let i = 0; i < board.images.length; i++)
  {
    const thumb = document.createElement("img");
    thumb.src = board.images[i];
    thumb.className = "thumbnail";

    thumb.addEventListener("click", function() {
      event.stopPropagation();
      mainImage.src = board.images[i];
    });

    thumbnailContainer.appendChild(thumb);
  }
  console.log("new card:", board.brand);
}



function openDetail(board) 
{
  currentBoard = board;
  const panel = document.getElementById("detail-panel");

  document.getElementById("detail-board").textContent = board.brand + " " + board.model;   

  const boardSpecs = document.getElementById("board-specs");  
  boardSpecs.innerHTML = 
  `
    <li>Layout: ${board.layout}</li>
    <li>Case Material: ${board.case}</li>
    <li>Weight: ${board.weight}</li>
    <li>Mount Style: ${board.mount}</li>
    <li>Plate: ${board.plate}</li>
    <li>Description: ${board.description}</li>
  `
  const switchSpecs = document.getElementById("switch-specs");
  switchSpecs.innerHTML = 
  `
    <li>Name: ${board.switches.switchName}</li>
    <li>Switch Type: ${board.switches.switchType}</li>
    <li>Actuation Force: ${board.switches.actuationForce}</li>
  `
  const keycapSpecs = document.getElementById("keycap-specs");
  keycapSpecs.innerHTML = 
  `
    <li>Manufacturer: ${board.keycap.keycapManu}</li>
    <li>Name: ${board.keycap.keycapName}</li>
  `

  panel.style.display = "block";
}



function closeDetail() 
{
  document.getElementById("detail-panel").style.display = "none";
}



// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!",
  );
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}



function openModal()
{
  console.log("openModal called, currentBoard is:", currentBoard);
  const modal = document.getElementById("edit-modal")
  modal.style.display = "block";
}

function closeModal() 
{
  document.getElementById("edit-modal").style.display = "none";
}

function saveEdit() 
{
  currentBoard.brand = document.getElementById("edit-brand").value;
  currentBoard.model = document.getElementById("edit-model").value;
  currentBoard.layout = document.getElementById("edit-layout").value;
  currentBoard.case = document.getElementById("edit-case").value;
  currentBoard.weight = document.getElementById("edit-weight").value;
  currentBoard.mount = document.getElementById("edit-mount").value;
  currentBoard.plate = document.getElementById("edit-plate").value;
  currentBoard.description = document.getElementById("edit-description").value;

  closeModal();
  openDetail(currentBoard);
  showCards();
}