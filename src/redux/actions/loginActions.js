import {SIGN_IN,SIGN_OUT} from '../types/loginTypes';

export const loginSession = (user, password) => {
    return (dispatch) => {
        console.log('llego ala session action', user, password);
          dispatch({
            type: SIGN_IN
          });
    };
  };

  export const cerrarSesion = () => {
    return (dispatch) => {        
          dispatch({
            type: SIGN_OUT
          });
    };
  };