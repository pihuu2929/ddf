function updateCountup() {
    const startDate = new Date("2025-01-17T00:00:00").getTime(); // Start counting from Jan 17, 2025
    const now = new Date().getTime();
    const timeDifference = now - startDate;

    const countupElement = document.getElementById("countup");

    if (timeDifference < 0) {
        countupElement.innerHTML = 
            "<span class='heart'>❤</span> Waiting for January 17, 2025... <span class='heart'>❤</span>";
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    countupElement.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

setInterval(updateCountup, 1000);
updateCountup(); // Initial call to avoid delay
