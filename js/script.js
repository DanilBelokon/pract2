const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

document.querySelectorAll(".promo__adv img").forEach((item) => {
  item.remove();
});

document.querySelector(".promo__genre").textContent = "драма";
document.querySelector(".promo__bg").style.backgroundImage =
  "url('img/bg.jpg')";
movieDB.movies.sort();

const movlist = document.querySelector(".promo__interactive-list");
movlist.innerHTML = "";

movieDB.movies.forEach((film, id) => {
  movlist.innerHTML += `<li class="promo__interactive-item">${id + 1}. ${film}
                            <div class="delete"></div>
                        </li>`;
});

const btnAdd = document.querySelector(".add button"),
  inpValue = document.querySelector(".add input");

const addFilmList = (event) => {
  event.preventDefault();
  let vrem;
  if (inpValue.value.length > 21) {
    vrem = inpValue.value;
    vrem = vrem.slice(0, 21);
    console.log(vrem);
    vrem += "...";
    movieDB.movies.push(vrem);
  } else {
    movieDB.movies.push(inpValue.value);
  }
  movieDB.movies.sort();
  inpValue.value = "";
  movlist.innerHTML = ""; // Очищаем список перед обновлением
  movieDB.movies.forEach((film, id) => {
    movlist.innerHTML += `<li class="promo__interactive-item">${id + 1}. ${film}
                              <div class="delete"></div>
                          </li>`;
  });

  // Обновляем обработчики событий для всех элементов с классом .delete
  updateDeleteHandlers();

  if (document.querySelectorAll(".add input")[1].checked) {
    console.log("Добавляем любимый фильм");
  }
};

btnAdd.addEventListener("click", addFilmList);

const delItem = (event) => {
  event.target.parentElement.remove();
  const index = Array.from(movlist.children).indexOf(
    event.target.parentElement
  );
  movieDB.movies.splice(index, 1);
  movlist.innerHTML = ""; // Очищаем список перед обновлением
  movieDB.movies.forEach((film, id) => {
    movlist.innerHTML += `<li class="promo__interactive-item">${id + 1}. ${film}
                              <div class="delete"></div>
                          </li>`;
  });
  updateDeleteHandlers();
};

// Функция для обновления обработчиков событий
const updateDeleteHandlers = () => {
  const delTrash = document.querySelectorAll(".delete");
  delTrash.forEach((item) => {
    item.addEventListener("click", delItem);
  });
};

// Инициализация обработчиков событий при загрузке страницы
updateDeleteHandlers();
