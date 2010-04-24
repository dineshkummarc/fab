exports.summary = "Pipes the inbound request stream back into the response.";

function echo() {
  return this;
}

exports.tests = ( function() {
  function listener(){};

  return [
    function
    echoReturnsDownstreamListener() {
      this( echo.call( listener ) == listener )
    }
  ]

})()

exports.app = echo;