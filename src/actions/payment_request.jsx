import superagent from 'superagent';
import * as TYPE from './types';

export const create = () => (dispatch) => {
    request
    .post('/users')
    .send(user)
    .then((response) => {
        callback();
        dispatch({
            type: TYPE.REGISTER_SUCCESS,
            payload: response.body,
        });
    })
    .catch(err => (
        dispatch({
            type: TYPE.REGISTER_FAIL,
            payload: validateError(err),
        })
    ));
};