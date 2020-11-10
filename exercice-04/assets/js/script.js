let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];
const daysList = document.createElement('ul');

daysList.setAttribute('class', 'container text-center list-group col-5 mt-5')
document.body.appendChild(daysList);

 days.forEach(function(day) {
     let itemDaysList = document.createElement('li');
     itemDaysList.textContent = day;
     itemDaysList.setAttribute('class', 'list-group-item');
     if (itemDaysList.textContent == days[5] || itemDaysList.textContent == days[6]) {
         itemDaysList.classList.add('font-weight-bold');
     }
     daysList.appendChild(itemDaysList);
 });
 