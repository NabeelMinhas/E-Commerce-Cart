document.addEventListener('DOMContentLoaded', function() {
  let tableBody = document.querySelector('tbody');

  // Increment quantity
  tableBody.addEventListener('click', function(event) {
      if(event.target.classList.contains('add-quantity')) {
          let quantityElem = event.target.previousSibling;
          quantityElem.textContent = parseInt(quantityElem.textContent) + 1;
      }
  });

  // Decrement quantity
  tableBody.addEventListener('click', function(event) {
      if(event.target.classList.contains('reduce-quantity')) {
          let quantityElem = event.target.previousSibling.previousSibling.previousSibling;
          let quantity = parseInt(quantityElem.textContent);
          if(quantity > 0) {
              quantityElem.textContent = quantity - 1;
          }
      }
  });

  // Delete item
  tableBody.addEventListener('click', function(event) {
      if(event.target.classList.contains('delete-item')) {
          event.target.closest('tr').remove();
      }
  });

  // Add new item (for simplicity, it will be a placeholder item)
  document.querySelector('.add-new-item').addEventListener('click', function() {
      let newRow = document.createElement('tr');
      newRow.innerHTML = `
          <td>New Item</td>
          <td>1 <button class="add-quantity">+</button><button class="reduce-quantity">-</button></td>
          <td>$10.00</td>
          <td><button class="delete-item">Delete</button></td>
      `;
      tableBody.appendChild(newRow);
  });
});
