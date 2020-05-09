var servers = [true, true, false, true];



for (var i = 0; i < servers.length; i++) {

    if (servers[i]) {
        checkStatus(i);
    } else {
        console.log('Server ' + i + ', down.Restarting');
        restartServer(i)
        i--;
    }
}

function checkStatus(i) {
    console.log('Server ' + i + '.Running');
}

function restartServer(i) {
    servers[i] = true;
}