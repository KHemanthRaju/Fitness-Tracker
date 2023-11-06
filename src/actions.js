import axios from "axios";
import { fitnessConstants } from "./constants/fitness-constants";

const {
  BASE_URL,
  GET_ALL_EXERCISES,
  GET_ALL_FOODS,
  GET_ALL_GOALS,
  ADD_EXERCISE,
  ADD_FOOD,
  ADD_GOAL,
  DELETE_EXERCISE,
  DELETE_FOOD,
  DELETE_GOAL
} = fitnessConstants;

const getAllExercises = () => async (dispatch) => {
  try {
    const { status, data: exercises } = await axios.get(
      `${BASE_URL}/exercises`
    );
    // {
    //   console.log(status);
    // }

    if (status === 200) {
      dispatch({ type: GET_ALL_EXERCISES, payload: exercises });
    }
  } catch (err) {
    console.log("Error in fetching all exercises", err);
  }
};

const getAllFoods = () => async (dispatch) => {
  try {
    const { status, data: foods } = await axios.get(`${BASE_URL}/food`);
    if (status === 200) {
      dispatch({ type: GET_ALL_FOODS, payload: foods });
    }
  } catch (err) {
    console.log("Error in fetching all foods", err);
  }
};

const getAllGoals = () => async (dispatch) => {
  try {
    const { state, data: goals } = await axios.get(`${BASE_URL}/goals`);
    if (status === 200) {
      dispatch({ type: GET_ALL_GOALS, payload: goals });
    }
  } catch (err) {
    console.log("Error in fetching all goals", err);
  }
};

const addExercise = (toAddExercise) => async (dispatch) => {
  try {
    const {
      status,
      data: { exercises }
    } = await axios({
      method: "POST",
      url: `${BASE_URL}/exercises`,
      data: toAddExercise
    });
    if (status === 200) {
      dispatch({ type: ADD_EXERCISE, payload: exercise });
    }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log("error message: ", err.message);
    }
    console.log("Error in adding exercise", err);
  }
};

const addFood = (toAddFood) => async (dispatch) => {
  try {
    const {
      status,
      data: { food }
    } = await axios({
      method: "POST",
      url: `${BASE_URL}/food`,
      data: toAddFood
    });
    if (status === 201) {
      dispatch({ type: ADD_FOOD, payload: food });
    }
  } catch (err) {
    console.log("Error in adding food", err);
  }
};

const addGoal = (toAddGoal) => async (dispatch) => {
  try {
    const {
      status,
      data: { goal }
    } = await axios({
      method: "POST",
      url: `${BASE_URL}/goals`,
      data: toAddGoal
    });
    if (status === 201) {
      dispatch({ type: ADD_GOAL, payload: goal });
    }
  } catch (err) {
    console.log("Error in adding goal", err);
  }
};

const deleteExercise = (id) => async (dispatch) => {
  try {
    await axios.delete(`${BASE_URL}/exercises/${id}`);
    dispatch({ type: DELETE_EXERCISE, payload: id });
  } catch (err) {
    console.log("Error in deleting exercise", err);
  }
};

const deleteFood = (id) => async (dispatch) => {
  try {
    await axios.delete(`${BASE_URL}/food/${id}`);
    dispatch({ type: DELETE_FOOD, payload: id });
  } catch (err) {
    console.log("Error in deleting food", err);
  }
};

const deleteGoal = (id) => async (dispatch) => {
  try {
    await axios.delete(`${BASE_URL}/goals/${id}`);
    dispatch({ type: DELETE_GOAL, payload: id });
  } catch (err) {
    console.log("Error in deleting goal", err);
  }
};

export {
  getAllExercises,
  getAllFoods,
  getAllGoals,
  addExercise,
  addFood,
  addGoal,
  deleteExercise,
  deleteFood,
  deleteGoal
};
