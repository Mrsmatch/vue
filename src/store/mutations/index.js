const mutations = {
    updateDialog: (state, payload) => {
        state.dialogFlag = payload
    },
    updataHotList: (state, payload) => {
        state.shopList.hotList = [...payload]
    },
    updataCombinList: (state, payload) => {
        state.shopList.combinList = [...payload]
    },
    updateChecked: (state, payload) => {
        state.allCheck = payload
    },
    updateCheckeds: (state, payload) => {
        state.allChecks = payload
    },
    updateDayRent: (state, payload) => {
        state.dayRent = payload
    },
    updateAllDeposit: (state, payload) => {
        state.allDeposit = payload;
    },
    updateAllPrice: (state, payload) => {
        state.allPrice = payload
    },
    updateRent: (state, payload) => {
        state.rent = payload
    },
    updateRentTime: (state, payload) => {
        state.rentTime = payload
    },
    updateRentPay: (state, payload) => {
        state.rentPay = payload
    },
    updateRepair: (state, payload) => {
        state.repairList = payload
    },
    updateRepairMesg: (state, payload) => {
        state.repairMesg = payload
    }
}

export default mutations;