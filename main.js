// true => dot, false => cross
var turn = true;

var cpu = true;
var playing = false;
var rows = 3;
var cols = 3;
var player1 = false;
$(document).ready(function(){
    $('.gamebtn').click(function(){
        if(playing){

            if(escape($(this).text()) == "%u2063"){
                FillBox(this);
                var win = CheckForWin();
                if(win == true){
                    playing = false;
                }
                else if(win == "full"){
                    playing = false;
                    $('#turntext').text("DRAW!");
                }
                else{
                    turn = !turn;
                    UpdateTurnText();
                    if(cpu){
                        CpuTurn();
                    }
                }
            }
        }
    });

    $('#cpubtn').click(function(){
        $('#cpubtn').addClass('selected');
        $('#2playerbtn').addClass('deselected');
        $('#cpubtn').removeClass('deselected');
        $('#2playerbtn').removeClass('selected');
        cpu = true;
    });
    $('#2playerbtn').click(function(){
        $('#2playerbtn').addClass('selected');
        $('#cpubtn').addClass('deselected');
        $('#2playerbtn').removeClass('deselected');
        $('#cpubtn').removeClass('selected');
        cpu = false;
    });

    $('#obtn').click(function(){
        $('#obtn').addClass('selected');
        $('#xbtn').addClass('deselected');
        $('#obtn').removeClass('deselected');
        $('#xbtn').removeClass('selected');
        player1 = true;
    });
    $('#xbtn').click(function(){
        $('#xbtn').addClass('selected');
        $('#obtn').addClass('deselected');
        $('#xbtn').removeClass('deselected');
        $('#obtn').removeClass('selected');
        player1 = false;
    });

    $('#playbtn').click(function(){
        $('#options').prop('hidden', true);
        $('#game').prop('hidden', false);
        playing = true;
        turn = true;

        if(cpu){
            if(player1 != turn){
                CpuTurn();
                turn = player1;
            }
        }
        UpdateTurnText();
    });

    $('#resetbtn').click(function(){
        ResetGame();
        playing = true;
        turn = true;
        if(cpu){
            if(player1 != turn){
                CpuTurn();
                turn = player1;
            }
        }
        UpdateTurnText();
    });
    $('#optionsbtne').click(function(){
        $('#options').prop('hidden', false);
        $('#game').prop('hidden', true);
        ResetGame();
        playing = false;
        turn = true;

    });

});

function FillBox(thing){
    if(turn){
        $(thing).text("◯");
    }
    else{
        $(thing).text("⛌");
    }
}

function ResetGame(){
    $('.gamebtn').text(unescape("%u2063"));
    $('.gamebtn').removeClass("gamebtnwin");
    $('#turntext').text(unescape("%u2063"));
}
function CheckForWin(){

    playing = false;

    var i = 1;
    var j = 2;
    var k = 3;
    var ref = [null, null, null, null, null, null, null, null, null];

    if($('#gameb' + i.toString()).text() == $('#gameb' + j.toString()).text() && $('#gameb' + j.toString()).text() == $('#gameb' + k.toString()).text() && escape($('#gameb' + i.toString()).text()) != "%u2063"){
        $('#gameb' + i.toString()).addClass("gamebtnwin");
        $('#gameb' + j.toString()).addClass("gamebtnwin");
        $('#gameb' + k.toString()).addClass("gamebtnwin");
        $('#turntext').text($('#gameb' + i.toString()).text() + " wins!");
        return true;
    }
    i = 4;
    j = 5;
    k = 6;
    if($('#gameb' + i.toString()).text() == $('#gameb' + j.toString()).text() && $('#gameb' + j.toString()).text() == $('#gameb' + k.toString()).text() && escape($('#gameb' + i.toString()).text()) != "%u2063"){
        $('#gameb' + i.toString()).addClass("gamebtnwin");
        $('#gameb' + j.toString()).addClass("gamebtnwin");
        $('#gameb' + k.toString()).addClass("gamebtnwin");
        $('#turntext').text($('#gameb' + i.toString()).text() + " wins!");
        return true;
    }
    i = 7;
    j = 8;
    k = 9;
    if($('#gameb' + i.toString()).text() == $('#gameb' + j.toString()).text() && $('#gameb' + j.toString()).text() == $('#gameb' + k.toString()).text() && escape($('#gameb' + i.toString()).text()) != "%u2063"){
        $('#gameb' + i.toString()).addClass("gamebtnwin");
        $('#gameb' + j.toString()).addClass("gamebtnwin");
        $('#gameb' + k.toString()).addClass("gamebtnwin");
        $('#turntext').text($('#gameb' + i.toString()).text() + " wins!");
        return true;
    }
    i = 1;
    j = 4;
    k = 7;
    if($('#gameb' + i.toString()).text() == $('#gameb' + j.toString()).text() && $('#gameb' + j.toString()).text() == $('#gameb' + k.toString()).text() && escape($('#gameb' + i.toString()).text()) != "%u2063"){
        $('#gameb' + i.toString()).addClass("gamebtnwin");
        $('#gameb' + j.toString()).addClass("gamebtnwin");
        $('#gameb' + k.toString()).addClass("gamebtnwin");
        $('#turntext').text($('#gameb' + i.toString()).text() + " wins!");
        return true;
    }
    i = 2;
    j = 5;
    k = 8;
    if($('#gameb' + i.toString()).text() == $('#gameb' + j.toString()).text() && $('#gameb' + j.toString()).text() == $('#gameb' + k.toString()).text() && escape($('#gameb' + i.toString()).text()) != "%u2063"){
        $('#gameb' + i.toString()).addClass("gamebtnwin");
        $('#gameb' + j.toString()).addClass("gamebtnwin");
        $('#gameb' + k.toString()).addClass("gamebtnwin");
        $('#turntext').text($('#gameb' + i.toString()).text() + " wins!");
        return true;
    }
    i = 3;
    j = 6;
    k = 9;
    if($('#gameb' + i.toString()).text() == $('#gameb' + j.toString()).text() && $('#gameb' + j.toString()).text() == $('#gameb' + k.toString()).text() && escape($('#gameb' + i.toString()).text()) != "%u2063"){
        $('#gameb' + i.toString()).addClass("gamebtnwin");
        $('#gameb' + j.toString()).addClass("gamebtnwin");
        $('#gameb' + k.toString()).addClass("gamebtnwin");
        $('#turntext').text($('#gameb' + i.toString()).text() + " wins!");
        return true;
    }
    i = 1;
    j = 5;
    k = 9;
    if($('#gameb' + i.toString()).text() == $('#gameb' + j.toString()).text() && $('#gameb' + j.toString()).text() == $('#gameb' + k.toString()).text() && escape($('#gameb' + i.toString()).text()) != "%u2063"){
        $('#gameb' + i.toString()).addClass("gamebtnwin");
        $('#gameb' + j.toString()).addClass("gamebtnwin");
        $('#gameb' + k.toString()).addClass("gamebtnwin");
        $('#turntext').text($('#gameb' + i.toString()).text() + " wins!");
        return true;
    }
    i = 3;
    j = 5;
    k = 7;
    if($('#gameb' + i.toString()).text() == $('#gameb' + j.toString()).text() && $('#gameb' + j.toString()).text() == $('#gameb' + k.toString()).text() && escape($('#gameb' + i.toString()).text()) != "%u2063"){
        $('#gameb' + i.toString()).addClass("gamebtnwin");
        $('#gameb' + j.toString()).addClass("gamebtnwin");
        $('#gameb' + k.toString()).addClass("gamebtnwin");
        $('#turntext').text($('#gameb' + i.toString()).text() + " wins!");
        return true;
    }
    playing = true;

    if(CheckIsFull()){
        return "full";
    }
}
function CheckIsFull(){
    var full = true;
    for(var i = 0; i < rows * cols; i++){
        if(escape($('#gameb' + (i+1).toString()).text()) == "%u2063"){
            escape("BOOP");
            return false;
        }
    }
    return true;
}
function UpdateTurnText(){
    var text = "TURN: ";
    if(turn){
        text += unescape('%u25ef');
        if(player1 == turn){
            text += " (Player 1)";
        }
        else{
            if(cpu){
                text += " (CPU)";
            }
            else{
                text += " (Player 2)";
            }
        }
        $('#turntext').text(text);
    }
    else{
        text += unescape('%u26CC');
        if(player1 == turn){
            text += " (Player 1)";
        }
        else{
            if(cpu){
                text += " (CPU)";
            }
            else{
                text += " (Player 2)";
            }
        }
        $('#turntext').text(text);
    }
}
function CpuTurn(){
    var num = Math.floor(Math.random() * 9) + 1;
    var $button = $("#gameb" + num.toString());
    while(true){
        if($button != null){
            if(escape($button.text()) == "%u2063"){
                break;
            }
        }
        num = Math.floor(Math.random() * 9) + 1;
        $button = $("#gameb" + num.toString());
    }
    FillBox($button);
    var win = CheckForWin();
    if(win == true){
        playing = false;
    }
    else if(win == "full"){
        playing = false;
        $('#turntext').text("DRAW!");
    }
    else{
        turn = player1;
        UpdateTurnText();
    }
}
