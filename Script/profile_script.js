fetch('/users')
    .then(res => res.json())
    .then(data => {
        const list = document.getElementById('userList');
        data.users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `${user.name} (${user.email})`;
            list.appendChild(li);
        });
    });