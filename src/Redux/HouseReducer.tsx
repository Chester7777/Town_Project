import {v1} from "uuid";


type ActionType = AddFloorType

type FloorType = {
    houseId: string
    isDone: boolean
}

type InitialStateType = {
    houseId: string
    // title: string
    isDone: boolean
}
const initialState: InitialStateType = {
    houseId: "1",
    // title: "",
    isDone: false
}


export const houseReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "ADD-FLOOR":
             {
                // ...state,
                // houseId: action.houseId
                const stateCopy = {...state}
                const newFloor: FloorType = {
            houseId: v1(),
            isDone: false
        }
            const floors = stateCopy[action.houseId];
            const newTasks = [newFloor, ...floors];
            stateCopy[action.houseId] = newFloor;
            return stateCopy;
            }

        default:
            return state
    }
}

type AddFloorType = {
    type: "ADD-FLOOR"
    houseId: string
}
export const addFloor = (houseId: string): AddFloorType => ({type: "ADD-FLOOR", houseId} as const)