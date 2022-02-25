function printError(elmId, hintMsg) {
    document.getElementById(elmId).innerHTML = hintMsg;
}

function validateform() {
    //alert("please ");
    var fullname = document.contactForm.fullname.value;
    var emailaddress = document.contactForm.emailaddress.value;
    var phonenumber = document.contactForm.phonenumber.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;
    var hobbies = [];
    var checkboxes = document.getElementById("hobbies[]");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            hobbies.push(checkboxes[i].value);
        }
    }
    var fullnameErr = emailaddressErr = phonenumberErr = countryErr = genderErr = true;

    if (fullname == "") {
        alert("checking fullname");
        printError("fullnameErr", "please enter your fullname");
    } else {
        var regex = /^[a-zA-Z\s]{4,7}$/;
        if (regex.test(fullname) === false) {
            printError("fullnameErr", "invalid fullname,please check once again");

        } else {
            printError("fullnameErr", "");
            fullnameErr = false;
        }
    }
    if (emailaddress == "") {
        printError("emailaddressErr", "please enter your emailaddressErr");
    } else {
        var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (regex.test(emailaddress) === false) {
            printError("emailaddressErr", "invalid emailaddress,please check once again");

        } else {
            printError("emailaddressErr", "");
            emailaddressErr = false;
        }
    }
    if (phonenumber == "") {
        printError("phonenumberErr", "please enter your phonenumber");
    } else {
        var regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        if (regex.test(phonenumber) === false) {
            printError("phonenumberErr", "invalid phonenumber,please check once again");

        } else {
            printError("phonenumberErr", "");
            phonenumberErr = false;
        }
    }
    if (country == "") {
        printError("countryErr", "please select any country");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }
    if (gender == "") {
        printError("genderErr", "please select gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }

    if ((fullnameErr || emailaddressErr || phonenumberErr || countryErr || genderErr) === true) {
        return false;
    } else {
        var dataPreview = `
            You've entered the following details \n 
            fullname: ${fullname} \n 
            emailaddress: ${emailaddress} \n  
            phonenumber: ${phonenumber} \n 
            country: ${country} \n 
            gender: ${gender} \n 
        `;

        if (hobbies.length) {
            dataPreview += `
                hobbies: ${hobbies} \n
            `
        }

        alert(dataPreview);
    }

}