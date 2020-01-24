$.ajax({
    url: "https://api.myjson.com/bins/wqc36",
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (data, textStatus, jqXHR) {
        for(let i of data){
            let application = document.createElement('div');
            application.setAttribute('class','application');

            let name = document.createElement('p');
            name.innerHTML = '<b>Մասնակից՝</b> '+i._name;

            let team = document.createElement('p');
            team.innerHTML = '<b>Խմբային աշխատանքի դեպքում նշել մյուս հեղինակների անունները`</b> '+i._team;

            let teacher = document.createElement('p');
            teacher.innerHTML = '<b>Խորհրդատու ուսուցիչ՝</b> '+i._teacher;

            let email = document.createElement('p');
            email.innerHTML = '<b>Էլեկտրոնային փոստի հասցե`</b> '+i._email;

            let city = document.createElement('p');
            city.innerHTML = '<b>Երկիր, մարզ, քաղաք, գյուղ՝</b> '+i._city;

            let school = document.createElement('p');
            school.innerHTML = '<b>Հաստատություն՝</b> '+i._school;

            let _class = document.createElement('p');
            _class.innerHTML = '<b>Դպրոց, դասարան՝</b> '+i._class;

            application.appendChild(name);
            application.appendChild(team);
            application.appendChild(teacher);
            application.appendChild(email);
            application.appendChild(city);
            application.appendChild(school);
            application.appendChild(_class);

            document.getElementsByClassName('applications')[0].appendChild(application);
        }
    }
});
