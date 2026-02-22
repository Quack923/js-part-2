import { renderComments } from "./modules/renderStudents.js";
import { comments, updateComment } from "./modules/arrComments.js";
export const commentsList = document.querySelector(".comments"); 
import {addButton} from "./modules/validateForm.js";

renderComments();

 fetch("https://wedev-api.sky.pro/api/v1/ivan-pichugin/comments", {
  method: "GET",
})
  .then((response) => response.json())
  .then((responseData) => {
    const appComments = responseData.comments; 
    updateComment(appComments); 
    renderComments();
  });