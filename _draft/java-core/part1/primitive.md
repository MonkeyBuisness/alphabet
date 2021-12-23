# Примитивные типы данных, комментарии

Давайте представим, что мы имеем следующий код, написанный на языке Java:

```java
package main;

public class Main {

    public static void main(String[] args) {

    }
}
```

Этот код представляет из себя минимальный набор команд, необходимых для запуска любого Java-приложения.
Если вы до этого не были знакомы ни с одним из языков программирования, то для вас будет непонятно, что значат приведенные выше синтаксические конструкции. Но давайте мы пока не будем беспокоиться об этом. Все описанные инструкции вы поймете по мерее дальнейшего изучения книги. На данный момент всё, что нас будет интересовать - это то, что выполнение нашей программы будет начинаться внутри `{}`, стоящих после конструкции `public static void main(String[] args)`.

Также для вывода информации на экран, мы будем использовать команду `System.out.println(...)`, полное назначение которой вы поймете чуть позже. 

## Комментарии

Общее назначение комментариев в коде - это убрать из процесса компиляции/интерпретации части кода, которые не должны быть выполнены, без удаления самого кода.

В Java предусмотрены 2 типа комментариев:

- однострочный (задается `//`) - предназначен для комментирования одной строки в коде
- многострочный (задается `/* */`) - предназначен для комментирования сразу нескольких строк в коде

Например, следующий фрагмент кода должен вывести на экран числа от `1` до `5`. Но, поскольку строки с выводом цифры `3` и `5` закомментированы, то после запуска на экране мы увидим только цифры `1`, `2` и `4`.

<!-- ycode:{
    lang: java
    code: |
        package main;

        public class Main {

            public static void main(String[] args) {
                System.out.println(1);
                System.out.println(2);
                // System.out.println(3);
                System.out.println(4);
                // System.out.println(5);
            }
        } 
} -->

> Попробуйте самостоятельно закомментировать, либо наоборот раскомментировать оставшуюся часть строк, и посмотрите, как будет меняться вывод программы.

<!-- br: -->

Как вы заметили, Java ингорирует закомментированные строки программы, и пропускает процесс их интерпретации при выполнении. А это значит, что внутри комментариев может располагаться не только код, но и любой текст. Разработчики часто прибегают к использованию комментариев в коде, чтобы обозначить части программы, сложные для понимания другими программистами.

Давайте добавим комментарии с пояснениями к предыдущему примеру:

<!-- ycode:{
    lang: java
    code: |
        package main;

        public class Main {

            public static void main(String[] args) {
                /*
                    Здесь начинается программа.

                    Все строки с кодом, которые описаны ниже, будут выполнены последовательно,
                    одна за другой.

                    Суть данной программы - вывести на экран целые числа в диапазоне [1..5].
                */

                System.out.println(1);
                System.out.println(2);
                System.out.println(3);
                System.out.println(4);
                System.out.println(5);

                // поскольку перед закрывающей } больше нет кода,
                // то программа завершится.
            }
        } 
} -->

## Примитивные типы данных

Работа любой программы, написанной на любом языке программирования в частности сводится к тому, чтобы оперировать данными.
Данные располагаются в [оперативной памяти](https://ru.wikipedia.org/wiki/%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F_%D0%BF%D0%B0%D0%BC%D1%8F%D1%82%D1%8C) устройства, на котором запущена программа.

Вся информация, которой оперирует запущенный код, представляет из себя набор [бит](https://ru.wikipedia.org/wiki/%D0%91%D0%B8%D1%82), который затем трансформируется в набор [байт](https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%B9%D1%82).

Другими словами, из-за особенности архитектуры современных вычислительных устройств (персональных компьютеров, ноутбуков, смартфонов, игровых приставок и т.п.), данные в памяти хранятся как набор бит, которые каждая программа интерпретирует по своему.

Например, имея следующий набор бит в памяти в [2-й системе счисления](https://ru.wikipedia.org/wiki/%D0%94%D0%B2%D0%BE%D0%B8%D1%87%D0%BD%D0%B0%D1%8F_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0_%D1%81%D1%87%D0%B8%D1%81%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F):

```
1010000000111000
```

Программа может взять всю последовательность как одно значение, и тогда она будет оперировать числом `41016` (1010000000111000 в [10-й системе счисления](https://ru.wikipedia.org/wiki/%D0%94%D0%B5%D1%81%D1%8F%D1%82%D0%B8%D1%87%D0%BD%D0%B0%D1%8F_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0_%D1%81%D1%87%D0%B8%D1%81%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F#:~:text=%D0%94%D0%B5%D1%81%D1%8F%D1%82%D0%B8%CC%81%D1%87%D0%BD%D0%B0%D1%8F%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%CC%81%D0%BC%D0%B0%20%D1%81%D1%87%D0%B8%D1%81%D0%BB%D0%B5%CC%81%D0%BD%D0%B8%D1%8F%20%E2%80%94%20%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0,%2C%200%2C%20%D0%BD%D0%B0%D0%B7%D1%8B%D0%B2%D0%B0%D0%B5%D0%BC%D1%8B%D0%B5%20%D0%B0%D1%80%D0%B0%D0%B1%D1%81%D0%BA%D0%B8%D0%BC%D0%B8%20%D1%86%D0%B8%D1%84%D1%80%D0%B0%D0%BC%D0%B8.)).

Или разбить эту паследовательность на `2 части` по `8` бит каждая и оперировать уже 2-мя числами:
- `160` - 10100000 в 10-й системе
- `56`  - 00111000 в 10-й системе

и т.д. Главное - размер последовательности бит **должен быть кратен 8**. Максимальная последовательность, которая может быть взята программой, ограничивается [разрядностью процессора](https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%88%D0%B8%D0%BD%D0%BD%D0%BE%D0%B5_%D1%81%D0%BB%D0%BE%D0%B2%D0%BE) или операционной системы. Для 64-х разрядной архитектуры - это `64` бита, для 32-х разрядной архитектуры - это `32` бита и т.д.

### НО НЕ ВОЛНУЙТЕСЬ!

На самом деле, используя Java, вам не придется оперировать двоичными данными. Вы можете задавать значения в 10-й системе, которая наиболее привычна человеку для понимания. А компилятор языка сам переведет все заданные в программе значения в двоичный формат.


## Переменные

Для хранения данных в программе предназначены переменные. Переменная представляет именованную область памяти, которая хранит значение определенного типа. Каждая переменная имеет тип, имя и значение. Тип определяет, какую информацию может хранить переменная или диапазон допустимых значений.

Переменные объявляются следующим образом:

1
тип_данных имя_переменной;
Например, определим переменную, которая будет называться x и будет иметь тип int:

1
int x;


## Лицензия

[MIT](https://github.com/MonkeyBuisness/alphabet/blob/master/LICENSE)

<!-- br: -->

## Ссылки

- [История языка JAVA (ссылка на оригинальную статью)](http://www.interface.ru/home.asp?artId=1549)
- [Спецификации языка Java](https://ru.wikipedia.org/wiki/Java)
- [Онлайн компилятор языка](https://www.tutorialspoint.com/compile_java_online.php)
- [Индекс TIOBE для Java](https://www.tiobe.com/tiobe-index/java/)

<!-- author:[
     {
	    "name":   "Artsem Hutarau",
	    "link":   "https://github.com/MonkeyBuisness",
	    "avatar": "https://github.com/MonkeyBuisness/alphabet/raw/master/.github/assets/me.jpg",
	    "about":  "Go developer, IT teacher"
     }
] -->