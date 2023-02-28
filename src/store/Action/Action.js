import axios from "axios"
import { loadimages } from "../Reducer/Counterslice";
import { loadtvshow } from "../Reducer/Counterslice";

export const asyncloadimageAction = (count = 1)=> async(dispatch,getState) => {
    try {
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=bab29db4b804e2ebdc1ecf5535d2df99&language=en-US&page=${count}`)

        dispatch(loadimages(data.results));

    } catch (error) {
        console.log(error);
    }
    

}

// Show Action
export const asynctvfunction = (count = 1)=> async(dispatch,getState) => {
    try {
        const {data} = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=bab29db4b804e2ebdc1ecf5535d2df99&language=en-US&page=${count}`)

        console.log(data)

        dispatch(loadtvshow(data.results));

    } catch (error) {
        console.log(error);
    }
    

}


