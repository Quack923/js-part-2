 export const comments = [];

   export const updateComment = (newComments) => {
    comments.length = 0; 

    comments.push(...newComments); 
};
  