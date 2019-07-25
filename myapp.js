function validate3() {


    let inputPIN = document.getElementById('PIN').value;

    console.log(inputPIN);

    if ((inputPIN > 99999) || (inputPIN < 10000)) {
        bootbox.alert({
            message: "PIN should be of 5 digits.",
            size: 'medium'
        });
    }

    else if (!(Number.isInteger(inputPIN))) {
        bootbox.alert({
            message: "PIN can only be whole numbers. Alphabets or special characters are not allowed.",
            size: 'large'
        });
        return false;
    }

    else {
        bootbox.alert({
            message: "Your money has been sent",
            size: 'medium'
        });
        return true;
    }
}