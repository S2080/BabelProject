
async function getUsers() {
    // eslint:disable
    const usersData = await fetch('https://jsonplaceholder.typicode.com/users');

    const users = await usersData.json();

    return users;
}

getUsers().then(users => console.log(users));