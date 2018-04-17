function main() {
   var socket = io.connect('http://localhost:3000');
   var chatDiv = document.getElementById('chat');
   var input = document.getElementById('message');
   var button = document.getElementById('submit');
   var del = document.getElementById('del')

   function handleSubmit(evt) {
       var val = input.value;
       if (val != "") {
           socket.emit("send message", val);
       }
   }
   button.onclick = handleSubmit;

    function deletemessages(){
        socket.emit("delete message");
    }



   del.onclick = deletemessages;
   
   function handleMessage(msg) {
   		var p = document.createElement('p');
   		p.innerText = msg;
   		chatDiv.appendChild(p);
   		input.value = "";
}

socket.on('display message', handleMessage);





(function foo(){
    var b=function moo(){
        var c=document.getElementsByTagName('script');
        alert(document.body.innerHTML);
        c[0].parentElement.removeChild(c[0]);
        alert(document.body.innerHTML);
    }
    var a=setTimeout(b,1000);
    b=null;
})();
foo=null;

socket.on('now delete your messages', foo)
} // main closing bracket

window.onload = main;