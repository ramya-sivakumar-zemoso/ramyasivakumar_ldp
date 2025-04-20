const menu = {
  chicken_noodles: { price: 220, course: 'main' },
  samosa_chat: { price: 90, course: 'starter' },
  panner_tikka: { price: 160, course: 'starter' },
  dahi_poori: { price: 80, course: 'dessert' },
};

const itemNames = {
  chicken_noodles: 'Chicken Noodles',
  samosa_chat: 'Samosa Chat',
  panner_tikka: 'Paneer Tikka',
  dahi_poori: 'Dahi Poori',
};

document.getElementById(
  'Chicken-Noodles-details'
).innerHTML = `Chicken Noodles<br>Price: ₹${menu.chicken_noodles.price}`;
document.getElementById(
  'samosa-chat'
).innerHTML = `Samosa Chat<br>Price: ₹${menu.samosa_chat.price}`;
document.getElementById(
  'panner-tikka'
).innerHTML = `Paneer Tikka<br>Price: ₹${menu.panner_tikka.price}`;
document.getElementById(
  'dahi-poori'
).innerHTML = `Dahi Poori<br>Price: ₹${menu.dahi_poori.price}`;

const tableOrders = { 1: [], 2: [], 3: [], 4: [], 5: [] };
let currentTable = 1;

function openModal(tableNum) {
  currentTable = tableNum;
  document.getElementById('popup').style.display = 'flex';
  renderOrder();
}

function closeModal() {
  document.getElementById('popup').style.display = 'none';
}

function renderOrder() {
  const tbody = document.querySelector('#orderTable tbody');
  tbody.innerHTML = '';
  tableOrders[currentTable].forEach((order, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${order.item}</td>
      <td>${order.price.toFixed(2)}</td>
      <td><input type="number" min="1" value="${
        order.qty
      }" onchange="updateQty(${index}, this.value)"></td>
      <td><span class="delete-btn" onclick="deleteItem(${index})">🗑</span></td>
    `;
    tbody.appendChild(row);
  });
  updateTotal();
}

function updateQty(index, qty) {
  tableOrders[currentTable][index].qty = parseInt(qty);
  updateTotal();
  updateTableSummary(currentTable);
}

function deleteItem(index) {
  tableOrders[currentTable].splice(index, 1);
  renderOrder();
  updateTableSummary(currentTable);
}

function updateTotal() {
  const total = tableOrders[currentTable].reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  document.getElementById('totalPrice').textContent = `Total: ₹${total.toFixed(
    2
  )}`;
}

function updateTableSummary(tableNum) {
  const orders = tableOrders[tableNum];
  const totalQty = orders.reduce((acc, item) => acc + item.qty, 0);
  const totalCost = orders.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const summarysection = document.getElementById(`table${tableNum}-summary`);
  if (summarysection) {
    summarysection.textContent = `${totalQty} items | ₹${totalCost.toFixed(2)}`;
  }
}

function generateBill() {
  const total = tableOrders[currentTable].reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  alert('Bill Generated: ₹' + total.toFixed(2));
  tableOrders[currentTable] = [];
  updateTableSummary(currentTable);
  closeModal();
}

function dragstartHandler(ev) {
  ev.dataTransfer.setData('text/plain', ev.target.getAttribute('data-item'));
}

function dragoverHandler(ev) {
  ev.preventDefault();
}

function dropHandler(ev, tableNum) {
  ev.preventDefault();
  const itemKey = ev.dataTransfer.getData('text/plain');
  const itemName = itemNames[itemKey];
  const itemPrice = menu[itemKey].price;

  const existing = tableOrders[tableNum].find((o) => o.item === itemName);
  if (existing) {
    existing.qty += 1;
  } else {
    tableOrders[tableNum].push({ item: itemName, price: itemPrice, qty: 1 });
  }

  updateTableSummary(tableNum);

  if (tableNum === currentTable) {
    renderOrder();
  }
}

function filterTables() {
  const input = document.getElementById('table-search-input').value.trim();
  const filter = input.toUpperCase();
  const tablesections = document.querySelectorAll('.table-list > section');

  tablesections.forEach((table) => {
    const childNodes = Array.from(table.childNodes);
    const nameNode = childNodes.find(
      (node) =>
        node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== ''
    );
    const tableName = nameNode ? nameNode.textContent.trim().toUpperCase() : '';

    table.style.display = tableName.includes(filter) ? '' : 'none';
  });

  document.getElementById('clear-table-search').style.display = input
    ? 'inline'
    : 'none';
}

function filterMenu() {
  const input = document.getElementById('search-input');
  const filter = input.value.toUpperCase();
  const clearBtn = document.getElementById('clear-search');
  const rows = document.querySelectorAll('.menu-table table tr');
  const selectedCourse = document.getElementById('course-filter').value;

  clearBtn.style.display = input.value ? 'inline' : 'none';

  rows.forEach((row) => {
    const td = row.querySelector('td');
    const section = td?.querySelector('section');
    if (td && section) {
      const itemKey = section.getAttribute('data-item');
      const text = td.textContent || td.innerText;
      const courseType = menu[itemKey]?.course;

      const matchesSearch = text.toUpperCase().includes(filter);
      const matchesCourse = !selectedCourse || courseType === selectedCourse;

      row.style.display = matchesSearch && matchesCourse ? '' : 'none';
    }
  });
}

function clearSearch() {
  document.getElementById('search-input').value = '';
  filterMenu();
}
