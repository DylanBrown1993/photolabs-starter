import { useReducer } from 'react';

const initialState = {
  favorites: [],
  showModal: false,
  selectedPhoto: '',
};

// Various functions for handling actions and updates
const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const newFavorites = state.favorites.includes(action.id)
      ? state.favorites.filter((favorite) => favorite !== action.id)
      : [...state.favorites, action.id];
      return {...state, favorites: newFavorites};

    case 'CLOSE_MODAL':
      return {...state, showModal: false};

    case 'SET_SELECTED_PHOTO':
      return {...state, selectedPhoto: action.photo};
    
    case 'SET_SHOW_MODAL':
      return{...state, showModal: action.showModal};

    default:
      return state;
  }
};

// Function for updating the state of the app
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFavorite = (id) => {
    dispatch({type: 'TOGGLE_FAVORITE', id});
  };
  const closeModal = (photo) => {
    dispatch({type: 'SET_SELECTED_PHOTO', photo});
    dispatch({type: 'CLOSE_MODAL'});
  };
  const setSelectedPhoto = (photo) => {
    dispatch({type: 'SET_SELECTED_PHOTO', photo});
    dispatch({type: 'CLOSE_MODAL'});
  };
  const setShowModal = (showModal) => {
    dispatch({type: 'SET_SHOW_MODAL', showModal});
  };

  return {
    favorites: state.favorites,
    showModal: state.showModal,
    selectedPhoto: state.selectedPhoto,
    toggleFavorite,
    closeModal,
    setSelectedPhoto,
    setShowModal,
  };
};

export default useApplicationData;