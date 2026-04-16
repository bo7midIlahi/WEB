function inputValid() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const drop = document.getElementById("drop").value;
  const msg = document.getElementById("msg");

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

function store() {}

function add() {
  if (inputValid()) {
    store();
  }
}
