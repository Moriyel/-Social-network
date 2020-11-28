
let initialState = {
  users: [
    { id : 1, followed: false, fullName: "Alex", status: "Hi, how are you?", location: {
      city: "Moscow", country: "Russia"
    } },
    { id : 2, followed: true, fullName: "Nina", status: "Hi, how are you?", location: {
      city: "Moscow", country: "Belarus"
    } },
    { id : 3, followed: false, fullName: "Mari", status: "Hi, how are you?", location: {
      city: "Sidney", country: "USA"
    } }
      ]
};




const usersReducer = (state = initialState, action)=>{
  switch (action.type) {
    case 'FOLLOW': {
    let newPost = {
      id: 5,
      message: state.newPostText,
      likesCount: 0
    };
    let stateCopy = {...state};
    stateCopy.posts = [...state.posts];
    stateCopy.posts.push(newPost); 
    stateCopy.newPostText = "";
    return stateCopy;
  }
    case 'UPDATE-NEW-POST-TEXT': {
      let stateCopy = {...state};
    stateCopy.newPostText = action.newText;
    return stateCopy;
    }
  default:
  return state;
  }
}

export default usersReducer;