First

function typeMessage ( message, velocity ) {
    var container = document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "h3" )
        )
    container.style = color: magenta;
    message.split("").forEach ( 
        ( letter, index ) => 
            setTimeout (
                () => container.textContent += letter,
                1000 * velocity * index
            )
    )
}

typeMessage ( Welcome to the hell, 1 )


Second


var users = (
    function ( list ) {
        var users = []
        for ( var user of list )
            users.push ({
                name: user,
                present: false
            })

        return {
            setUserPresent ( userName, present ) {
                users.filter ( user => user.name === userName )[0].present = true
            },
            showPresent () {
                users.filter ( user => user.present )
                    .forEach ( user => console.log ( user ) )
            },
            showAbsent () {
                users.filter ( user => !user.present )
                    .forEach ( user => console.log ( user ) )
            }
        }
    }
)( [ "Иван", "Дмитрий", "Степан", "Михаил" ] )

users.showAbsent()
