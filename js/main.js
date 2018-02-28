const dataSet = [
    [ "Arina", "Karali", "AKarali", "318", "example@gmail.com" ],
    [ "Yana", "Marienko", "YMarienko", "316", "example@gmail.com" ],
    [ "Maxim", "Gromov", "MGromov", "314", "example@gmail.com" ],
    [ "Ivan", "Karaev", "IKaraev", "141", "example@gmail.com" ],
    [ "Yan", "Marienkov", "YanMar", "245", "example@gmail.com" ],
    [ "Mikhail", "Gromenko", "MGromenko", "544", "example@gmail.com" ],
    [ "Alina", "Ivanova", "AIvanova", "222", "example@gmail.com" ],
    [ "Yana", "Marko", "YanaMarko", "222", "example@gmail.com" ],
    [ "Maxim", "Chemeris", "MChemeris", "114", "example@gmail.com" ],
    [ "Maria", "Omova", "MOmova", "329", "example@gmail.com" ],
    [ "Karina", "Hatsko", "KHatsko", "414", "example@gmail.com" ],
    [ "Maxim", "Karlash", "MKarlash", "341", "example@gmail.com" ],
];

$(document).ready(function(){
    $('#userProfile').hide();
    $('#firstTable').dataTable({
        data: dataSet,
        columns: [
            { title: "First name" },
            { title: "Last name" },
            { title: "Username" },
            { title: "Password" },
            { title: "E-mail" }
        ]
    });
    $("tbody > tr").hover(
        function() {
            $(this).append($("<span id='edit'>*</span>"));
            $("#edit").click(
                function() {
                    $('#userProfile').toggle(
                        function() {
                            $("#firstName").val("asdasdasd");
                            $("#lastName").val("asdasdasd");
                            $("#email").val("asdasdasd");
                            $("#userName").val("asdasdasd");
                            $("#password").val("asdasdasd");
                        }
                    );
                }
            );
        }, function() {
            $(this).find("span:last").remove();
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