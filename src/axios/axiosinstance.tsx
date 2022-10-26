import axios from 'axios'

const baseURL = "http://localhost:4000/digsync/api/v0.1";

var loginToken = localStorage.getItem('token');

console.log("Token: "+loginToken);

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 200000000,
    headers: {
        "Authorization": loginToken ? (loginToken ?  "Bearer " + loginToken: "") : "",
        "Content-Type": 'application/json',
        "accept": 'application/json'
    },
});


axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if(error.code === 'ECONNABORTED')
        {
            console.log("Database refused to connect!");
            console.log("Error Details: "+error);
        }
        else if (error.response.status === 401)
        {
            let sample= '{"message":"Unauthorized"}';
            let userObject = JSON.parse(localStorage.getItem('userObject')||sample);
            if(userObject && userObject.requestTime)
			{
				var requestTime = userObject.requestTime;
                userObject.requestTime = requestTime - 1000;
                localStorage.setItem('userObject', JSON.stringify(userObject));
                console.log("Critical Testing: "+localStorage.getItem('userObject'));
                console.log("Unauthorized Access Detected! User will be re-fetched.");
                console.log("Error Details: "+error);
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;