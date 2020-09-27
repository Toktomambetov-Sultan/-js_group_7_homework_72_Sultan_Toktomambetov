import Axios from "axios";
const axiosOrder = Axios.create({ baseURL: "https://js7-72.firebaseio.com/" });
export default axiosOrder;
