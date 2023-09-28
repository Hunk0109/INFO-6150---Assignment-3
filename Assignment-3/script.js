//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("button");
  const addStudentButton = document.getElementById("add");
  const table = document.getElementById("myTable");

  submitButton.disabled = true;
  submitButton.style.backgroundColor = "gray";

  addStudentButton.addEventListener("click", function () {
    // Create a new row with dummy values
    const newRow = table.insertRow(-1);
    newRow.innerHTML = `
      <td><input type="checkbox" /></td>
      <td>Student ${table.rows.length - 4}</td>
      <td>Teacher ${table.rows.length - 4}</td>
      <td>Approved</td>
      <td>Fall</td>
      <td>TA</td>
      <td>${Math.floor(Math.random() * 100000)}</td>
      <td>100%</td>
      <td><button class="delete-button" char="Student ${
      table.rows.length - 4
    }">Delete</button></td>
      <td><button class="edit-button" char="Student ${
      table.rows.length - 4
    }">Edit</button></td>
    `;

    // Apply existing CSS styles
    newRow.style.backgroundColor = "white";

    // Display success message in a popup
    const studentName = `Student ${table.rows.length - 4 }`;
    alert(`${studentName} Record added successfully`);

    // Update the submit button state
    updateSubmitButtonState();
  });

  table.addEventListener("click", function (event) {
    if (event.target.type === "checkbox") {
      const row = event.target.closest("tr");
      if (row) {
        const isSelected = event.target.checked;
        row.style.backgroundColor = isSelected ? "yellow" : "white";

    // Handle green arrow clicks
    if (event.target.tagName === "IMG") {
      const img = event.target;
      const row = img.closest("tr");
      const dropdownRow = row.nextElementSibling;

      if (row) {
        // Toggle the dropdown visibility when the down arrow is clicked
        if (
          dropdownRow.style.display === 'none' ||
          dropdownRow.style.display === ''
        ) {
          // Expand the row with a toggle effect
          dropdownRow.style.display = 'table-row';
          slideDown(dropdownRow);
        } else {
          // Collapse the row with a toggle effect
          slideUp(dropdownRow, function () {
            dropdownRow.style.display = 'none';
          });
        }
      }
      function slideDown(element) {
        element.style.transition = 'max-height 0.5s ease-in';
        element.style.maxHeight = element.scrollHeight + 'px';
      }

      function slideUp(element, callback) {
        element.style.transition = 'max-height 0.5s ease-out';
        element.style.maxHeight = '0';
        setTimeout(callback, 500);  // Wait for the animation to complete before hiding
}
}

        // Add or remove Delete and Edit buttons
        const deleteButton = row.querySelector("button.delete-button");
        const editButton = row.querySelector("button.edit-button");

        if (isSelected) {
          deleteButton.style.display = "inline-block";
          editButton.style.display = "inline-block";
        } else {
          deleteButton.style.display = "none";
          editButton.style.display = "none";
        }

        // Update the submit button state
        updateSubmitButtonState();
      }
    }

    // Handle Delete button clicks
    if (event.target.classList.contains("delete-button")) {
      const studentName = event.target.getAttribute("char");
      const rowToDelete = event.target.closest("tr");
      if (rowToDelete) {
        table.deleteRow(rowToDelete.rowIndex);

        // Display a pop-up message for successful deletion
        alert(`${studentName} Record deleted successfully`);

        // Update the submit button state
        updateSubmitButtonState();
      }
    }

    // Handle Edit button clicks
    if (event.target.classList.contains("edit-button")) {
      const studentName = event.target.getAttribute("char");
      // Display a pop-up for editing student details
      displayEditPopup(studentName);
    }
  });

  function updateSubmitButtonState() {
    const checkboxes = table.querySelectorAll("input[type='checkbox']");
    const selectedCheckboxes = Array.from(checkboxes).filter(
      (checkbox) => checkbox.checked
    );

    if (selectedCheckboxes.length > 0) {
      submitButton.disabled = false;
      submitButton.style.backgroundColor = "orange";
    } else {
      submitButton.disabled = true;
      submitButton.style.backgroundColor = "gray";
    }
  }

  function displayEditPopup(studentName) {
    // Create a popup for editing student details
    const popup = document.createElement("div");
    popup.classList.add("edit-popup");
    popup.innerHTML = `
      <h2>Edit details of ${studentName}</h2>
      <p>Student Name: ${studentName}</p>
      <p>Advisor: Advisor Name</p>
      <p>Award Status: Approved</p>
      <p>Semester: Fall</p>
      <p>Type: TA</p>
      <p>Budget: 12345</p>
      <p>Percentage: 100%</p>
      <button class="update-button">Update</button>
      <button class="cancel-button">Cancel</button>
    `;

    // Append the popup to the document body
    document.body.appendChild(popup);

    // Handle Update button click
    const updateButton = popup.querySelector(".update-button");
    updateButton.addEventListener("click", function () {
      // Display a success message when Update is clicked
      alert(`${studentName} data updated successfully`);
      // Close the popup
      document.body.removeChild(popup);
    });

    // Handle Cancel button click
    const cancelButton = popup.querySelector(".cancel-button");
    cancelButton.addEventListener("click", function () {
      // Close the popup
      document.body.removeChild(popup);
    });
  }
  const dropDownRows = document.querySelectorAll(".dropDownTextArea");
  dropDownRows.forEach((row) => {
    row.style.display = "none";
  })
  
});
