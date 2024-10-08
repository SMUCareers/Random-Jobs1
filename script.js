const jobs = [
  'Actor', 'Acupuncturist', 'Sky Diving Instructor', 'Advertising executive', 'Air traffic controller',
  'Aircraft engineer', 'Anaesthetist', 'Animal breeder', 'Anthropologist', 'Antique dealer', 
  'Archaeologist', 'Architect', 'Archivist', 'Aromatherapist', 'Art critic', 'Art dealer', 
  'Art historian', 'Artist', 'Assembly line worker', 'Astrologer', 'Astronomer', 'Au pair', 
  'Auctioneer', 'Auditor', 'Author', 'Baggage handler', 'Bailiff', 'Baker', 'Bank clerk', 
  'Bank manager', 'Bar staff', 'Barber', 'Barrister', 'Beauty therapist', 'Blacksmith', 
  'Boat builder', 'Bodyguard', 'Book-keeper', 'Bookmaker', 'Brewer', 'Bricklayer', 
  'Broadcaster', 'Builder', 'Building labourer', 'Bus driver', 'Business consultant', 
  'Business owner', 'Butcher', 'Butler', 'Cabin crew', 'Cabinet maker', 'Camera operator', 
  'Car dealer', 'Car wash attendant', 'Care assistant', 'Shepherd', 'Careers advisor', 
  'Caretaker', 'Carpenter', 'Carpet fitter', 'Cartoonist', 'Cashier', 'Astronaut', 
  'Catering staff', 'Chauffeur', 'Chef', 'Chemist', 'Childcare worker', 'Childminder', 
  'Childrens entertainer', 'Chimney sweep', 'Chiropodist', 'Chiropractor', 'Choreographer', 
  'Circus worker', 'Civil servant', 'Clairvoyant', 'Cleaner', 'Clergyman', 'Cleric', 
  'Clerical assistant', 'Clockmaker', 'Coastguard', 'Comedian', 'Community worker', 
  'Company director', 'Composer', 'Computer analyst', 'Computer engineer', 'Computer programmer', 
  'Conservationist', 'Construction worker', 'Cook', 'Coroner', 'Costume designer', 'Counsellor', 
  'Courier', 'Craftsperson', 'Crane driver', 'Crematorium worker', 'Croupier', 'Crown prosecutor', 
  'Curator', 'Customs officer', 'Dancer', 'Data processor', 'Debt collector', 'Decorator', 
  'Delivery driver', 'Dental hygienist', 'Dental nurse', 'Dentist', 'Designer', 'Dietician', 
  'Diplomat', 'Director', 'Disc jockey', 'Diver', 'Doctor', 'Domestic staff', 'Doorman', 
  'Dressmaker', 'Driving instructor', 'Clown', 'Economist', 'Editor', 'Electrician', 
  'Engineer', 'Estate agent', 'Events organiser', 'Factory worker', 'Fairground worker', 
  'Farmer', 'Farm worker', 'Fashion designer', 'Film director', 'Financial advisor', 
  'Firefighter', 'Fisherman/woman', 'Fitness instructor', 'Flower arranger', 'Flying instructor', 
  'Footballer', 'Fork-lift driver', 'Foster parent', 'Fundraiser', 'Funeral director', 
  'Gamekeeper', 'Garden designer', 'Gardener', 'Gas fitter', 'Genealogist', 'Grave digger', 
  'Groom', 'Hairdresser', 'Handyman', 'Healthcare assistant', 'Health visitor', 'Heating engineer', 
  'Herbalist', 'Historian', 'Homeopath', 'Homemaker', 'Home-worker', 'Horticulturalist', 
  'Housekeeper', 'Hypnotherapist', 'Illustrator', 'Immigration officer', 'Independent means', 
  'Insurance consultant', 'Interior designer', 'Interpreter', 'Inventor', 'IT consultant', 
  'Jewellery maker', 'Jockey', 'Journalist', 'Judge', 'Kennel worker', 'Laboratory technician', 
  'Labourer', 'Landowner', 'Landscape gardener', 'Ballet Dancer', 'Lawyer', 'Leaflet distributor', 
  'Lecturer', 'Legal secretary', 'Librarian', 'Lifeguard', 'Lift engineer', 'Lighthouse keeper', 
  'Literary agent', 'Local govt worker', 'Lock keeper', 'Locksmith', 'Lorry driver', 
  'Machinist', 'Magician', 'Magistrate', 'Make-up artist', 'Management consultant', 
  'Managing director', 'Manicurist', 'Market trader', 'Marketing director', 'Massage therapist', 
  'Mathematician', 'Prime Minister', 'Merchant navy personnel', 'Meteorologist', 'Meter reader', 
  'Midwife', 'Miner', 'Minister', 'Missionary', 'Model', 'Moneylender', 'Mortician', 
  'Musician', 'Nun', 'Nurse', 'Occupational therapist', 'Oil rig crew', 'Optician', 'Osteopath', 
  'Paramedic', 'Park-keeper', 'Park ranger', 'Party planner', 'Pathologist', 'Pawnbroker', 
  'Pest controller', 'Pharmacist', 'Photographer', 'Physiotherapist', 'Bee Keeper', 
  'Picture framer', 'Pilot', 'Plasterer', 'Plumber', 'Police officer', 'Politician', 
  'Pop star', 'Porter', 'Postal delivery worker', 'Preacher', 'Priest', 'Printer', 
  'Prison officer', 'Private investigator', 'Probation officer', 'Producer', 'Professor', 
  'Property developer', 'UFO hunter', 'Psychiatrist', 'Psychologist', 'Publican', 'Publisher', 
  'Racing driver', 'Radio presenter', 'Receptionist', 'Refuse collector', 'Reporter', 
  'Researcher', 'Retired', 'Road sweeper', 'Roofer', 'Sailor', 'Salesperson', 'Scaffolder', 
  'School crossing warden', 'School meals supervisor', 'Scientist', 'Sculptor', 'Secretary', 
  'Security guard', 'Ship builder', 'Singer', 'Shoemaker', 'Shop assistant', 'Social worker', 
  'Software consultant', 'Soldier', 'Solicitor', 'Song writer', 'Special constable', 
  'Speech therapist', 'Sports coach', 'Sportsperson', 'Stockbroker', 'Street entertainer', 
  'Professional Dog Walker', 'Surgeon', 'Surveyor', 'Tailor', 'Tarot Reader', 'Tattooist', 
  'Tax inspector', 'Taxi driver', 'Teacher', 'Teaching assistant', 'Telephonist', 'Telesales person', 
  'Television presenter', 'Toilet attendant', 'Tour guide', 'Traffic warden', 'Train driver', 
  'Travel agent', 'Typist', 'Undertaker', 'Video Game Tester', 'Veterinary surgeon', 
  'Waiting staff', 'Window cleaner', 'Zookeeper'
];

const clickSound = new Audio('sounds/tada.mp3');

function getDayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0); // January 1st of the given year
    const diff = date - start + (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

// Function to display the job and play sound
function displayJob() {
    const dateInput = document.getElementById('birthday').value;
    if (!dateInput) {
        alert('Please select your birthday!');
        return;
    }

    // Play the sound
    clickSound.play();

    const birthDate = new Date(dateInput);
    const dayOfYear = getDayOfYear(birthDate); // Get the day of the year (1-365)
    const jobIndex = dayOfYear % jobs.length; // Modulo to wrap around if needed
    const job = jobs[jobIndex];

    document.getElementById('jobDisplay').innerText = job;
    document.getElementById('birthday').style.display = 'none'; // Hide the date input
}

// Event listener for the button click
document.getElementById('getJobButton').addEventListener('click', displayJob);

// Event listener for the "Enter" key press in the date input
document.getElementById('birthday').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        displayJob(); // Trigger the job display when Enter is pressed
    }
});

// Reset button functionality
document.getElementById('resetButton').addEventListener('click', function() {
    const dateInput = document.getElementById('birthday');
    dateInput.value = ''; // Clear the date input
    dateInput.style.display = 'inline'; // Show the date input again
    document.getElementById('jobDisplay').innerText = ''; // Clear the job display
});
