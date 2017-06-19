var app = angular.module("myApp", ["firebase"]);

app.controller("myCtrl", function($scope, $firebaseArray) {
    var ref = firebase.database().ref().child('chat/');
    var ref_order = firebase.database().ref().child('CallOrder/').limitToLast(1);
    var ref_player_list = firebase.database().ref().child('playersList/');
    var ref_litson = firebase.database().ref().child('teamLitson/');
    var ref_edwin = firebase.database().ref().child('Team-Edwin/');
    var ref_jasir = firebase.database().ref().child('Team-Jasir/');
    var ref_alex = firebase.database().ref().child('Team-Alex/');
    var ref_ferdinand = firebase.database().ref().child('Team-Ferdinand/');
    var ref_alistar = firebase.database().ref().child('Team-Alistar/');
    var ref_kanil = firebase.database().ref().child('Team-Kanil/');
    var ref_chandik = firebase.database().ref().child('Team-Chandik/');
    // download the data into a local object
    $scope.posts = $firebaseArray(ref);
    $scope.order = $firebaseArray(ref_order);
    $scope.players = $firebaseArray(ref_player_list);
    $scope.alex = $firebaseArray(ref_alex);
    $scope.alistar = $firebaseArray(ref_alistar);
    $scope.chandik = $firebaseArray(ref_chandik);
    $scope.edwin = $firebaseArray(ref_edwin);
    $scope.ferdinand = $firebaseArray(ref_ferdinand);
    $scope.jasir = $firebaseArray(ref_jasir);
    $scope.kanil = $firebaseArray(ref_kanil);
    $scope.litson = $firebaseArray(ref_litson);
    console.log($scope.posts.length);


    var litson_token;
    var edwin_token;
    var jasir_token;
    var ferdinand_token;
    var alex_token;
    var alistar_token;
    var chandik_token;
    var kanil_token;
    var deletePlayer;

    $scope.litsonfn = function() {
        Materialize.toast('Selected Team : Litson', 3000);
        litson_token = true;
        console.log(litson_token);
    }

    $scope.edwinfn = function() {
        Materialize.toast('Selected Team : Edwin', 3000);
        edwin_token = true;
    }

    $scope.alexfn = function() {
        Materialize.toast('Selected Team : Alex', 3000);
        alex_token = true;
    }

    $scope.jasirfn = function() {
        Materialize.toast('Selected Team : Jasir', 3000);
        jasir_token = true;
    }

    $scope.ferdinandfn = function() {
        Materialize.toast('Selected Team : Ferdinand', 3000);
        ferdinand_token = true;
    }

    $scope.alistarfn = function() {
        Materialize.toast('Selected Team : Alistar', 3000);
        alistar_token = true;
    }

    $scope.chandikfn = function() {
        Materialize.toast('Selected Team : Chandik', 3000);
        chandik_token = true;
    }

    $scope.kanilfn = function() {
        Materialize.toast('Selected Team : Kanil', 3000);
        kanil_token = true;
    }

    $scope.addPlayersToTeam = function(name, position, rating, id) {
        if (litson_token == true) {
            if (confirm("Are you sure you want to add " + name + " to your team ?!") == true) {
                firebase.database().ref('teamLitson/').push({
                    Player: name,
                    Position: position,
                    Rating: rating
                });
                console.log(id);
                deletePlayer = true;
                Materialize.toast(name + ' Added to your Team. Congratulations', 2000);
                litson_token = false;
            } else {
                deletePlayer = false;
                Materialize.toast(name + ' Not added to your Team', 2000);
            }
        } else if (edwin_token == true) {
            if (confirm("Are you sure you want to add " + name + " to your team ?!") == true) {
                firebase.database().ref('Team-Edwin/').push({
                    Player: name,
                    Position: position,
                    Rating: rating
                });
                console.log(id);
                deletePlayer = true;
                Materialize.toast(name + ' Added to your Team. Congratulations', 2000);
                edwin_token = false;
            } else {
                deletePlayer = false;
                Materialize.toast(name + ' Not added to your Team', 2000);
            }
        } else if (jasir_token == true) {
            if (confirm("Are you sure you want to add " + name + " to your team ?!") == true) {
                firebase.database().ref('Team-Jasir/').push({
                    Player: name,
                    Position: position,
                    Rating: rating
                });
                console.log(id);
                deletePlayer = true;
                Materialize.toast(name + ' Added to your Team. Congratulations', 2000);
                jasir_token = false;
            } else {
                deletePlayer = false;
                Materialize.toast(name + ' Not added to your Team', 2000);
            }
        } else if (alex_token == true) {
            if (confirm("Are you sure you want to add " + name + " to your team ?!") == true) {
                firebase.database().ref('Team-Alex/').push({
                    Player: name,
                    Position: position,
                    Rating: rating
                });
                console.log(id);
                deletePlayer = true;
                Materialize.toast(name + ' Added to your Team. Congratulations', 2000);
                alex_token = false;
            } else {
                deletePlayer = false;
                Materialize.toast(name + ' Not added to your Team', 2000);
            }
        } else if (ferdinand_token == true) {
            if (confirm("Are you sure you want to add " + name + " to your team ?!") == true) {
                firebase.database().ref('Team-Ferdinand/').push({
                    Player: name,
                    Position: position,
                    Rating: rating
                });
                console.log(id);
                deletePlayer = true;
                Materialize.toast(name + ' Added to your Team. Congratulations', 2000);
                ferdinand_token = false;
            } else {
                deletePlayer = false;
                Materialize.toast(name + ' Not added to your Team', 2000);
            }
        } else if (kanil_token == true) {
            if (confirm("Are you sure you want to add " + name + " to your team ?!") == true) {
                firebase.database().ref('Team-Kanil/').push({
                    Player: name,
                    Position: position,
                    Rating: rating
                });
                console.log(id);
                deletePlayer = true;
                Materialize.toast(name + ' Added to your Team. Congratulations', 2000);
                kanil_token = false;
            } else {
                deletePlayer = false;
                Materialize.toast(name + ' Not added to your Team', 2000);
            }
        } else if (alistar_token == true) {
            if (confirm("Are you sure you want to add " + name + " to your team ?!") == true) {
                firebase.database().ref('Team-Alistar/').push({
                    Player: name,
                    Position: position,
                    Rating: rating
                });
                console.log(id);
                deletePlayer = true;
                Materialize.toast(name + ' Added to your Team. Congratulations', 2000);
                alistar_token = false;
            } else {
                deletePlayer = false;
                Materialize.toast(name + ' Not added to your Team', 2000);
            }
        } else if (chandik_token == true) {
            if (confirm("Are you sure you want to add " + name + " to your team ?!") == true) {
                firebase.database().ref('Team-Chandik/').push({
                    Player: name,
                    Position: position,
                    Rating: rating
                });
                console.log(id);
                deletePlayer = true;
                Materialize.toast(name + ' Added to your Team. Congratulations', 2000);
                chandik_token = false;
            } else {
                deletePlayer = false;
                Materialize.toast(name + ' Not added to your Team', 2000);
            }
        } else {
            console.log("Choose the team");
            Materialize.toast('Select your Team', 3000);
        }
    }

    $scope.deletePost = function(list) {
        if (deletePlayer == true) {
            console.log("deleting");
            $scope.players.$remove(list);
            deletePlayer = false;
        } else {
            console.log("not deleting");
        }
    }
});

function scrollDown() {

    document.body.scrollTop = document.body.scrollHeight;
}

var resultsArray = [];
var user;

function crunch() {
    var sort = false;
    var min = '1';
    var max = '8';
    var resultCount = '8';


    function newNumber() {
        if (min == 0) {
            var result = Math.floor(Math.random() * (max + 1));
        } else if (min < 0 && max >= 0) {
            var result =
                Math.ceil(Math.random() * (min - 1)) +
                Math.floor(Math.random() * (max + 1));
        } else if (min < 0 && max < 0) {
            var result = Math.ceil(Math.random() * (min - 1)) + max;
        } else {
            var result = Math.floor(Math.random() * max + 1);
        }
        if (result < min || (resultsArray.includes(result))) {
            return newNumber();
        }
        //console.log(result);
        resultsArray.push(result);
    }

    for (i = 1; i <= resultCount; i++) {
        newNumber();
    }
    console.log(resultsArray);
    var litson = resultsArray[0];
    var jasir = resultsArray[1];
    var edwin = resultsArray[2];
    var ferdinand = resultsArray[3];
    var alex = resultsArray[4];
    var alistar = resultsArray[5];
    var kanil = resultsArray[6];
    var chandik = resultsArray[7];
    firebase.database().ref('CallOrder/').push({
        litson: litson,
        jasir: jasir,
        edwin: edwin,
        ferdinand: ferdinand,
        alex: alex,
        alistar: alistar,
        kanil: kanil,
        chandik: chandik
    });
    resultsArray = [];
    document.getElementById("order-generate").disabled = true;
    setTimeout(function() {
        document.getElementById("order-generate").disabled = false;
    }, 60000);
}





function push() {
    document.body.scrollTop = document.body.scrollHeight;
    if (document.getElementById("chat_text").value.trim() !== '') {
        var ini = document.getElementById('chat_text').value;
        var date1 = new Date();
        firebase.database().ref('chat/').push({
            Message: ini,
            UserName: user.displayName,
            'createdDate': date1.toLocaleString(),
            'sortDate': 0 - Date.now()
        });

    } else {
        document.getElementById("chat_text").focus();
    }

    document.getElementById("chat_text").value = '';
    var date1 = new Date();
    console.log(date1.toLocaleString());
    document.getElementById("chat_text").focus();

}

function pushPlayer() {
    if (document.getElementById("player_name").value.trim() !== '' && document.getElementById("player_position").value.trim() && document.getElementById("player_rating").value.trim() !== '') {
        var playerName = document.getElementById('player_name').value;
        var playerPosition = document.getElementById('player_position').value;
        var playerRating = document.getElementById('player_rating').value;
        firebase.database().ref('playersList/').push({
            Name: playerName,
            Position: playerPosition,
            Rating: playerRating
        });
        Materialize.toast('Player Added to the database', 500);
    } else {
        Materialize.toast('Type the Details Dude ;)', 1000);
    }

    document.getElementById("player_name").value = '';
    document.getElementById("player_position").value = '';
    document.getElementById("player_rating").value = '';
    document.getElementById("player_name").focus();
}