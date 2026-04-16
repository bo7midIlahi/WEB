function emptyStorage() {
  let array = JSON.parse(localStorage.getItem("array") || "[]");
  array = [];
  localStorage.setItem("array", JSON.stringify(array));
  showStoredCards(); //removes all displayed cards
}

function inputValid() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const drop = document.getElementById("drop").value;
  const msg = document.getElementById("msg");

  if (name == "" || email == "" || age == 0) {
    msg.textContent = "TOUS LES CHAMPS SONT NECESSAIRE";
    return false;
  }

  const isAlpha = (str) => /^[a-z]+$/i.test(str);
  if (!isAlpha(name)) {
    msg.textContent = "NOM INVALID";
    return false;
  }

  const checkMail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };
  if (!checkMail(email)) {
    msg.textContent = "EMAIL INVALID";
    return false;
  }

  const isDigits = (digit) => /^\d+$/.test(digit);
  if (!isDigits(age) || age < 18 || age > 75) {
    msg.textContent = "AGE INVALID";
    return false;
  }

  if (drop == 1) {
    msg.textContent = "SELECT INVALID";
    return false;
  }

  return true;
}

function store() {
  const userProfile = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    age: document.getElementById("age").value,
    role: document.getElementById("drop").options[
      document.getElementById("drop").selectedIndex
    ].text,
  };

  //retrieve array
  let array = JSON.parse(localStorage.getItem("array") || "[]");
  //update array
  array.push(userProfile);
  console.log(array);
  //store array
  localStorage.setItem("array", JSON.stringify(array));
}

function createCard(profile) {
  const card = document.createElement("div");
  card.className = "profile-card"; // use class for styling

  const nameEl = document.createElement("h3");
  nameEl.textContent = profile.name;

  const emailEl = document.createElement("h3");
  emailEl.textContent = profile.email;

  const ageEl = document.createElement("h3");
  ageEl.textContent = profile.age;

  const roleEl = document.createElement("h3");
  roleEl.textContent = profile.role;

  card.appendChild(nameEl);
  card.appendChild(emailEl);
  card.appendChild(ageEl);
  card.appendChild(roleEl);

  return card;
}

function showStoredCards() {
  const container = document.querySelector(".storedCard");
  container.innerHTML = ""; // clear previous content

  const array = JSON.parse(localStorage.getItem("array") || "[]");
  console.log("Rendering profiles:", array);

  array.forEach((profile) => {
    const card = createCard(profile);
    container.appendChild(card);
  });
}

function add() {
  console.log("inside add");

  if (inputValid()) {
    //let array = []; // create array to store user inputs
    //localStorage.setItem("array", JSON.stringify(array)); // save the array locally
    store();
    showStoredCards();
    document.getElementById("msg").textContent = "AJOUT SUCCES";
  }
}
