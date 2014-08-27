app.factory('SendMessage', function($http, $q, transformRequestAsFormPost){

    var messageReturn = {

        messageReturn : false,
        
        SendMessage : function(data){
            var deferred = $q.defer();

            $http({url:'http://posttestserver.com/post.php',method:"POST",headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                 },
                 data: data
            }).
            success(function(data, status, headers, config) {
                messageReturn.messageReturn = data;
                deferred.resolve(messageReturn.messageReturn);
            }).
            error(function(data, status, headers, config) {
                deferred.reject('Network Problem!!');
            });
            return deferred.promise;
        }
    };
    return messageReturn;

});

app.controller('ContactCtrl', ['$scope','SendMessage', function($scope, SendMessage) {

    $scope.data = {toContact : "direction"};

    $scope.send = function(data) {
      SendMessage.SendMessage(data).then(function(data){
        console.log(data);
      },function(msg){
        console.log(msg);
      });
    }; 
}]);
 
 
// -------------------------------------------------- //
// -------------------------------------------------- //


// I provide a request-transformation method that is used to prepare the outgoing
// request as a FORM post instead of a JSON packet.
app.factory(
    "transformRequestAsFormPost",
    function() {

        // I prepare the request data for the form post.
        function transformRequest( data, getHeaders ) {

            var headers = getHeaders();

            headers[ "Content-type" ] = "application/x-www-form-urlencoded; charset=utf-8";

            return( serializeData( data ) );

        }


        // Return the factory value.
        return( transformRequest );


        // ---
        // PRVIATE METHODS.
        // ---


        // I serialize the given Object into a key-value pair string. This
        // method expects an object and will default to the toString() method.
        // --
        // NOTE: This is an atered version of the jQuery.param() method which
        // will serialize a data collection for Form posting.
        // --
        // https://github.com/jquery/jquery/blob/master/src/serialize.js#L45
        function serializeData( data ) {

            // If this is not an object, defer to native stringification.
            if ( ! angular.isObject( data ) ) {

                return( ( data == null ) ? "" : data.toString() );

            }

            var buffer = [];

            // Serialize each key in the object.
            for ( var name in data ) {

                if ( ! data.hasOwnProperty( name ) ) {

                    continue;

                }

                var value = data[ name ];

                buffer.push(
                    encodeURIComponent( name ) +
                    "=" +
                    encodeURIComponent( ( value == null ) ? "" : value )
                );

            }

            // Serialize the buffer and clean it up for transportation.
            var source = buffer
                .join( "&" )
                .replace( /%20/g, "+" )
            ;

            return( source );

        }

    }
);