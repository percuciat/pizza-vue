import common from '@/store/modules/common';

describe('COMMON ACTIONS', () => {
    it('modalAction', async () => {
        const commit = jest.fn();
        await common.actions.modalAction({ commit }, true);

        expect(commit).toHaveBeenCalledWith('MODAL_ACTION', true)
    });

    it('sendModalForm', async () => {
        const commit = jest.fn();
        await common.actions.sendModalForm({ commit });

        expect(commit).toHaveBeenCalledWith('LOADER_ACTION', 'load');
       /* expect(setTimeout)
            .toHaveBeenLastCalledWith( expect(commit).toHaveBeenCalledWith('LOADER_ACTION', false), 4000);*/
    });
});


describe('COMMON MUTATIONS', () => {
    it('MODAL_ACTION', () => {
        const state = {
            modalShow: false
        };
        common.mutations.MODAL_ACTION(state, true);
        expect(state.modalShow).toEqual(true);
    });

    it('LOADER_ACTION', () => {
        const state = {
            modalShow: false,
            status: 'form',
        };
        common.mutations.LOADER_ACTION(state, 'load');
        expect(state.status).toEqual('load');
    });
});