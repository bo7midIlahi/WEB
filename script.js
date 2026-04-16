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

function add() {
  console.log("inside add");
  if (inputValid()) {
    let array = []; // create array to store user inputs
    localStorage.setItem("array", JSON.stringify(array)); // save the array locally
    store();
  }
}
