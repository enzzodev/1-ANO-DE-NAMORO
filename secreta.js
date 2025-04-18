const startDate = new Date("2024-06-09T00:00:00"); // Declarado apenas uma vez

// --- BLOCO 1: Texto único com tempo juntos ---
const timeDisplay = document.getElementById("timeTogether");

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    let seconds = Math.floor(diff / 1000);
    const years = Math.floor(seconds / (365 * 24 * 60 * 60));
    seconds %= 365 * 24 * 60 * 60;
    const months = Math.floor(seconds / (30 * 24 * 60 * 60));
    seconds %= 30 * 24 * 60 * 60;
    const days = Math.floor(seconds / (24 * 60 * 60));
    seconds %= 24 * 60 * 60;
    const hours = Math.floor(seconds / (60 * 60));
    seconds %= 60 * 60;
    const minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;

    if (timeDisplay) {
        timeDisplay.innerHTML = `Compartilhando momentos há ${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos ❤️`;
    }
}

setInterval(updateTimer, 1000);
updateTimer();


// --- BLOCO 2: Contador com elementos separados ---
const yearsSpan = document.getElementById("years");
const monthsSpan = document.getElementById("months");
const daysSpan = document.getElementById("days");
const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");

function updateCounter() {
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();
  let hours = now.getHours() - startDate.getHours();
  let minutes = now.getMinutes() - startDate.getMinutes();
  let seconds = now.getSeconds() - startDate.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    months--;
    const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += previousMonth.getDate();
  }
  if (months < 0) {
    months += 12;
    years--;
  }

  // Só atualiza se os elementos existirem
  if (yearsSpan) yearsSpan.textContent = years.toString().padStart(2, '0');
  if (monthsSpan) monthsSpan.textContent = months.toString().padStart(2, '0');
  if (daysSpan) daysSpan.textContent = days.toString().padStart(2, '0');
  if (hoursSpan) hoursSpan.textContent = hours.toString().padStart(2, '0');
  if (minutesSpan) minutesSpan.textContent = minutes.toString().padStart(2, '0');
  if (secondsSpan) secondsSpan.textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateCounter, 1000);
updateCounter();
``


