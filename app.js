const users = {};

for (let i = 1; i <= 10; i++) {
    const id = i;
    const name = prompt(`Введите имя пользователя ${id}:`);
    const age = parseInt(prompt(`Введите возраст пользователя ${id}:`));
  
    users[id] = { name, age };
}

for (const id in users) {
    console.log(`Пользователь - ${id}`);
    console.log(`Имя - ${users[id].name}`);
    console.log(`Возраст - ${users[id].age}`);
}


console.log(users);