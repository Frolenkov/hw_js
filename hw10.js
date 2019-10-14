// First

var messages = [
			    "backspace",
			    "enter",
			    "shift",
			    "control",
			    "delete",
			    "space",
			    "subtract"
			]

			var log = {}

			var sendMessage = ( message, callback ) =>
			    setTimeout (
			        () => callback ( message ),
			        Math.random () * 7000
			    )

			messages.forEach (
			    message => sendMessage ( message, handler )
			)

			getKey = () => {
			    var key = new Date().toLocaleString().split(", ")[1]
			    return log [ key ] ? key + "[2]" : key
			}    

			function handler (message) {
			    Object.assign(log, {
			        [getKey()] : message     
			    })
			}

			setTimeout(function () {
			    console.log(log)
			},7000)
      
      
      // Second
      
      function User ( name ) {
			    this.name = name
			    var presence = false
			    Object.defineProperty(this, "presence", {
			        get : function () { 
			        return (presence ? `${this.name} is present` : `${this.name} is absent` )
			        },
			        set : function (value) {
			            presence = value
			        }
			    }
        )
			}

			var user = new User ( "Kirll" )
			var user1 = new User ( "Anna" )

			user.presence = "+"
			console.info(user.presence )
			console.info(user1.presence )
      
      //First
      
            
      function User (name = "Example" , email = "example@gmail.com" , photo = User.getAvatar() ) {
    
    this.name = name
    this.email = email
    this.photoURL = photo

}
User.avatars = [
     "https://findicons.com/files/icons/1243/hello_kitty/128/kitty_2.png",
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLypLSUAKoh0Qcq6iE6kZQroQQo6r47xfJb9pcFV7CnOl2u6s",
     "https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-31-512.png",
     "http://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Male-Face-L3-icon.png",
     "https://findicons.com/files/icons/1072/face_avatars/300/i05.png",
     "https://findicons.com/files/icons/210/simpsons/128/garage_band_homer.png",
     "http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/256/Zombie-2-icon.png",
     "https://vignette.wikia.nocookie.net/yogscast/images/8/8a/Avatar_Turps_2015.jpg"
    ]
User.admin = {
    photoURL: "https://i.pinimg.com/originals/3d/47/4f/3d474f82ff71595e8081f9a120892ae8.gif",
    name: "admin"
}

User.getAvatar = function () {return this.avatars.shift()}


Object.defineProperty(User, "messageBox", {
    value: (function() {
        var wrap = document.createElement("div")
        wrap.style = `
                        width: 200px;
                        height: 200px;
        `
        document.querySelector("#additional").appendChild(wrap).id = "wraper"
        var wrapImg = document.createElement("img")
        wrapImg.style = `
                            width: 50px;
                            height: 50px;
        `
        wrap.appendChild(wrapImg).id = "imgAvatar"
        var wrapP = document.createElement("p")
        wrapP.style = `
                            display: inline-block;
                            padding-left: 15px
        `
        wrap.appendChild(wrapP).id = "avatarName"
        var wrapInput = document.createElement("textarea")
        wrapInput.oninput = function (event) {
            event.target.parentNode.firstChild.src = User.admin.photoURL
            event.target.parentNode.querySelector("#avatarName").innerText = User.admin.name
            event.target.parentNode.querySelector("#message").innerText = event.target.parentNode.querySelector("#message").value
        }
        wrap.appendChild(wrapInput).id = "message"
    })(),
    writable : false,
    enumerable : false


})

User.prototype.write = function (text) {
    document.querySelector("#imgAvatar").src = this.photoURL
    document.querySelector("#avatarName").innerText = this.name
    document.querySelector("#message").innerText = text
}
User.prototype.read = function () {
   console.log(`${this.name} read message "${document.querySelector("#message").innerHTML}"` )
}

var users = [
    new User ( "Ivan" ),
    new User ( 'Alex', "alex@gmail.com" ),
    new User ( 'Bob', "bob777@gmail.com" ),
    new User ( 'Dima', "dima888@gmail.com" ),
    new User ( 'Fima', "fima999@gmail.com" )
]

var k = 1
users.forEach (
    function ( user) {
        setTimeout (
            function () {
                user.write ( `Hello, I'm ${user.name}` )
            }, 3000 * k++
        )
    }
)


console.info ( location.href )
document.cookie = "userName=Ирина"
var res = document.cookie
    .split ( "; " )
    .map (
        x => Object.assign (
            {}, { [ x.split ( "=" )[0] ] : x.split ( "=" )[1] }
        )
    )
console.log ( res )
