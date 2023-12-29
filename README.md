# Disney 🧚

![screenshot](readme-assets/349186.jpg)

### Release 0

В папке `src` у тебя есть два файла `cartoon` и `person`. В первую очередь ознакомься с этими файлами и изучи содержимое.

```js
function Cartoon(
  title,
  year,
  forChildren = true,
  beginning = "Long, long ago..."
) {
  this.title = title;
  this.year = year;
  this.forChildren = forChildren;
  this.beginning = beginning;
}
```

Функция-конструктор `Сartoon` является общей для `DisneyCartoon` и `DreamWorksCartoon`. Тебе надо сделать наследование. Определись что должно быть в `prototype` и каким должен быть `constuctor`.

> p.s. загляни в тесты

### Release 1

А что со свойствами? В прошлом релизе мы сделали наследование, но свойства так и остались не тронутыми.

Сейчас у `DisneyCartoon` есть свойства:

```js
this.title = title;
this.year = year;
this.beginning = beginning;
this.studio = "Walt Disney";
```

А у `DreamWorksCartoon` :

```js
this.title = title;
this.year = year;
this.forChildren = forChildren;
this.studio = "DreamWorks";
```

Получается, что мы повторяем сами себя и дублируем свойства родительской функции-конструктора `Cartoon`. Давай организуем код так, чтобы код не дублировался, а из дочерних функций были доступны родительские.

> Подсказка: Ознакомьтесь с методами call, apply, bind. Они могут помочь избавиться от дублирования свойств.

### Release 2

Мультики созданы для того чтобы их смотреть.

В файле `person` есть функция-конструктор `Person`.
У неё должно быть имя( свойство `name` ) и список просмотренных фильмов( свойство `watchedMovies` ). А также метод просмотра фильма `watchMovie`.

`watchMovie` должен запускать метод `play` у мультика и добавлять новые мультики в список просмотренных. Не забудь сделать проверку, вдруг наш персонаж уже смотрел этот мультик.
# disney-master
