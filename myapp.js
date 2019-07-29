function validate3() {


    let inputPIN = document.getElementById('PIN').value;

    console.log(inputPIN);

    inputPIN = Number(inputPIN);

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
        var dialog = bootbox.dialog({
            title: 'Send Money Confirmation',
            message: "<p>You are sending money. Click 'Send Money' to confirm</p>",
            size: 'large',
            buttons: {
                cancel: {
                    label: "Cancel",
                    className: 'btn-danger',
                    callback: function () {
                        console.log('Custom cancel clicked');
                    }
                },
                ok: {
                    label: "Send Money",
                    className: 'btn-info',
                    callback: function () {
                        location.href = "https://www.bkash.com/";
                    }
                }
            }
        });

        return true;
    }
}