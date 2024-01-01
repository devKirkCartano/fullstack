// WRITE YOUR CODE IN HERE:

const container = document.querySelector('#container')

for (let i = 0; i < 100; i++) {
    const newBtn = document.createElement('button');
    newBtn.innerText = "Progammer";
    container.appendChild(newBtn);
}