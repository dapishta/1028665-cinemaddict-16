import { createNavTemplate } from "./view/nav-view";
import { createUserMenuTemplate } from "./view/user-menu-view";
import { createSorterView } from "./view/sorter-view";
import { RenderPosition, renderTemplate } from "./render";
import { createFilmsListTemplate} from "./view/films-list-view";
import { createFilmCardTemplate } from "./view/film-card-view";
import { createFooterTemplate } from "./view/footer-view";
import { createShowMoreBtnTemplate } from "./view/show-more-btn-view";
import { createFilmDetailedTemplate } from "./view/film-detailed-view";
import { createFilmsListTopRatedView } from "./view/films-list-top-rated-view";
import { createFilmsListMostCommentedView } from "./view/films-list-most-commented-view";

const FILMS_COUNT = 5; 
const FILMS_EXTRA_COUNT = 2; 

const siteBodyElement = document.querySelector('body');
const siteMainElement = siteBodyElement.querySelector('.main');
const siteHeaderElement = siteBodyElement.querySelector('.header');


renderTemplate(siteMainElement, createNavTemplate(), RenderPosition.AFTERBEGIN);
renderTemplate(siteMainElement, createSorterView(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createFilmsListTemplate(), RenderPosition.BEFOREEND);


const siteFilmsElement = siteMainElement.querySelector('.films');
const siteMainFilmsListElement = siteFilmsElement.querySelector('.films-list').querySelector('.films-list__container');


for (let i = 0; i < FILMS_COUNT; i++){
  renderTemplate(siteMainFilmsListElement, createFilmCardTemplate(), RenderPosition.AFTERBEGIN);
}

renderTemplate(siteFilmsElement, createFilmsListTopRatedView(), RenderPosition.BEFOREEND);
renderTemplate(siteFilmsElement, createFilmsListMostCommentedView(), RenderPosition.BEFOREEND);

const siteFilmsListTopRatedElement = siteFilmsElement.querySelector('.films-list--top-rated').querySelector('.films-list__container');
const siteFilmsListMostCommentedElement = siteFilmsElement.querySelector('.films-list--most-commented').querySelector('.films-list__container');

for (let i = 0; i < FILMS_EXTRA_COUNT; i++){
  renderTemplate(siteFilmsListTopRatedElement, createFilmCardTemplate(), RenderPosition.AFTERBEGIN);
  renderTemplate(siteFilmsListMostCommentedElement, createFilmCardTemplate(), RenderPosition.AFTERBEGIN);
}

renderTemplate(siteMainFilmsListElement, createShowMoreBtnTemplate(), RenderPosition.AFTEREND);
renderTemplate(siteBodyElement, createFooterTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteHeaderElement, createUserMenuTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteBodyElement, createFilmDetailedTemplate(), RenderPosition.BEFOREEND);