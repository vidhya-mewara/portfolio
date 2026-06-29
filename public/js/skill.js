const form = document.getElementById("skillForm");

const table = document.getElementById("skillsTable");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const category = document.getElementById("category").value;

    const technology = document.getElementById("technology").value.trim();

    if (technology === "") {

        alert("Please enter a technology.");

        return;
    }

    const row = document.createElement("tr");

    row.innerHTML = `
        <td><strong>${category}</strong></td>
        <td>${technology}</td>
    `;

    table.appendChild(row);

    form.reset();

});
const removeBtn = document.getElementById("removeSkill");

removeBtn.addEventListener("click", () => {

    if (table.rows.length > 0) {

        table.removeChild(table.lastElementChild);

    }

});
