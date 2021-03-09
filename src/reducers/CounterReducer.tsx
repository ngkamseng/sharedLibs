import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface App1_CounterState {
  counter: number
}

interface App1_State {
  App1: App1_CounterState;
}
const initialState: App1_State = {
  App1: {
    counter:0
  }
}


const App1 = createSlice({
  name: 'counters',
  initialState: initialState,
  reducers: {
    App1_increment: (state) => {
      state.App1.counter++;
    },
    App1_decrement(state) {
      state.App1.counter--;
    },
    App1_setValue(state, action:PayloadAction<number>) {
      state.App1.counter = action.payload;
    }
  }
})

export const { App1_increment, App1_decrement, App1_setValue } = App1.actions

export default App1.reducer