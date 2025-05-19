import { useReducer, useCallback } from 'react';

type ToggleAction<T> = 
  | { type: 'TOGGLE' }
  | { type: 'SET_VALUE'; payload: T };

type ToggleState<T> = {
  values: T[];
  currentIndex: number;
};

function toggleReducer<T>(state: ToggleState<T>, action: ToggleAction<T>): ToggleState<T> {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        currentIndex: (state.currentIndex + 1) % state.values.length
      };
    case 'SET_VALUE':
      const newIndex = state.values.indexOf(action.payload);
      if (newIndex === -1) return state;
      return {
        ...state,
        currentIndex: newIndex
      };
    default:
      return state;
  }
}

export function useToggle<T>(values: T[] = [true, false] as T[]) {
  const [state, dispatch] = useReducer(toggleReducer, {
    values,
    currentIndex: 0
  });

  const toggle = useCallback((value?: T) => {
    if (value !== undefined) {
      dispatch({ type: 'SET_VALUE', payload: value });
    } else {
      dispatch({ type: 'TOGGLE' });
    }
  }, []);

  return [state.values[state.currentIndex], toggle] as const;
} 