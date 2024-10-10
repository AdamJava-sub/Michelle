function updateTimeTogether() {
    const startDate = new Date('2023-08-27T17:00:00'); // תאריך ההתחלה שלכם
    const now = new Date();
    const timeDiff = now - startDate;

    const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('timeTogether').innerText = 
        `${years} year(s), ${months} month(s), ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
}

setInterval(updateTimeTogether, 1000);