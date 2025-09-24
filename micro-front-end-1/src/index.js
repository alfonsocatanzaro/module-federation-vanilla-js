const appName = "micro-frontend-1";
console.log(`Hello from ${appName}`);

const appElement = document.getElementById("micro-frontend-1");
appElement.innerHTML = `<h1>Hello from ${appName}</h1>`;