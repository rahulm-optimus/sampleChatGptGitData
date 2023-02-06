const card = document.querySelectorAll(".card");
console.log(card);
const modal = document.querySelector(".show_modal");
const content = document.querySelectorAll(".content");
console.log(content);
const close = document.querySelector(".cls_btn");
const gif = document.querySelector(".gif");

close.addEventListener("click", function () {
  modal.classList.add("hidden");

  card.forEach((x) => x.classList.remove("active"));
  content.forEach((x) => x.classList.add("hidden"));
  //hide the gif
  gif.classList.remove("hidden");
});

const showModalClick = function () {
  modal.classList.remove("hidden");
  console.log("button clicked");
  //hide the gif
  gif.classList.add("hidden");
};

card.forEach((x) => {
  x.addEventListener("click", function (e) {
    showModalClick();

    //we need to remove all the active classes
    card.forEach((x) => x.classList.remove("active"));
    //need to hide all content
    content.forEach((x) => x.classList.add("hidden"));
    //add to the targeted class
    x.classList.add("active");
    //get the parent class of the targeted element
    const target = e.target.closest(".card");
    console.log(target.dataset.tab);
    //remove hidden component
    let randomContent = document.querySelector(
      `.content--${target.dataset.tab}`
    );
    randomContent.classList.remove("hidden");
  });
});
//////////
if (module.hot) {
  module.hot.accept();
}

// const state = {
//   key: [1, 2, 3, 4],
//   values: [apple, banana, kiwi, mango],
//   user: { loggedIn: false },
// };
// const stateClone = cloneDeep(state);
// const stateCloneObject = Object.assign({}, (state.loggedIn = true));
// console.log(state);
// console.log(stateClone);
// console.log(stateCloneObject);
console.log(welcome);

//can push any branch
