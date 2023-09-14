export interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
}

const initialState = {
  people: [] as Person[],
};

export function PersonReducer(state = initialState, action: {type: string}) {
  switch (action.type) {
    case 'get/people':
      return {
        people: [
          {
            name: 'Luke Skywalker',
            height: '172',
            mass: '77',
            hair_color: 'blond',
          },
          {
            name: 'C-3PO',
            height: '167',
            mass: '75',
            hair_color: 'n/a',
          },
          {
            name: 'R2-D2',
            height: '96',
            mass: '32',
            hair_color: 'n/a',
          },
          {
            name: 'Darth Vader',
            height: '202',
            mass: '136',
            hair_color: 'none',
          },
        ],
      };
    default:
      return {
        people: [
          {
            name: 'Luke Skywalker',
            height: '172',
            mass: '77',
            hair_color: 'blond',
          },
          {
            name: 'C-3PO',
            height: '167',
            mass: '75',
            hair_color: 'n/a',
          },
          {
            name: 'R2-D2',
            height: '96',
            mass: '32',
            hair_color: 'n/a',
          },
          {
            name: 'Darth Vader',
            height: '202',
            mass: '136',
            hair_color: 'none',
          },
        ],
      };
  }
}
