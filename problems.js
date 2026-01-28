function submitForm() {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const fullName = name + " " + surname;
  document.getElementById("output").innerText = " welcome  " + fullName;
}
