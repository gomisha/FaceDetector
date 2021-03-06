// end points

const baseURL = process.env.REACT_APP_FD_SERVER_URL as string;

export const ENDPOINT_GET_HOME = baseURL + "/";

export const ENDPOINT_GET_PROFILE = baseURL + "/profile/:id";

export const ENDPOINT_GET_USERS = baseURL + "/users";

export const ENDPOINT_POST_SIGNIN = baseURL + "/signin";

export const ENDPOINT_POST_REGISTER = baseURL + "/register";

export const ENDPOINT_PUT_IMAGE = baseURL + "/image";

// JSON requests

export const JSON_POST_REQUEST = { 
    body: "",
    headers: { "Content-Type": "application/json"},
    method: "post"
}

export const JSON_PUT_REQUEST = {
    body: "",
    headers: { "Content-Type": "application/json"},
    method: "put"
}

// Particles background

export const particlesOptions = {
    particles: {
        number: {
            density: {
                enable: true,
                value_area: 800
            },
            value: 30
        }
    }
}

// routes

export const ROUTE_HOME = "home";
export const ROUTE_SIGNIN = "signIn";
export const ROUTE_REGISTER = "register";