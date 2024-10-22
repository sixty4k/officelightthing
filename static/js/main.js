function toggleAllLights(status) {
    $.ajax({ type: 'GET', url: '/light/all/' + status });
}

function toggleLight(status, name) {
    $.ajax({ type: 'GET', url: '/light/' + name + '/' + status });
}

function reboot() {
    console.log('Rebooting...');
    $.ajax({ type: 'GET', url: '/reboot' });
}

function statusLight(name) {
    $.ajax({type: 'GET', url: '/light/' + name, data: "", datatype: 'json'})

    var tag=document.getElementById(name);

    if ( data['light_on'] == "true" ) {
        tag.style.color="green";
    } else {
        tag.style.color="blue";
    };

    return data['light_on']
}

