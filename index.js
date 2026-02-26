import { renderComments } from "./modules/renderStudents.js";
import { comments, updateComment } from "./modules/arrComments.js";
export const commentsList = document.querySelector(".comments");
import { addButton } from "./modules/validateForm.js";
import { fetchComments } from './modules/api.js';

  fetchComments().then((data) => {
    updateComments(data);
    renderComments();  
});
initAddCommentListener(renderComments);
