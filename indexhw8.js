
	Frolenkov Kirill
	
	
		������ �������
var div = document.body.appendChild(
    document.createElement("div")
)

var counter = 100
function timer() {
      div.innerText = new Date().toLocaleTimeString()
    setTimeout ( timer, 1000 )
}

timer()

		������ �������

var typeMessage = ( function ( velocity ) {
    const container = document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "h4" )
        )
    var index = 0
    return function ( message ) {
        var num = index
        setTimeout ( 
            () => container.textContent += message [ num ],
            1000 * velocity * num
        )
        index++ < message.length - 1 ? arguments.callee ( message ) : null
    }
})( 1 )

typeMessage ( `Welcome to the hell` )

	������ �������
function User ( name ) {
    this.name = name
    this.id = this.counter()
}
User.prototype.counter = (
    function () {
        var counter = 0
        return function () {
            return this.id ? this.id : counter++
        }
    }
)()

var users = [
    new User ( "�����" ),
    new User ( "�����" ),
    new User ( "������" ),
    new User ( "�������" )
]
