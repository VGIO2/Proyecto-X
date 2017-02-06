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

//LOGICA








//VISUAL
var liListItem = null;
function onMensajeKey(evt){
    
    if(evt.keyCode == 13){
        var elInputMensaje= document.getElementById("mensajes");
        crearChat(elInputMensaje.value);
        crearMensaje(elInputMensaje.value); /*para obtener el texto usamos el .value*/
        elInputMensaje.value = "";
    }
}
function crearMensaje(_mensaje){
    
             var htmlMensajeIn= '<div class="w-message w-message-in">'+
	  					         '<div class="w-message-text">'+
	  								'<h5 class="green-1">Maria Paula Rivarola</h5>'+
	  								'<p>jshdajsdas</p>'+
	  								'<div class="time">11:13</div>'+
	  							 '</div>'+
	  						    '</div>';
            var d = new Date();
	  	    var htmlMensajeOut= '<div class="w-message w-message-out">'+
	  							 '<div class="w-message-text">'+
	  								'<p>'+ _mensaje+'</p>'+
	  								'<div class="time">'+d.getHours()+":"+ d.getMinutes()+  '</div>'+
	  							 '</div>'+
	  						    '</div>';
    
    var mensaje = liListItem.getElementsById("w-last-message")[0];
    mensaje.innerHTML=_mensaje;
    
    var elChat = document.getElementById("chat");
    elChat.innerHTML+= htmlMensajeOut;
    elChat.scrollTop= elChat.scrollHeight;
    //divChat.scrollTop = divChat.scrollHeight;
}




function crearListaChats(){
    
}

function crearChat(_mensaje){
    
                    var elListaChats=document.getElementById("listaChats");
    
                    if(liListItem==null){
                        
                        liListItem = document.createElement('LI');
    
                    var htmlChatItem= '<div class="avatar">'+
		  						'<img src="image/logocodeacademy.png" alt="" class="wh-44">'+
		  						'<h4 class="w-contact-name">Laboratoria Perú</h4>'+
		  						'<p class="w-last-message" id="mensaje">'+_mensaje+'</p>'+
		  					'</div>'+
							'<div class="time" id="hora">14:27</div>';
    
                    liListItem.innerHTML = htmlChatItem; 
    
                     elListaChats.insertBefore(liListItem,elListaChats.childNodes[0]);
                    }
                    
                    //elListaChats.innerHTML+= htmlChatItem;
    
    
}

function actualizarCabezeraChat(){
    
}
