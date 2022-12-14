import { useState } from "react";
import Axios from "axios";
import { useEffect } from "react";

export function UsernameSelect(props) {
    const [usernames, setUsernames] = useState([]);
    const options = [];
    const getUsernames = () => {
        Axios.get("http://localhost:3001/getUsernames").then((response) => {
            setUsernames(response.data);
        });
    };

    useEffect(() => {
        getUsernames()
    }, []);

    const usernameOptions = [];
    usernameOptions.push(<option key="blank" value=""></option>);
    for (let i = 0; i < usernames.length; i++) {
        usernameOptions.push(<option key={usernames[i]['username']} value={usernames[i]['username']}>{usernames[i]['name']}</option>);
    }

    return <div><select name={props.name} onChange={props.onChange}>{usernameOptions}</select></div>;
}

export function RestaurantSelect(props) {
    const [restaurants, setRestaurants] = useState([]);
    const options = [];
    const getRestaurants = () => {
        Axios.get("http://localhost:3001/getRestaurants").then((response) => {
            setRestaurants(response.data);
        });
    };

    useEffect(() => {
        getRestaurants()
    }, []);

    const restaurantOptions = [];
    restaurantOptions.push(<option key="blank" value=""></option>);
    for (let i = 0; i < restaurants.length; i++) {
        restaurantOptions.push(<option key={restaurants[i]} value={restaurants[i]}>{restaurants[i]}</option>);
    }

    return <div><select name={props.name} onChange={props.onChange}>{restaurantOptions}</select></div>;
}

export function DeliveryService(props) {
    const [services, setServices] = useState([]);
    const options = [];
    const getServices = () => {
        Axios.get("http://localhost:3001/getServices").then((response) => {
            setServices(response.data);
        });
    };

    useEffect(() => {
        getServices()
    }, []);

    const serviceOptions = [];
    serviceOptions.push(<option key="blank" value=""></option>);
    for (let i = 0; i < services.length; i++) {
        serviceOptions.push(<option key={services[i]['id']} value={services[i]['id']}>{services[i]['long_name']} ({services[i]['id']})</option>);
    }

    return <div><select name={props.name} onChange={props.onChange}>{serviceOptions}</select></div>;
}

export function Drone(props) {
    const [drones, setDrones] = useState([]);
    const getDrones = () => {
        Axios.post("http://localhost:3001/getDronesById", {
            ip_id: props.did
        }).then((response) => {
            setDrones(response.data);
        });
    };

    useEffect(() => {
        getDrones()
    }, [props.did]);

    const droneOptions = [];
    droneOptions.push(<option key="blank" value=""></option>);
    for (let i = 0; i < drones.length; i++) {
        droneOptions.push(<option key={drones[i]['tag']} value={drones[i]['tag']}>{drones[i]['tag']} ({drones[i]['hover']})</option>);
    }

    return <div><select name={props.name} onChange={props.onChange}>{droneOptions}</select></div>;
}

export function Ingredient(props) {
    const [ingredients, setIngredients] = useState([]);
    const getIngredients = () => {
        Axios.get("http://localhost:3001/getIngredients").then((response) => {
            setIngredients(response.data);
        });
    };

    useEffect(() => {
        getIngredients()
    }, []);

    const ingredientOptions = [];
    ingredientOptions.push(<option key="blank" value=""></option>);
    for (let i = 0; i < ingredients.length; i++) {
        ingredientOptions.push(<option key={ingredients[i]['barcode']} value={ingredients[i]['barcode']}>{ingredients[i]['iname']} ({ingredients[i]['barcode']})</option>);
    }

    return <div><select name={props.name} onChange={props.onChange}>{ingredientOptions}</select></div>;
}

export function Location(props) {
    const [locations, setLocations] = useState([]);
    const getLocations = () => {
        Axios.get("http://localhost:3001/getLocations").then((response) => {
            setLocations(response.data);
        });
    };

    useEffect(() => {
        getLocations()
    }, []);

    const locationOptions = [];
    locationOptions.push(<option key="blank" value=""></option>);
    for (let i = 0; i < locations.length; i++) {
        locationOptions.push(<option key={locations[i]['label']} value={locations[i]['label']}>{locations[i]['label']}</option>);
    }

    return <div><select name={props.name} onChange={props.onChange}>{locationOptions}</select></div>;
}

export function Pilot(props) {
    const [pilots, setPilots] = useState([]);
    const getPilots = () => {
        Axios.get("http://localhost:3001/getPilots").then((response) => {
            setPilots(response.data);
        });
    };

    useEffect(() => {
        getPilots()
    }, []);

    const pilotOptions = [];
    pilotOptions.push(<option key="blank" value=""></option>);
    for (let i = 0; i < pilots.length; i++) {
        pilotOptions.push(<option key={pilots[i]['username']} value={pilots[i]['username']}>{pilots[i]['name']} ({pilots[i]['username']})</option>);
    }

    return <div><select name={props.name} onChange={props.onChange}>{pilotOptions}</select></div>;
}

export function Employee(props) {
    const [employees, setEmployees] = useState([]);
    const getEmployees = () => {
        Axios.get("http://localhost:3001/getEmployees").then((response) => {
            setEmployees(response.data);
        });
    };

    useEffect(() => {
        getEmployees()
    }, []);

    const employeeOptions = [];
    employeeOptions.push(<option key="blank" value=""></option>);
    for (let i = 0; i < employees.length; i++) {
        employeeOptions.push(<option key={employees[i]['username']} value={employees[i]['username']}>{employees[i]['name']} ({employees[i]['username']})</option>);
    }

    return <div><select name={props.name} onChange={props.onChange}>{employeeOptions}</select></div>;
}