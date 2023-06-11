const initialStateHome = {
  dataTour: [],
  page: {
    currentPage: 1,
    totalPage: 1
  }
}

const homeReducer = (state = initialStateHome, action) => {
  if(action.type === 'UPDATE_DATA_TOUR'){
    return {
      ...state,
      dataTour: action.payload
    }
  }

  if(action.type === 'UPDATE_PAGE') {
    return {
      ...state,
      page: action.payload
    }
  }

  return state;
}

export default homeReducer;