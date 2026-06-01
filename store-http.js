const baseUrl = 'https://localhost:7001/api';

async function getAll() {
    const response = await fetch(`${baseUrl}/cars`);
    return await response.json();
}

async function getById(id) {
    const response = await fetch(`${baseUrl}/cars/${id}`);
    return await response.json();
}

async function create(car) {
    const response = await fetch(`${baseUrl}/cars`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(car)
    });
    return await response.json();
}

async function update(id, car) {
    const response = await fetch(`${baseUrl}/cars/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(car)
    });
    return await response.json();
}

async function remove(id) {
    await fetch(`${baseUrl}/cars/${id}`, {
        method: 'DELETE'
    });
}
