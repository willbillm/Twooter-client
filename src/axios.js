import axios from 'axios';
import env from 'react-dotenv'
import Cookies from 'js-cookie'

const hostName = env.REACT_APP_ENVIRONMENT === 'production' ? env.REACT_APP_API_URL : 'http://localhost:8000'

export const api = axios.create({
    baseURL: hostName,
    headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
    }
})
