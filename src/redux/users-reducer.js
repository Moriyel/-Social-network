
let initialState = {
  users: [
    { id : 1, photoUrl: 'https://i.pinimg.com/736x/a1/7a/cf/a17acf694b5dc3a221df5b4275e5da41.jpg', followed: false, fullName: "Alex", status: "Hi, how are you?", location: {
      city: "Moscow", country: "Russia"
    } },
    { id : 2, photoUrl: 'https://i.pinimg.com/736x/a1/7a/cf/a17acf694b5dc3a221df5b4275e5da41.jpg', followed: true, fullName: "Nina", status: "Hi, how are you?", location: {
      city: "Moscow", country: "Belarus"
    } },
    { id : 3, photoUrl: 'https://i.pinimg.com/736x/a1/7a/cf/a17acf694b5dc3a221df5b4275e5da41.jpg', followed: false, fullName: "Mari", status: "Hi, how are you?", location: {
      city: "Sidney", country: "USA"
    } }
      ]
};




const usersReducer = (state = initialState, action)=>{
  switch (action.type) {
    case 'FOLLOW': 
                return {
                    ...state, 
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u;
                    })
                }; 
  
    case 'UNFOLLOW': 
          return  {
            ...state, 
            users: state.users.map(u => {
                if (u.id === action.userId) {
                    return {...u, followed: false}
                }
                return u;
            })
          };
          case 'SET_USERS': {
            return { ...state, users: [...state.users, ...action.users]}
          }
          default:
            return state;
  }
}

export default usersReducer;