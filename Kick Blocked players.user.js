// ==UserScript==
// @name         Kick Blocked players
// @version      1.0
// @description  kick blocked players
// @author       hyonoka
// @match        https://animemusicquiz.com/*
// @grant        none
// ==/UserScript==


if (document.getElementById("startPage")) return;

let loadInterval = setInterval(() => {
    if (document.getElementById("loadingScreen").classList.contains("hidden")) {
        setup();
        clearInterval(loadInterval);
    }
}, 500);

let blockedPlayers;

function setup () {
    blockedPlayers = socialTab.blockedPlayers;
    new Listener("New Player", ({name}) => {
         isOnBlockedList(name);
    }).bindListener();
    // ==UserScript==
// @name         Kick Blocked players
// @version      1.0
// @description  Count the number of blocked player
// @author       hyonoka
// @match        https://animemusicquiz.com/*
// @grant        none
// ==/UserScript==


if (document.getElementById("startPage")) return;

let loadInterval = setInterval(() => {
    if (document.getElementById("loadingScreen").classList.contains("hidden")) {
        setup();
        clearInterval(loadInterval);
    }
}, 500);

let blockedPlayers;

function setup () {
    blockedPlayers = socialTab.blockedPlayers;
    new Listener("New Player", ({name}) => {
         isOnBlockedList(name);
    }).bindListener();
    new Listener("New Spectator", ({name}) => {
         isOnBlockedList(name);
    }).bindListener();
}

function isOnBlockedList(name){
    if(blockedPlayers.includes(name)){
        kickPlayer(name);
    }
}

function kickPlayer(name){
        socket.sendCommand({
        type: 'lobby',
        command: 'kick player',
        data: {
            playerName: name
        }
    })
}

}

function isOnBlockedList(name){
    if(blockedPlayers.includes(name)){
        kickPlayer(name);
    }
}

function kickPlayer(name){
        socket.sendCommand({
        type: 'lobby',
        command: 'kick player',
        data: {
            playerName: name
        }
    })
}


