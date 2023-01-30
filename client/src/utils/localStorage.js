export const getSavedFoodIds = () => {
    const savedFoodIds = localStorage.getItem('saved_foods')
      ? JSON.parse(localStorage.getItem('saved_foods'))
      : [];
  
    return savedFoodIds;
};
  
export const saveFoodIds = (foodIdArr) => {
    if (foodIdArr.length) {
        localStorage.setItem('saved_foods', JSON.stringify(foodIdArr));
    } else {
        localStorage.removeItem('saved_foods');
    }
};

export const removeFoodId = (foodId) => {
    const savedFoodIds = localStorage.getItem('saved_foods')
        ? JSON.parse(localStorage.getItem('saved_foods'))
        : null;

    if (!savedFoodIds) {
        return false;
    }

    const updatedSavedFoodIds = savedFoodIds?.filter((savedFoodId) => savedFoodId !== foodId);
    localStorage.setItem('saved_foods', JSON.stringify(updatedSavedFoodIds));

    return true;
};

export const getSavedResturauntIds = () => {
    const savedResturauntIds = localStorage.getItem('saved_resturaunts')
      ? JSON.parse(localStorage.getItem('saved_resturaunts'))
      : [];
  
    return savedResturauntIds;
};
  
export const saveResturauntIds = (resturauntIdArr) => {
    if (resturauntIdArr.length) {
        localStorage.setItem('saved_resturaunts', JSON.stringify(resturauntIdArr));
    } else {
        localStorage.removeItem('saved_resturaunts');
    }
};

export const removeResturauntId = (resturauntId) => {
    const savedResturauntIds = localStorage.getItem('saved_resturaunts')
        ? JSON.parse(localStorage.getItem('saved_resturaunts'))
        : null;

    if (!savedResturauntIds) {
        return false;
    }

    const updatedSavedResturauntIds = savedResturauntIds?.filter((savedResturauntId) => savedResturauntId !== resturauntId);
    localStorage.setItem('saved_resturaunts', JSON.stringify(updatedSavedResturauntIds));

    return true;
};