var task = document.getElementById("task");
var date = document.getElementById("date");
var showtask = document.getElementById("showtask");

function getData() {
    let data = localStorage.getItem("Tasks");
    return data == null ? [] : JSON.parse(data);
}
let storage = getData();

function submitForm() {
    event.preventDefault();

    let obj = {
        Task: task.value,
        Date: date.value
    };
    storage.push(obj);
    localStorage.setItem("Tasks", JSON.stringify(storage));
    task.value = "";
    showData();
}

function updateData(index) {
    let newTask = prompt("Enter new task");
    let newDate = prompt("Enter new date");
    storage[index].Date = newDate;
    storage[index].Task = newTask;
    localStorage.setItem("Tasks", JSON.stringify(storage));
    showData();
}

function deleteData(index) {
    storage.splice(index, 1);
    localStorage.setItem("Tasks", JSON.stringify(storage));
    showData();
}

function showData() {
    showtask.innerHTML = "";
    storage.forEach((data, index) => {
        showtask.innerHTML += `<tr>
        <td class="col-3">${index + 1}</td>
        <td class="col-3">${data.Date}</td>
        <td class="col-6">${data.Task}</td>
        <td class="col-12 d-flex">
        <button class="btn btn-warning me-3" onclick="updateData(${index})">Update</button>
            <button class="btn btn-danger" onclick="deleteData(${index})">Delete</button>
        </td>
    </tr>`;
    });
    input.value = "";
}
showData();