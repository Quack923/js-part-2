const nameInput = document.querySelector(".add-form-name");
const commentInput = document.querySelector(".add-form-text");
import { comments } from "./arrComments.js";
import { renderComments } from "./renderStudents.js";
 export const addButton = document.querySelector(".add-form-button");

   addButton.addEventListener("click", () => {
    if (nameInput.value.trim() === "" || commentInput.value.trim() === "") {
        alert("Заполните все поля!");
        return;
    }

    const now = new Date();
    const dateTime = now.toLocaleString().slice(0, -3);

    comments.push({
        name: nameInput.value,
        date: dateTime,
        text: commentInput.value,
        likesCount: 0,
        isLiked: false,
    });

    nameInput.value = "";
    commentInput.value = "";

    renderComments();
});
