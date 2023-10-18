import Login from "../components/auth/login";
import Registration from "../components/auth/registration";

const routesData= [
    {
        path: "",
        element: <Login />,
        title: "login"
    },
    {
        path: "registration",
        element: <Registration />,
        title: "registration"
    }
];

export default routesData;