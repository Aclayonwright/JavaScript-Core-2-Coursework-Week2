function listOfNames(arrayOfPeople) {
    let content = document.querySelector('#content');

    arrayOfPeople.forEach((person) => {
        const name = document.createElement('h1');
        const job = document.createElement('h2');

        name.innerText = person.name;
        job.innerText = person.job;

        content.append(name, job);
    });
}

let people = [
    { name: 'Emma', job: 'Developer' },
    { name: 'Anna', job: 'Arist' },
    { name: 'Tim', job: 'painter' },
];

listOfNames(people);