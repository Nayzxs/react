document.getElementById('botaoTask').addEventListener('click', function() {
    const taskInput = document.getElementById('inputTask');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';
        removeBtn.classList.add('remove-btn');
        removeBtn.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(removeBtn);
        document.getElementById('lista').appendChild(li);
        taskInput.value = ''; // Limpa o campo de entrada
    }
});
