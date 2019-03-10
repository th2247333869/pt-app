const mutations = {
  increment : state =>{
    state.count = state.count+5
  },
  decrement : state =>{
    state.count = state.count-3
  },
  setUserInformation:function (state,userInformation) {
    state.userinformation = userInformation
  },
  setMenus:function (state,menus) {
    state.menus = menus
  }
}

export default mutations
