import axios from "axios";
const setAuthToken = (session_token, access_token) => {
  if (session_token || access_token) {
    // Apply authorization token to every request if logged in
    axios.defaults.headers.common["Authorization"] = session_token;
    axios.defaults.headers.common["OAuth"] = access_token;
  } else {
    // Delete auth header
     axios.defaults.headers.common["Authorization"] = null;
     axios.defaults.headers.common["OAuth"] = null;
  }
};
export default setAuthToken; 