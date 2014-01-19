

 
      // Load the SDK asynchronously
  (function(d){
   var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement('script'); js.id = id; js.async = true;
   js.src = "//connect.facebook.net/en_US/all.js";
   ref.parentNode.insertBefore(js, ref);
  }(document));
  
  Parse.initialize("yfuOWmQDgclXygaWFIh8zqy9ByYlXuQt5HzTt2rf", "pd8p8lHbAmHuF8HSZx032BvbKuS7a1ugCHFQ5Raj");
  
  window.fbAsyncInit = function() {
  Parse.FacebookUtils.init({
    appId : '341999395937907', // Facebook App ID
    channelUrl : 'solochess.parseapp.com/channel.html', // Channel File
    status : true, // check login status
    cookie : true, // enable cookies to allow Parse to access the session
    xfbml : true , // parse XFBML
});
FB.Event.subscribe('auth.authResponseChange', function(response) {
	if (response.status === 'connected')
	{
		var user = new Parse.User();
		FB.api("/me", {fields: "name"}, function(data) 
		{
			console.log(data);
			window.localStorage.setItem("facebook", data.name);
		});
		var obj = window.localStorage.getItem("facebook");
		user.set("username", obj);
		user.set("password", "my pass");
		user.signUp(null, {success: function(user) {},
		error: function(user, error) {}
		});
	}
	else if (response.status === 'not_authorized')
	{
		Parse.FacebookUtils.logIn(null, {success: function(user) {}
		,
		error: function(user, error) {}
		});
	}
	else
	{
		Parse.FacebookUtils.logIn(null, 
		{success: function(user) { }
		,
		error: function(user, error) {}
		});
	}
});
}




    
