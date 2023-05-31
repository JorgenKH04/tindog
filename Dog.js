class Dog {
  constructor(data) {
    Object.assign(this, data);
  }
  getDogHtml() {
    const { name, avatar, age, bio } = this;
    return `
        <img src="${avatar}" alt="Picture of ${name}" />
        <div class="text-div">
            <h2>${name}, ${age}</h2>
            <p>${bio}</p>
        </div>
        <img
          class="popup"
          id="like-tag"
          src="images/badge-like.png"
          alt="liked"
        />
        <img
          class="popup"
          id="dislike-tag"
          src="images/badge-nope.png"
          alt="disliked"
        />
        `;
  }
}

export default Dog;
