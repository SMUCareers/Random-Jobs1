const jobs = [
    'Travel agent',
    'Typist',
    'Undertaker',
    'Video Game Tester',
    'Veterinary surgeon',
    'Waiting staff',
    'Window cleaner',
    'Zookeeper',
];

document.getElementById('getJobButton').addEventListener('click', function() {
    const dateInput = document.getElementById('birthday').value;
    if (!dateInput) {
        alert('Please select your birthday!');
        return;
    }

    const month = new Date(dateInput).getMonth(); // 0-11
    const day = new Date(dateInput).getDate(); // 1-31
    const jobIndex = (month * 31 + day) % jobs.length; // Simple hash
    const job = jobs[jobIndex];

    document.getElementById('jobDisplay').innerText = job;
    
    const tadaSound = document.getElementById('tadaSound');
    tadaSound.currentTime = 0; // Reset sound
    tadaSound.play();
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('birthday').value = '';
    document.getElementById('jobDisplay').innerText = '';
});
