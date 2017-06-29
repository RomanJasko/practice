function onGetCaptureValue(formMappingId, value, controls) {
    if (formMappingId === 418506) {

        value = (function(dl) {
            for (var i = 0; i < dl.length; i++)
                if (dl[i]['user.profile.country'])
                    return dl[i]['user.profile.country'];
        })(dataLayer);
        console.log("CHANGE 1");
    }
    return value;
}

function anotherOne {
    console.log('this is another function');
}


function functionThree {
    console.log('this is function three added 29.06');
}