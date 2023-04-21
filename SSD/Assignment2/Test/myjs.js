// const coordinates = function(a, b, line_num ) {
//     let $b1 = $("#" + a );
//     let $b2 = $('#' + b);
//     let $line = $(line_num);
//     const padding = 7;
//     const x1 = $b1.offset().left + $b1.width()/2-padding  ;
//     const y1 = $b1.offset().top + $b1.height()/2-padding ;
//     const x2 = $b2.offset().left + $b1.width()/2-padding;
//     const y2 = $b2.offset().top + $b1.height()/2-padding;
//
//     $line.attr("x1", x1);
//     $line.attr("y1", y1);
//     $line.attr("x2", x2);
//     $line.attr("y2", y2);
//     $line.attr('stroke', 'red')
//     $line.attr('stroke-width', 10);
// }
// coordinates('div-9', 'div-6', 'line1');
// coordinates('div-1', 'div-9', 'line2');
// coordinates('div-1', 'div-10', 'line3');
// coordinates('div-2', 'div-6', 'line4');
// coordinates('div-2', 'div-10', 'line5');

//https://www.w3schools.com/jsref/event_ondragover.asp
// $('.box').draggable();


var logdict = {};
step_count = 1

function log(msg){

    logdict["step "+ step_count + ":"] = msg
    step_count = step_count +1
    console.log("Added msg:",msg, logdict  )
}


crow = 1;
var dragged_item;
var dropped_item;
var crow_killed = 0;

const adj = {
    0: [[2, 3], [4, 6]],
    1: [[2, 4], [3, 7]],
    2: [[0, 1, 3, 4], [-1, -1, 5, 8]],
    3: [[0, 2, 5, 6], [-1, 1, -1, 9]],
    4: [[1, 2, 7, 8], [-1, 0, 9, -1]],
    5: [[3, 6], [2, 7]],
    6: [[3, 5, 7, 9], [0, -1, 8, -1]],
    7: [[4, 6, 8, 9], [1, 5, -1, -1]],
    8: [[4, 7], [2, 6]],
    9: [[6, 7], [3, 4]]
}

var flag = {
    'red': true,
    'green': true
}

function reset(param) {
    flag = {
        'red': true,
        'green': true
    }

    flag[param] = false;
}

let position = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var dict = {
    0: "grey",
    1: "grey",
    2: "grey",
    3: "grey",
    4: "grey",
    5: "grey",
    6: "grey",
    7: "grey",
    8: "grey",
    9: "grey",

};


function download(filename, textInput) {

    var element = document.createElement('a');
    element.setAttribute('href','data:text/plain;charset=utf-8, ' + encodeURIComponent(textInput)) ;
    element.setAttribute('download', filename);
    document.body.appendChild(element);
    element.click();
}

document.getElementById("btn").addEventListener("click", function () {
        var text = JSON.stringify(logdict, null, '\t\n')
        var filename = "output.txt";
        download(filename, text);
    }, false);


function CheckAvailability(dragged, dropped) {

    immi = adj[dragged][0]
    next_item = adj[dragged][1]
    console.log("Check Availability function----Dargged item: ", dragged, " Immediate List", immi, " Dropped item: ", dropped)


    if (immi.includes(parseInt(dropped))) {
        console.log("returning true Immediate Item found");
        return true;
    }

    if (dict[dragged] == "red" && next_item.includes(parseInt(dropped))) {

        index = next_item.indexOf(parseInt(dropped));

        intermediate_value = immi[index]

        console.log("Index for the skip", index, ", Intermediate value from the skip index: ", intermediate_value)
        if (position[intermediate_value] == 1) {
            console.log("Crow can be kiled");

            log("Crow is killed at position " + intermediate_value);

            position[intermediate_value] = 0;
            document.getElementById(intermediate_value).style.background = "grey";
            crow_killed = crow_killed + 1;
            console.log("Number of crow killed is incremented. Total crows killed: ", crow_killed)
            return true;
        }
    }
    return false
}

function checkFinish() {

    var finishflag = false

    for (const [key, value] of Object.entries(dict)) {

        if (value == "red") {

            console.log("Inside Check Finish ", key, ":", value, " adj: ", adj[key], ", Position: ", position);
            immi = adj[key][0];
            next_item = adj[key][1];
            immi.forEach(function (value, i) {
                if ([position[value]] == 0) {
                    finishflag = true;
                } else if ([position[next_item[i]]] == 0) {
                    finishflag =  true;
                }
            });
        }
    }
    return finishflag;
}


function Allow_Drop(ev) {
    ev.preventDefault();
}


function dragStart(ev) {

    dragged_item = ev.target.getAttribute('id');
    ev.dataTransfer.setData("text", ev.target.id);
    console.log("dragged_item is(from dragStart) ", dragged_item)
}

function dragEnd(event) {
    document.getElementById("demo").innerHTML = "Finished dragging the p element.";
}

function Drop(evnt) {
    dropped_item = evnt.target.getAttribute('id');

    console.log("Trying to dragged_item is ", dragged_item);
    log("Trying to dragged_item is " + dragged_item);

    console.log("Trying on Dropped_item ", dropped_item);
    log("Trying on Dropped_item  " + dropped_item);

    dragged_item_color = dict[dragged_item]


    if (position[dropped_item] == 0 && ((flag[dict[dragged_item]] == true) || dragged_item > 19)) {

        if (dragged_item > 19) {
            $("#" + dragged_item).remove();
            position[dropped_item] = 1;
            if (dragged_item > 29) {
                document.getElementById(dropped_item).style.background = "red";
                dict[dropped_item] = "red"
                reset("red");
            } else {
                document.getElementById(dropped_item).style.background = "green";
                dict[dropped_item] = "green"
                reset("green");
            }
        } else if (position[dragged_item] == 1 && dragged_item < 19 && CheckAvailability(dragged_item, dropped_item) == true) {

            reset(dict[dragged_item]);

            position[dragged_item] = 0;  //Make the flag for the dragged item as 0
            position[dropped_item] = 1; //Make the flag for the dragged item as 0
            console.log("Dict of dragged item ", dict[dragged_item]);

            document.getElementById(dropped_item).style.background = dict[dragged_item]
            document.getElementById(dragged_item).style.background = "grey";

            dict[dropped_item] = dict[dragged_item];
            dict[dragged_item] = "grey";
        }
    }

    document.getElementById('GFG').innerHTML = "Crow Killed so far -" + crow_killed;

    console.log("dropped/dragged is ", dict[dropped_item]);

    //Check Win or lose
    if (dragged_item_color == "red" && crow_killed > 3) {
        console.log("Checking if red win the game")
        alert("Vulture win the game");

    }
    else if (dict[dropped_item] == "green") {
        console.log("Checking finish for red");
        outcome = checkFinish();
        console.log("Returning ",outcome , "From checkFinish");
        if (outcome == false) {

            alert("Crows win the game");
        }
    }
}