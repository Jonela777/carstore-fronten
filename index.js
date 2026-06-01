async function loadCars() {
    const cars = await getAll();

    const tbody = document.getElementById('cars-body');
    tbody.innerHTML = '';

    cars.forEach(car => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${car.make} ${car.model}</td>
            <td>${car.year}</td>
            <td>${car.color}</td>
            <td>$${car.price}</td>
            <td>
                <a href="edit-car.html?id=${car.id}" class="btn btn-edit">Edit</a>
                <button class="btn btn-delete" onclick="deleteCar(${car.id})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });

    // Stats
    document.getElementById('stat-total').textContent = cars.length;
    const avgPrice = cars.length ? (cars.reduce((s, c) => s + c.price, 0) / cars.length).toFixed(2) : 0;
    document.getElementById('stat-avg').textContent = `$${avgPrice}`;
    const newestYear = cars.length ? Math.max(...cars.map(c => c.year)) : 0;
    document.getElementById('stat-newest').textContent = newestYear;
}

async function deleteCar(id) {
    if (confirm('Are you sure you want to delete this car?')) {
        await remove(id);
        loadCars();
    }
}

loadCars();
