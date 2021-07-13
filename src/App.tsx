import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";

export type StateType = {
    count: number
    maxValue: number
}

function App() {

    const [state, setState] = useState<StateType>({
        count: 0,
        maxValue: 5
    })


    const clickBtnInc = () => {
        setState({...state, count: state.count + 1})
        // if (state.count === state.maxValue) {
        // }
    }


    const clickBtnReset = () => {
        setState({...state, count: 0})
    }


    return (
        <div className="App">
            <Counter state={state}
                     clickBtnInc={clickBtnInc}
                     clickBtnReset={clickBtnReset}
            />
        </div>
    );
}

export default App;
