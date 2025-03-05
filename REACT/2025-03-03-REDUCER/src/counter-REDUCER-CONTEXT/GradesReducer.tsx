/* eslint-disable no-case-declarations */

type State = {
    count: number
    grades: number[]
  }
  
  // Perdarome is const i ENUM type, siek tiek keiciasi sintakse, vietoj CHANGE: "change" --> CHANGE = "change"
  export enum ActionTypes {
    CHANGE = "change",
    RESET = "reset",
    ADD_GRADE = "addGrade",
    REMOVE_ALL = "removeAll",
    DELETE_ONE = "deleteOne",
  };
  
  type Action = 
  |{type: ActionTypes.CHANGE, payload: number}
  |{type: ActionTypes.ADD_GRADE}
  |{type: ActionTypes.RESET}
  |{type: ActionTypes.REMOVE_ALL}
  |{type: ActionTypes.DELETE_ONE, payload: number}
  
  export const initialState: State = {
    count: 5,
    grades: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  };
  
  export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case ActionTypes.CHANGE:
        return {
          ...state,
          count: state.count + action.payload,
        };
      case ActionTypes.RESET:
        return {
          ...state,
          count: initialState.count,
        };
      case ActionTypes.ADD_GRADE: {
        const newGrades = [state.count, ...state.grades];
        return {
          ...state,
          grades: newGrades,
        };
      }
      case ActionTypes.REMOVE_ALL:
        return {
          ...state,
          grades: initialState.grades,
        };
      case ActionTypes.DELETE_ONE:
        console.log(action.payload);
        // const newGrades = state.grades.filter((_, index) => index !== Number(action.payload))
        const newGrades = [...state.grades];
        newGrades.splice(action.payload, 1);
        return {
          ...state,
          grades: newGrades,
        };
  
      default:
        return state;
    }
  };