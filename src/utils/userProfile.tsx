import axiosInstance from '../axios/axiosinstance';

var UserProfile = (function() {

    var loggedIn = false;
	var userID = "";
	var email = "";
    var firstName = "";
    var lastName = "";

    var initialize = async () => {
			var token = localStorage.getItem('token');
			if(token)
			{
				let sampleJson= '{"message":"Unauthorized"}';
				var userObject = JSON.parse(localStorage.getItem('userObject')||sampleJson);
				if(userObject!=="")
				{
					await axiosInstance.get('/user/whoami')
						.then((response) => {
							var newUserObject = {							
								'userID': response.data.userId,
								'email': response.data.email,
								'firstName': response.data.firstName, 
								'lastName': response.data.lastName,
								'requestTime': currentTime
							};
							localStorage.setItem('userObject', JSON.stringify(newUserObject)); 
							userID = newUserObject.userID;
							email = newUserObject.email;
							firstName = newUserObject.firstName;
							lastName = newUserObject.lastName;
							loggedIn = true;
						}).catch (error => {
							console.log(error);
							localStorage.removeItem('userObject');
							localStorage.removeItem('token');
							loggedIn = false;
							return false;
					});
				}
				else
				{
					var currentTime = Math.floor(Date.now()/1000);
					var requestTime = userObject.requestTime;
					var reRequestSeconds = 300; // Number of seconds to wait before sending the request again
					if(requestTime && currentTime > requestTime+reRequestSeconds)
					{
						await axiosInstance.get('/users/whoami')
							.then((response) => {
								var newUserObject = {
									'userID': response.data.userId,
									'email': response.data.email,
									'firstName': response.data.firstName, 
									'lastName': response.data.lastName,
									'requestTime': currentTime,
								};
								localStorage.setItem('userObject', JSON.stringify(newUserObject)); 
								userID = newUserObject.userID;
								email = newUserObject.email;
								firstName = newUserObject.firstName;
								lastName = newUserObject.lastName;
								loggedIn = true;
							}).catch (error => {
								console.log(error);
								localStorage.removeItem('userObject');
								localStorage.removeItem('token');
								loggedIn = false;
								return false;
						});
					}
					else
					{
						userObject.requestTime = currentTime;
						userID = userObject.userID;
						email = userObject.email;
						firstName = userObject.firstName;
						lastName = userObject.lastName;
						loggedIn = true;
						localStorage.setItem('userObject', JSON.stringify(userObject)); 
					}
				}
			}
			return true;
    };
  
    var isLoggedIn = () => {
        return loggedIn;
    };
	var getUserID = () => {
		return userID;
	};
	var getEmail = () => {
		return email;
	};
    var getFirstName = () => {
      return firstName;
    };
    var getLastName = () => {
        return lastName;
    };
  
    return {
        initialize: initialize,
        isLoggedIn: isLoggedIn,
		getUserID: getUserID,
		getEmail: getEmail,
        getFirstName: getFirstName,
        getLastName: getLastName,
    };
})();
  
export default UserProfile;