const screen=document.getElementById('screen')

function appendToShow(input){
        screen.value += input
}
function getResult(){
    try{
         screen.value=eval(screen.value)
    }
    catch(invalid){
        screen.value='invalid'
    }

}
function clearSrceen(){
    screen.value=" "

}
function deleteVal(){
    screen.value=screen.value.slice(0, -1)
}
