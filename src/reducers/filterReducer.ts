import { Filters } from '../types/filters'

export type FilterState = { filterOpen: boolean, filters: Filters, page: number }
export type FilterActions = |
  { type: 'TOGGLE_FILTER' } |
  { type: 'APPLY_FILTER'; payload: Filters } |
  { type: 'REMOVE_FILTER' } |
  { type: 'LOAD_MORE' }

export const initialFilterState = {
  filterOpen: false,
  filters: {
    apply: false,
    available: false,
    epub: false,
    pdf: false,
    price: false
  },
  page: 0
}

export const reducerFilter = (state: FilterState, action: FilterActions) => {
  switch (action.type) {
    case 'TOGGLE_FILTER':
      return { ...state, filterOpen: !state.filterOpen }
    case 'APPLY_FILTER':
      return {
        ...state,
        filters: {
          apply: action.payload.apply,
          available: action.payload.available,
          epub: action.payload.epub,
          pdf: action.payload.pdf,
          price: action.payload.price
        }
      }
    case 'REMOVE_FILTER':
      return {
        ...state,
        filters: {
          ...initialFilterState.filters
        }
      }
    case 'LOAD_MORE':
      return {
        ...state
      }
    default:
      return state
  }
}
