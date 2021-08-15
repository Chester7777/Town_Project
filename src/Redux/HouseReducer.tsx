import {v1} from "uuid";


type ActionType = AddFloorType

type FloorType = {
    houseId: string
    isDone: boolean
}

type InitialStateType = Array<FloorType>
const initialState: InitialStateType = [{
    houseId: "1",
    // title: "",
    isDone: false
}]


export const houseReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "ADD-FLOOR":
             {
                // ...state,
                // houseId: action.houseId
                let stateCopy = {...state}
                const newFloor: FloorType = {
            houseId: v1(),
            isDone: false
        }
            // const floors = stateCopy[action.houseId];
            // const newTasks = [newFloor, ...floors];
            // stateCopy[action.houseId] = newFloor;
            return stateCopy;
            }

        default:
            return state
    }
}

type AddFloorType = {
    type: "ADD-FLOOR"
    houseId: string
    isDone: boolean
}
export const addFloor = (houseId: string, isDone: boolean): AddFloorType => ({type: "ADD-FLOOR", houseId, isDone} as const)