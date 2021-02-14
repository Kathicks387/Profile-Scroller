// Data
const data = [
    {
        name: 'John Doe',
        age: 54,
        gender: 'male',
        lookingfor: 'female',
        location: 'Fort Wayne, Indiana',
        image: 'https://randomuser.me/api/portraits/men/80.jpg'
    },
    {
        name: 'Mike Carter',
        age: 24,
        gender: 'male',
        lookingfor: 'female',
        location: 'Fort Worth, Texas',
        image: 'https://randomuser.me/api/portraits/men/81.jpg'
    },
    {
        name: 'Sally Harper',
        age: 21,
        gender: 'female',
        lookingfor: 'male',
        location: 'St. Louis, Missouri',
        image: 'https://randomuser.me/api/portraits/women/81.jpg'
    },
    {
        name: 'Robert Thomas',
        age: 43,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston, Massachuetts',
        image: 'https://randomuser.me/api/portraits/men/89.jpg'
    },
    {
        name: 'Diane Harris',
        age: 33,
        gender: 'female',
        lookingfor: 'male',
        location: 'Akron, Ohio',
        image: 'https://randomuser.me/api/portraits/women/80.jpg'
    },
    {
        name: 'Harold Ballard',
        age: 35,
        gender: 'male',
        lookingfor: 'female',
        location: 'Denver, Colorado',
        image: 'https://randomuser.me/api/portraits/men/9.jpg'
    },
    {
        name: 'Janet Taylor',
        age: 37,
        gender: 'female',
        lookingfor: 'male',
        location: 'Los Angeles, California',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'Laura Chandler',
        age: 28,
        gender: 'female',
        lookingfor: 'female',
        location: 'Portland, Oregon',
        image: 'https://randomuser.me/api/portraits/women/22.jpg'
    }
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
    const currentProfile = profiles.next().value;

if(currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Gender: ${currentProfile.gender}</li>
        <li class="list-group-item">Preference: ${currentProfile.lookingfor}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
    </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
} else {
    // No more profiles
    window.location.reload();
}

}

// Profile Iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < profiles.length ? 
            { value: profiles [nextIndex++], done: false } : 
            { done: true }
        }
    };
}