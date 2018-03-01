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
                  return "<a id='linkToProfile' href='#' onclick='createLink();'>"+data.firstName+" "+data.lastName+"</a>";
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
});
function createLink(data) {
    $('#userProfile').toggle(
        function() {
            $("#firstName").val(data.firstName);
            $("#lastName").val(data.lastName);
            $("#email").val(data.email);
            $("#userName").val(data.userName);
            $("#password").val(data.password);
        }
    );
}
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