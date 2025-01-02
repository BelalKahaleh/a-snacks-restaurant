const form = document.getElementById("userForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission

  const name = document.getElementById("username").value;
  const age = document.getElementById("age").value;
  const gen = document.getElementById("gender").value;
  const order = document.querySelector('input[name="order"]:checked')?.value;

  if (!name || !age || gen === "Select" || !order) {
    alert("Please fill out all fields correctly.");
    return;
  }

  const parentElement = document.getElementById("parentDiv");
  parentElement.textContent = `Name: ${name}, Age: ${age}, Gender: ${gen} your order: ${order}` ;



  const listContainer = document.getElementById("list-container");
  listContainer.innerHTML = ""; 
  listContainer.appendChild(orderedList);

  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`gender: ${gen}`);
  console.log(`Order: ${order}`);
});

































//   const orderedList = document.createElement("ol");
//   [
//     "Name: " + name,
//     "Age: " + age,
//     "Gender: " + gen,
//     "Order: " + order,
//   ].forEach((item) => {
//     const listItem = document.createElement("li");
//     listItem.textContent = item;
//     orderedList.appendChild(listItem);
//   });