export interface Person {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  note: string;
  created_date: string;
}

const initialState = {
  people: [] as Person[],
  peopleSelected: {
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    note: '',
    created_date: '',
  } as Person,
  isDetail: false,
};

export function PersonReducer(
  state = initialState,
  action: {type: string; payload?: any},
) {
  switch (action.type) {
    case '[CRM] GET_PEOPLE':
      return {
        ...state,
        people: action.payload,
      };
    case '[CRM] SET_PERSON_DETAIL':
      return {
        ...state,
        isDetail: true,
        peopleSelected: action.payload,
      };
    case '[CRM] NONE_PERSON_DETAIL':
      return {
        ...state,
        isDetail: false,
        peopleSelected: initialState.peopleSelected,
      };
    case '[CRM] CREATE_NEW_CONTACT':
      return {
        ...state,
        people: [...state.people, action.payload],
      };
    default:
      return state;
  }
}
