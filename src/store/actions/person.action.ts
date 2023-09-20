import {Dispatch} from 'redux';
import {Person} from '../reducers/person.reducer';

export const selectPerson = (person: Person) => {
  return {
    type: '[CRM] SET_PERSON_DETAIL',
    payload: person,
  };
};
export const nonePerson = () => {
  return {
    type: '[CRM] NONE_PERSON_DETAIL',
  };
};

export const getPeople = () => {
  return (dispatch: any) => {
    // Ip address of your computer using Android simulator
    // You can get it by running `ipconfig` in Windows or `ifconfig` in Linux
    // Meanwhile you can use localhost if you are using ios device
    // all this because you are testing locally
    fetch('http://192.168.0.2:3000/contact')
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: '[CRM] GET_PEOPLE',
          payload: data as Person[],
        });
      })
      .catch(error => console.log('error', error));
  };
};

export const createNewContact = ({
  firstName,
  lastName,
  email,
  company,
  phone,
  note,
  created_date,
}: Person) => {
  return (dispatch: any) =>
    fetch('http://192.168.0.2:3000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        company: company,
        phone: phone,
        note: note,
        created_date: created_date,
      }),
    })
      .then(response => response.json())
      .then(() => {
        dispatch({
          type: '[CRM] CREATE_NEW_CONTACT',
        });
      })
      .catch(error => console.log('error', error));
};
