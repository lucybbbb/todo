const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  
  function renderCalendar() {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const totalDays = lastDay.getDate();
    const startDay = firstDay.getDay();
  
    document.getElementById("month-year").innerText = `${monthNames[currentMonth]} ${currentYear}`;
  
    const datesContainer = document.getElementById("dates");
    datesContainer.innerHTML = "";
  
    for (let i = 0; i < startDay; i++) {
      const emptyDate = document.createElement("div");
      emptyDate.classList.add("date");
      datesContainer.appendChild(emptyDate);
    }
  
    for (let day = 1; day <= totalDays; day++) {
      const dateElement = document.createElement("div");
      dateElement.classList.add("date");
      dateElement.innerText = day;
      datesContainer.appendChild(dateElement);
    }
  }
  
  document.getElementById("prev-btn").addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar();
  });
  
  document.getElementById("next-btn").addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar();
  });
  
  renderCalendar();
 

  const taskInput = document.getElementById("task");
  const addBtn = document.getElementById("add-btn");
  const taskList = document.getElementById("task-list");
  
  addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      return;
    }
  
    const taskItem = document.createElement("li");
    taskItem.innerText = taskText;
  
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", () => {
      taskItem.remove();
    });
  
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
  
    taskInput.value = "";
  });
  
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addBtn.click();
    }
  });
  
