const dataSet = [
    {
        firstName: "Arina",
        lastName: "Karali",
        userName: "AKarali",
        password: "311",
        email: "example@gmail.com"
    }, {
        firstName: "Yana",
        lastName: "Marienko",
        userName: "YMarienko",
        password: "312",
        email: "example@gmail.com"
    }, {
        firstName: "Max",
        lastName: "Gromov",
        userName: "MGromov",
        password: "313",
        email: "example@gmail.com"
    }, {
        firstName: "Ivan",
        lastName: "Karaev",
        userName: "IKaraev",
        password: "314",
        email: "example@gmail.com"
    }, {
        firstName: "Yan",
        lastName: "Markov",
        userName: "YanMar",
        password: "315",
        email: "example@gmail.com"
    }, {
        firstName: "Anna",
        lastName: "Ivanova",
        userName: "AIvanova",
        password: "316",
        email: "example@gmail.com"
    }, {
        firstName: "Marina",
        lastName: "Petrova",
        userName: "MPetrova",
        password: "317",
        email: "example@gmail.com"
    }, {
        firstName: "Katya",
        lastName: "Hordienko",
        userName: "KHordienko",
        password: "318",
        email: "example@gmail.com"
    }, {
        firstName: "Maxim",
        lastName: "Karlash",
        userName: "MKarlash",
        password: "319",
        email: "example@gmail.com"
    }, {
        firstName: "Mykola",
        lastName: "Kovtun",
        userName: "MKovtun",
        password: "320",
        email: "example@gmail.com"
    }, {
        firstName: "Yaroslav",
        lastName: "Isaev",
        userName: "YIsaev",
        password: "321",
        email: "example@gmail.com"
    }, {
        firstName: "Alina",
        lastName: "Horbenko",
        userName: "AHorbenko",
        password: "322",
        email: "example@gmail.com"
    }
];

$(document).ready(function(){
    $('#userProfile').hide();
    $('#firstTable').dataTable({
        data: dataSet,
        columns: [
            { title: "Full name",
              data: null,
              render: function( data, type, row ) {
                  return `<a id='_id_${data.userName}' href='#userProfile'>${data.firstName} ${data.lastName}</a>`;
                }
            },
            { title: "User name",
              data: "userName" 
            },
            { title: "Password",
              data: "password"
            },
            { title: "E-mail",
              data: "email"
            }
        ]
    }); 
    $('#firstTable').on('click', '[id^=_id_]',
        function() { 
            let gotID = this.id.substr(4);
            if ($('#userProfile').is(':hidden')) {
                $('#userProfile').show(
                    function() {
                        for (let user of dataSet) {
                            if (user.userName === gotID) {
                                $("#firstName").val(user.firstName);
                                $("#lastName").val(user.lastName);
                                $("#email").val(user.email);
                                $("#userName").val(user.userName);
                                $("#password").val(user.password);
                                break;
                            }
                        }
                    }
                );
            } else if (gotID === $("#userName").val()) {
                $('#userProfile').hide();
            } else {
                for (let user of dataSet) {
                    if (user.userName === gotID) {
                        $("#firstName").val(user.firstName);
                        $("#lastName").val(user.lastName);
                        $("#email").val(user.email);
                        $("#userName").val(user.userName);
                        $("#password").val(user.password);
                        break;
                    }
                }
            }
            return false; 
        }
    );
});

(function() {
    'use strict';

    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');

      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();