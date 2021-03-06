import {v1} from "uuid";


type ActionType = AddFloorType | AddHouseType

type FloorType = {
    houseId: string
    isDone: boolean
}

type InitialStateType = Array<FloorType>
const initialState: InitialStateType = []


export const houseReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "ADD-FLOOR":
// return {

                // houseId: action.houseId
                let stateCopy = {...state}
                const newFloor: FloorType = {
            houseId: v1(),
            isDone: false
        }
            const floors = stateCopy.find(el=> el.houseId);
            const newTasks = [newFloor, {houseId: floors}];
            // stateCopy = newTasks;
            return stateCopy;
            // }
        case "ADD-HOUSE":

        default:
            return state
    }
}

type AddFloorType = {
    type: "ADD-FLOOR"
    houseId: string
    isDone: boolean
};
type AddHouseType = {
    type: "ADD-HOUSE"
    houseId: string
}
export const addFloor = (houseId: string, isDone: boolean): AddFloorType => ({type: "ADD-FLOOR", houseId, isDone} as const);
export const addHouse = ():AddHouseType => ({type: "ADD-HOUSE", houseId: v1()})