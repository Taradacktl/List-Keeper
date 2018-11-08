import {
    ADD_LIST,
    addList,
    ADD_Item,
    addItem,
    FETCH_BOARD_SUCCESS,
    fetchBoardSuccess,
    fetchBoard,
    DASHBOARD_ERROR,
    dashboardError,
    DASHBOARD_REQUEST,
    dashboardRequest
} from './dashboard';

describe('addList', () => {
    it('Should return the action', () => {
        const title = 'List title';
        const action = addList(title);
        expect(action.type).toEqual(ADD_LIST);
        expect(action.title).toEqual(title);
    });
});

describe('addItem', () => {
    it('Should return the action', () => {
        const text = 'Item text';
        const listIndex = 10;
        const action = addItem(text, listIndex);
        expect(action.type).toEqual(ADD_Item);
        expect(action.text).toEqual(text);
        expect(action.listIndex).toEqual(listIndex);
    });
});

describe('dashboardRequest', () => {
    it('Should return the action', () => {
      const action = dashboardRequest();
      expect(action.type).toEqual(DASHBOARD_REQUEST);
    });
  });

describe('fetchBoardSuccess', () => {
    it('Should return the action', () => {
        const dashboard = {
            lists: []
        };
        const action = fetchBoardSuccess(dashboard);
        expect(action.type).toEqual(FETCH_BOARD_SUCCESS);
        expect(action.dashboard).toEqual(dashboard);
    });
});

describe('dashboardError', () => {
    it('Should return the action', () => {
      const error = 'dummyError';
      const action = dashboardError(error);
      expect(action.type).toEqual(DASHBOARD_ERROR);
      expect(action.error).toEqual(error);
    });
  });

  // describe('fetchBoard', () => {
//     it('Should dispatch fetchBoardSuccess', () => {
//         const dashboard = {
//             lists: []
//         };

//         global.fetch = jest.fn().mockImplementation(() =>
//             Promise.resolve({
//                 ok: true,
//                 json() {
//                     return dashboard;
//                 }
//             })
//         );

//         const dispatch = jest.fn();
//         return fetchBoard()(dispatch).then(() => {
//             expect(fetch).toHaveBeenCalledWith('/dashboard');
//             expect(dispatch).toHaveBeenCalledWith(fetchBoardSuccess(dashboard));
//         });
//     });
// });