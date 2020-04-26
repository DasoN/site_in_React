import {combineReducers} from "redux";
import CarReducers from "./car";
import ActiveCar from './car-active';

const allReducers = combineReducers({
    cars: CarReducers,
    active: ActiveCar
})

export default allReducers;