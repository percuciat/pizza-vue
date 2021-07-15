import common from "@/store/modules/common";

describe('check COMMON Mutations', () => {
    it('MODAL_ACTION', () => {
        const state = {
            modalShow: false
        };
        common.mutations.MODAL_ACTION(state, true);
        expect(state).toEqual({
            modalShow: true
        });
    });
});