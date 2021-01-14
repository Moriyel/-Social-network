export const updateObjectInArray = (items, itemId, objProName, newObjProps) => {
   return items.map(u => {
        if (u[objProName] === itemId){
              return {...u, ...newObjProps}
        }
        return u;
    })
}