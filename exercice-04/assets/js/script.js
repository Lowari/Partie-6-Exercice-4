let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];

let table = document.createElement('table');
let thead = document.createElement('thead');
let tr = document.createElement('tr');
let th = document.createElement('th');
let tbody = document.createElement('tbody');

table.classList.add('table', 'text-center', 'col-2', 'container', 'mt-5', 'table-bordered');
th.textContent = 'Jour de la semaine';
th.classList.add('text-center', 'col');

document.body.appendChild(table);
table.appendChild(thead);
thead.appendChild(tr);
tr.appendChild(th);
table.appendChild(tbody);

days.forEach(element => {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.textContent = element;
    if (td.textContent == days[5] || td.textContent == days[6]) {
        td.classList.add('font-weight-bold', 'bg-primary');
    }
    tbody.appendChild(tr);
    tr.appendChild(td);
});