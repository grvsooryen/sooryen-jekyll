//Form Validation


    function validateEuropeForm(elem) {
        var error = false;
        var name = $("#form-name").val();
        var email = $("#form-email").val();
        var number = $("#form-number").val();
        var website = $("#form-website").val();
        var country = $("#form-country").val();
        var state = $("#form-state").val();
        var city = $("#form-city").val();
        var message = $("#form-message").val();
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i

    if (name == null || name == "") {        
        $("#form-name").addClass("red-alert");
        $("#form-name").attr("placeholder", "Type your Name here");
        error = true;
    } else {
        $("#form-name").removeClass("red-alert");
        $("#form-name").attr("placeholder", "Name");
        
    }

    if (email == null || !re.test(email)) {        
        $("#form-email").addClass("red-alert");
        $("#form-email").attr("placeholder", "Type your Email here"); 
        error = true; 
    } else  {
        $("#form-email").removeClass("red-alert");
        $("#form-email").attr("placeholder", "Email");  
    }

    if (error == true) {
        return false;
    }

    $.getJSON('../php/europe-form.php', $(elem).serialize(), function(data) {
        // jsondata = JSON.stringify(data);
        // console.log(jsondata);
        if (data.result == "success"){
            $(".sent").show("fade", 250, function() {
                $(".sent").hide("fade", 2600, function() {
                    elem.reset();
                });
            });
        } else {
            console.log("sending email failed");
            $(".failed").show("fade", 250, function() {
                $(".failed").hide("fade", 2600, function() {
                   
                });
            });
        }
    });

    return false;

    }