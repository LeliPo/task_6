const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Яна",
            "id_3": "Алёна",
            "id_4": "Анастасия",
            "id_5": "Юлия",
            "id_6": "Елизавета",
            "id_7": "Наталья",
            "id_8": "Наталия",
            "id_9": "Ирина",
            "id_10": "Мария"
        }
    }`,
    randomPatronymic: function() { 
        patronymic = this.randomValue(this.firstNameMaleJson);
        if (this.person.gender == 'Мужчина') {
            if (patronymic.includes('й')) {
                patronymic = patronymic.replace("й", "евич");
            } else
            if (patronymice.includes('Никита')) {
                patronymic = patronymic.replace("а", "ич");
            } else
            patronymic = patronymic + "ович";
        } else
 
        if (this.person.gender == 'Женщина') {
            if (patronymic.includes('й')) {
                patronymic = patronymic.replace("й", "евна");
            } else
            if (patronymic.includes('Никита')) {
                patronymic = patronymic.replace("а", "ична");
            } else
            patronymic = patronymic + "овна"; 
        }
        return patronymic;
    },
    professionFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Менеджер",
            "id_2": "Учительница",
            "id_3": "Актриса",
            "id_4": "Графический дизайнер",
            "id_5": "Разработчик сайтов",
            "id_6": "Переводчица",
            "id_7": "Косметолог",
            "id_8": "Визажист",
            "id_9": "Певица",
            "id_10": "Музыкальный педагог"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Моряк",
            "id_2": "Автослесарь",
            "id_3": "ИТ-специалист",
            "id_4": "Дальнобойщик",
            "id_5": "Полицейский",
            "id_6": "Водолаз",
            "id_7": "Металлург",
            "id_8": "Шахтер",
            "id_9": "Военнослужащий",
            "id_10": "Пожарный"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomGender: function() {
    return Math.floor(Math.random()*2) ==1? this.GENDER_MALE : this.GENDER_FEMALE;
    },
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  
        return obj.list[prop];
    },

    randomFirstName: function() {
        if (this.person.gender == 'Женщина') {
        return this.randomValue(this.firstNameFemaleJson);
            } else{
            return this.randomValue(this.firstNameMaleJson);
            }

    },


     randomSurname: function() {
        if (this.person.gender == 'Женщина') {
        return this.randomValue(this.surnameJson)+ "a";
        }else{
            return this.randomValue(this.surnameJson);
        }
    },
    
    randomProfession: function(){
        if (this.person.gender == 'Женщина') {
            return this.randomValue(this.professionFemaleJson);
        } else{
            return this.randomValue(this.professionMaleJson);
        }
    },
    
    randomMonth31: function randomMonth() { 
        let months = [`января`, `марта`, `мая`,	`июля`,	`августа`, `октября`, `декабря`];
        let month = months[Math.floor(Math.random() * 7)];
        return month;
    },
    randomMonthFeb28: function randomMonth() { 
		let month = `февраля`
		return month;
	},
    randomMonth30: function randomMonth() { 
        let months = [`апреля`, `июня`, `сентября`, `ноября`];
        let month = months[Math.floor(Math.random() * 4)];
        return month;
    },

    
    randomYear: function() {
        return this.randomIntNumber(1973,2001) + " года рождения";
    },

    


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.surnameJson = this.randomSurname();
        this.person.firstName = this.randomFirstName();
        this.person.patronymic = this.randomPatronymic();
        this.person.profession = this.randomProfession();
        if (mon === 0) {
            this.person.month = this.randomMonth31();
            this.person.day = this.randomIntNumber(1, 31); 
        } else if (mon === 1) {
            this.person.month = this.randomMonthFeb28();
            this.person.day = this.randomIntNumber(1, 28); 
        } else if (mon === 2) {
            this.person.month = this.randomMonth30();
            this.person.day = this.randomIntNumber(1, 30);
        }
        this.person.year = this.randomYear();
        
        
        return this.person;
    }
};
const mon = Math.floor(Math.random() * 3);