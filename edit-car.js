const params = new URLSearchParams(window.location.search);
const id = params.get('id');

async function loadCar() {
    const car = await getById(id);
    document.getElementById('id').value = car.id;
    document.getElementById('make').value = car.make;
    document.getElementById('model').value = car.model;
    document.getElementById('year').value = car.year;
    document.getElementById('price').value = car.price;
    document.getElementById('color').value = car.color;
    document.getElementById('editing-label').textContent = `Editing: ${car.make} ${car.model}`;
}

document.getElementById('car-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const car = {
        id: parseInt(document.getElementById('id').value),
        make: document.getElementById('make').value,
        model: document.getElementById('model').value,
        year: parseInt(document.getElementById('year').value),
        price: parseFloat(document.getElementById('price').value),
        color: document.getElementById('color').value
    };

    await update(id, car);
    window.location.href = 'index.html';
});

loadCar();
