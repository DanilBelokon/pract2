"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const addForm = document.querySelector("form.add"),
    addInput = addForm.querySelector(".adding__input"),
    checkbox = addForm.querySelector("[type='checkbox']"),
    adv = document.querySelectorAll(".promo__adv img");

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.checked;
    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      }
      if (favorite) {
        console.log("Добавляем любимы фильм");
      }
      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);

      createMovieList(movieDB.movies, movlist);
    }
    event.target.reset();
  });

  const deleteAdv = (arr) => {
    arr.forEach((item) => {
      item.remove();
    });
  };

  const makeChanges = () => {
    document.querySelector(".promo__genre").textContent = "драма";

    document.querySelector(".promo__bg").style.backgroundImage =
      "url('img/bg.jpg')";
  };

  const sortArr = (arr) => {
    arr.sort();
  };

  const movlist = document.querySelector(".promo__interactive-list");

  function createMovieList(film, parent) {
    parent.innerHTML = "";
    sortArr(film);
    film.forEach((film, id) => {
      parent.innerHTML += `<li class="promo__interactive-item">${
        id + 1
      }. ${film}
                                <div class="delete"></div>
                            </li>`;
    });
    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
        createMovieList(film, parent);
      });
    });
  }
  makeChanges();
  deleteAdv(adv);
  createMovieList(movieDB.movies, movlist);
});
