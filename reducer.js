const reducer = (state, action) => {
  switch(action.type) {
    case 'UPDATE_COUNTER':
      const operation = action.payload;
      const currentCount = state.counter;
      const newCount = operation === 'increment' ? currentCount + 1 : operation === 'decrement' ? currentCount - 1 : 0;
      const timestamp = Date.now();
      const newHistory = [
        {
          timestamp: timestamp,
          operation: operation,
          before: currentCount,
          after: newCount
        },
        ...state.history 
      ];

      return {
        counter: newCount,
        history: newHistory
      };

    default:
      return state;
  }
}

export default reducer;