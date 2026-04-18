
// This function adds cards the page to display the data in the array
let currentBoard = null;

function showCards() 
{
  const cardContainer = document.getElementById("card-container");
  const templateCard = document.querySelector(".card");
  cardContainer.innerHTML = "";

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
  thumbnailContainer.innerHTML = "";

  for (let i = 0; i < board.images.length; i++)
  {
    const thumb = document.createElement("img");
    thumb.src = board.images[i];
    thumb.className = "thumbnail";

    thumb.addEventListener("click", function() {
      event.stopPropagation();
      mainImage.src = board.images[i];
      openDetail(board);
    });

    thumbnailContainer.appendChild(thumb);
  }
}



function openDetail(board) 
{
  currentBoard = board;
  const panel = document.getElementById("detail-panel");

  document.getElementById("detail-board").textContent = board.brand + " " + board.model;   

  const boardSpecs = document.getElementById("board-specs");  
  boardSpecs.innerHTML = 
  `
    <li><span class="spec-label">Layout</span><span class="spec-value">${board.layout}</span></li>
    <li><span class="spec-label">Case</span><span class="spec-value">${board.case}</span></li>
    <li><span class="spec-label">Weight</span><span class="spec-value">${board.weight}</span></li>
    <li><span class="spec-label">Mount</span><span class="spec-value">${board.mount}</span></li>
    <li><span class="spec-label">Plate</span><span class="spec-value">${board.plate}</span></li>
    <li><span class="spec-label">Description</span><span class="spec-value">${board.description}</span></li>
  `
  const switchSpecs = document.getElementById("switch-specs");
  switchSpecs.innerHTML = 
  `
    <li><span>Name: </span><span>${board.switches.switchName}</span></li>
    <li><span>Type: </span><span>${board.switches.switchType}</span></li>
    <li><span>Actuation force: </span><span>${board.switches.actuationForce}</span></li>
  `
  const keycapSpecs = document.getElementById("keycap-specs");
  keycapSpecs.innerHTML = 
  `
    <li><span>Manufacturer: </span><span>${board.keycap.keycapManu}</span></li>
    <li><span>Name: </span><span>${board.keycap.keycapName}</span></li>
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



function openModal(modalId)
{
  console.log("openModal called, currentBoard is:", currentBoard, "modal id =", modalId);
  const modal = document.getElementById(modalId);
  console.log("modal element: ", modal);

  if (modalId == "edit-modal-board")
  {
    document.getElementById("edit-brand").value = currentBoard.brand;
    document.getElementById("edit-model").value = currentBoard.model;
    document.getElementById("edit-layout").value = currentBoard.layout;
    document.getElementById("edit-case").value = currentBoard.case;
    document.getElementById("edit-weight").value = currentBoard.weight;
    document.getElementById("edit-mount").value = currentBoard.mount;
    document.getElementById("edit-plate").value = currentBoard.plate;
    document.getElementById("edit-description").value = currentBoard.description;
  }
  else if (modalId == "edit-modal-switches")
  {
    document.getElementById("edit-switchName").value = currentBoard.switches.switchName;
    document.getElementById("edit-switchType").value = currentBoard.switches.switchType;
    document.getElementById("edit-actuationForce").value = currentBoard.switches.actuationForce;
  }
  else
  {
    document.getElementById("edit-keycapManu").value = currentBoard.keycap.keycapManu;
    document.getElementById("edit-keycapName").value = currentBoard.keycap.keycapName;
  }

  modal.style.display = "flex";
}

function closeModal(modalId) 
{
  document.getElementById(modalId).style.display = "none";
}

function saveEdit(modalId) 
{
  if (modalId == "edit-modal-board")
  {
    currentBoard.brand = document.getElementById("edit-brand").value;
    currentBoard.model = document.getElementById("edit-model").value;
    currentBoard.layout = document.getElementById("edit-layout").value;
    currentBoard.case = document.getElementById("edit-case").value;
    currentBoard.weight = document.getElementById("edit-weight").value;
    currentBoard.mount = document.getElementById("edit-mount").value;
    currentBoard.plate = document.getElementById("edit-plate").value;
    currentBoard.description = document.getElementById("edit-description").value;
  }
  else if (modalId == "edit-modal-switches")
  {
    currentBoard.switches.switchName = document.getElementById("edit-switchName").value;
    currentBoard.switches.switchType = document.getElementById("edit-switchType").value;
    currentBoard.switches.actuationForce = document.getElementById("edit-actuationForce").value;
  }
  else
  {
    currentBoard.keycap.keycapManu = document.getElementById("edit-keycapManu").value;
    currentBoard.keycap.keycapName = document.getElementById("edit-keycapName").value;
  }

  closeModal(modalId);
  openDetail(currentBoard);
  showCards();
}