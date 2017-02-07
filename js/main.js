//LOGICA

var dataListaChats = [
    {
        nombre: "Chat 1", 
        imagenURL: 'image/logocodeacademy.png', 
        ultimoMensaje:"",
        horaUltimoMensaje:''
    }
]


//VISUAL

crearMensaje();
onMensajeKey();

function init()
{
    setEventsChatList();
}

function initChatList()
{
    <li><div class="avatar">
        <img src="image/logocodeacademy.png" alt="" class="wh-44">
            <h4 class="w-contact-name">Laboratoria Perú</h4>
            <p class="w-last-message" id="mensaje">No se pique!!</p>
         </div>
		<div class="time" id="hora">14:27</div></li>    

    
    
    setEventsChatList()
}

function setEventsChatList(){
    var listaChats=document.getElementById('listaChats');
    var arrListItems = (listaChats.getElementsByTagName('li'));
    
    for(var i=0; i<arrListItems.length; i++){
        
       /* arrListItems[i].onclick = function(){
            alert("click!");
        };*/
        arrListItems[i].addEventListener('click', onChatItemClick);
        
    }
}

function onChatItemClick(evt){
    //console.log(evt.currentTarget);// currentTarget 
    
    var contactName = evt.currentTarget.getElementsByClassName('w-contact-name')[0].textContent;
    var imgURL = evt.currentTarget.getElementsByClassName('wh-44')[0].src;
    
    actualizarHeaderChat(contactName,imgURL,"conectado");
}


var liListItem=null;

function onMensajeKey(evt)
{
	if(evt.keyCode == 13)
	{
		var elInputMensajes = document.getElementById("mensajes");
		crearChat(elInputMensajes.value);
		crearMensaje(elInputMensajes.value);	
		elInputMensajes.value="";	
	}	
}

function crearMensaje(_mensaje)
{
	var htmlMensajeIn =	'<div class="w-message w-message-in">'+'<div class="w-message-text">'+
						'<h5 class="yellow-1">Aldo Alfaro</h5>'+'<p>Dale dale!</p>'+
						'<div class="time">14:25</div>'+'</div>'+'</div>';
	var fecha = new Date();
	var htmlMensajeOut ='<div class="w-message w-message-out">'+'<div class="w-message-text">'+
	  					'<p>'+_mensaje+'</p>'+'<div class="time">'+fecha.getHours()+":"+fecha.getMinutes()+'</div>'+'</div>'+'</div>';

	var mensaje=liListItem.getElementsByClassName("w-last-message")[0];
	mensaje.innerHTML=_mensaje;
	console.log();

	var elemChat= document.getElementById("chat");
	elemChat.innerHTML += htmlMensajeOut;
	elemChat.scrollTop = elemChat.scrollHeight;
}

function crearChat(_mensaje)
{
	var elListaChats = document.getElementById("listaChats");

	if(liListItem==null)
	{
		liListItem = document.createElement("li");

		var htmlChatItem = 	'<div class="avatar">'+'<img src="image/logocodeacademy.png" alt="" class="wh-44">'+
		  				'<h4 class="w-contact-name">Laboratoria Perú</h4>'+
		  				'<p class="w-last-message" id="mensaje">'+_mensaje+'</p>'+'</div>';
		liListItem.innerHTML = htmlChatItem;
		elListaChats.insertBefore(liListItem, elListaChats.childNodes[0]);
	}	
}

function crearListaChats()
{

}

function actualizarHeaderChat(_contactName,_imageURL,_estado)
{
    var chatHeader = document.getElementById("chat-header");
    
    chatHeader.getElementsByClassName('w-contact-name')[0].innerHTML=_contactName;
    chatHeader.getElementsByClassName('w-users-messages')[0].innerHTML=_estado;
    chatHeader.getElementsByTagName('img')[0].src=_imageURL;
    

}
//el onready se ejecuta antes que el onload





/*function Chat()
{
	this.nombre = '';
	this.people = [];
	this.messages = [];
	this.chatAvatar = '';
}
function Person(_name, _avatar)
{
	this.name = _name;
	this.avatar = _avatar;
}
function Message(_message, _sender)
{
	this.message = _message;
	this.sender = _sender;
	this.received = false;
}
function Whatsapp()
{
	this.chats = [];
	this.selectedChat = null;
	this.searchChat		= function(_keyword){};
	this.getChatFromId	= function(_chatId){};
	this.drawChatList	= function(_htmlTarget){
		var ulChatList = document.getElementById('chat-list');

		for (var i in this.chats) {
			console.log(this.chats[i].messages);
			var htmlChatList = '<li><div class="avatar">' +
					'<img src="' + this.chats[i].chatAvatar + '" alt="" class="wh-44">' +
					'<h4 class="w-contact-name">' + this.chats[i].nombre +'</h4>' +
					'<p class="w-last-message">' + this.chats[i].messages[this.chats[i].messages.length-1].message + '</p>' +
				'</div>' +
				'<div class="time">03/01/2016</div>' +
			'</li>';
			ulChatList.innerHTML += htmlChatList;
		}

	};
    
    
	this.drawMessageList= function(){
		var divChat = document.getElementById('chat');
		divChat.innerHTML = '';

		for (var i in this.selectedChat.messages) {
			if (object.hasOwnProperty(i)) {
				console.log(this.selectedChat.messages[i]);
				this.sendMessage(this.selectedChat.messages[i], false);
			}
		}
	};
    
    
	this.getLastMessage = function(){
		return this.selectedChat.messages[this.selectedChat.messages.length-1];
	};
    
    
	this.sendMessage	= function(_message, _in){
		var htmlMessageIn = '<div class="w-message w-message-in"><div class="w-message-text"><p>' + _message.message + '</p><div class="time">14:27</div></div></div>';
		var htmlMessageOut = '<div class="w-message w-message-out"><div class="w-message-text"><p>' + _message.message + '</p><div class="time">14:27</div></div></div>';
		var divChat = document.getElementById('chat');

		this.selectedChat.messages.push(_message);

		if(_in)
		{
			divChat.innerHTML += htmlMessageIn;
		}else{
			divChat.innerHTML += htmlMessageOut;
		}

		divChat.scrollTop = divChat.scrollHeight;
	};
}






var wapp = new Whatsapp();

var me = new Person('Gerson');
var zare = new Person('Zare');
var liset = new Person('Liset');

var chat = new Chat();
chat.nombre = "Chat";
chat.people.push(zare);
chat.chatAvatar = 'https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png';

wapp.chats.push(chat);


var chat2 = new Chat();
chat2.nombre = "Liset";
chat2.chatAvatar = 'https://upload.wikimedia.org/wikipedia/en/5/55/Xbox_NXE_avatar.png';
chat2.people.push(liset);

wapp.chats.push(chat2);

wapp.selectedChat = chat;

wapp.sendMessage(new Message('Hola', zare));
wapp.sendMessage(new Message('Que tal?', me));
wapp.sendMessage(new Message('Yo muy bien, tu que tal?', zare));


wapp.selectedChat = chat2;

wapp.sendMessage(new Message('Hola', me));
wapp.sendMessage(new Message('Tienes un peine?', liset));

wapp.drawChatList();
console.log(wapp.getLastMessage().sender);








window.onload = init;

var inputMessage;
var divChat;
var chatPanel;

function init()
{
	inputMessage = document.getElementById('mensajes');
	divChat = document.getElementById('chat');
	//chatPanel = document.querySelector('.w-chat-panel');

	inputMessage.addEventListener('keyup', onInputKeyUp);
}

function onInputKeyUp(evt)
{
	console.log(evt.keyCode);
	if(evt.keyCode == 13)
	{
		wapp.sendMessage(new Message(evt.target.value, me));
		evt.target.value = '';
	}
}*/