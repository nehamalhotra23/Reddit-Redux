export default (state = [], action) => {
  switch (action.type) {
  case 'ADD_POST':
    const { name, title, description, id } = action;
    return [
      ...state,
      {
        name : name,
        title : title,
        description : description,
        // timePost : timePost,
        id: id
      }
    ];
  default:
    return state;
  }
};