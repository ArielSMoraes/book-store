export type FilterState = { filterOpen: boolean }
export type FilterActions = | { type: 'TOGGLE_FILTER'}

export const initialFilterState = { filterOpen: false }

export const reducerFilter = (state: FilterState, action: FilterActions) => {
  switch (action.type) {
    case 'TOGGLE_FILTER':
      return { ...state, filterOpen: !state.filterOpen }
    default:
      return state
  }
}
