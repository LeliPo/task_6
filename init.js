
document.getElementById('generation').addEventListener('click', function() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('surnameOutput').innerText = initPerson.surnameJson;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    document.getElementById('birthYearOutput').innerText = initPerson.year;
    document.getElementById('birthMonthOutput').innerText = initPerson.month;
    document.getElementById('birthDayOutput').innerText = initPerson.day;
    document.getElementById('comma').innerText = ",";
});

document.getElementById('clear').addEventListener('click', function() {
    document.getElementById('firstNameOutput').innerText = " ";
    document.getElementById('genderOutput').innerText = " ";
    document.getElementById('patronymicOutput').innerText = " ";
    document.getElementById('surnameOutput').innerText = " ";
    document.getElementById('professionOutput').innerText = " ";
    document.getElementById('birthYearOutput').innerText = " ";
    document.getElementById('birthMonthOutput').innerText = " ";
    document.getElementById('birthDayOutput').innerText = " ";
    document.getElementById('comma').innerText = " ";
});

