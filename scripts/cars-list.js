let cars_form;
let dataContainer;

(function() {
    document.addEventListener("DOMContentLoaded", () => {
        cars_form = document.querySelector('#cars-form');
        dataContainer = document.querySelector('#cars_output');
    })
})();

const deleteItem = (item) => {
    const values = JSON.parse(localStorage.getItem('cars_key'));
    const filteredValues = values.filter((value) => value.id !== item.id);
    localStorage.setItem('cars_key', JSON.stringify(filteredValues));
    item.remove();
}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('cars_key')) {
        const schedule = JSON.parse(localStorage.getItem('cars_key'));
        schedule.forEach((Car) => {
            addCarToMarkup(Car);
        });
    }

    document.addEventListener('click', (e) => {
        if (e.target.closest('.delete_output_item_button')) {
            const item = e.target.closest('.cars_item');
            deleteItem(item);
        }
    });

    cars_form.addEventListener('submit', (e) => {
        e.preventDefault();
        const cars_formData = new FormData(e.target);
        const values = Object.fromEntries(cars_formData);
        if (!values.name) {
            alert('Марка не введена!');
            return;
        }
        addCarToMarkup(values);
    });

    dataContainer.addEventListener('DOMSubtreeModified', () => {
        const items = document.querySelectorAll('.cars_item');

        let values = [];
        items.forEach((item) => {
            const name = item.getElementsByClassName('cars_item_name')[0].innerText;
            const category = item.getElementsByClassName('cars_item_category')[0].innerText;
            const id = item.id;

            values.push({name, category, id});
        });

        localStorage.setItem('cars_key', JSON.stringify(values));
    })
})

const addCarToMarkup = (Car) => {
    const markup = `
        <div class="cars_item" id="${new Date().getTime()}">
          <div class="cars_item_body">
            <p>
              Марка: <span class="cars_item_name">${Car.name}</span>
            </p>
            <p>
              Категория: <span class="cars_item_category">${Car.category}</span>
            </p>
          </div>
          <p class="delete_output_item_button">
            Удалить
          </p>
        </div>
      `;
    dataContainer.insertAdjacentHTML('beforeend', markup);
}
