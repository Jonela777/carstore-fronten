document.getElementById('car-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const car = {
        make: document.getElementById('make').value,
        model: document.getElementById('model').value,
        year: parseInt(document.getElementById('year').value),
        price: parseFloat(document.getElementById('price').value),
        color: document.getElementById('color').value
    };

    await create(car);
    window.location.href = 'index.html';
});
