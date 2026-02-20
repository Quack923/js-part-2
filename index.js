import { renderComments } from "./modules/renderStudents.js";
import { comments } from "./modules/arrComments.js";
export const commentsList = document.querySelector(".comments"); 
import {addButton} from "./modules/validateForm.js";

renderComments();