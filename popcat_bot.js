/*
 PopCat.Click AutoClicker v1.0

 <Developer>
 (1) miniprime1 (Kyumin)

 <How to use>
 (1) Open 'https://popcat.click'
 (2) Open console (F12 or Fn+F12)
 (3) Insert code and run
*/

var event = [
    new KeyboardEvent('keydown', {key: 'a', ctrlKey: true}),
    new KeyboardEvent('keydown', {key: 'b', ctrlKey: true}),
    new KeyboardEvent('keydown', {key: 'c', ctrlKey: true}),
    new KeyboardEvent('keydown', {key: 'd', ctrlKey: true}),
    new KeyboardEvent('keydown', {key: 'e', ctrlKey: true}),
    new KeyboardEvent('keydown', {key: 'f', ctrlKey: true}),
    new KeyboardEvent('keydown', {key: 'g', ctrlKey: true}),
    new KeyboardEvent('keydown', {key: 'h', ctrlKey: true}),
    new KeyboardEvent('keydown', {key: 'i', ctrlKey: true}),
    new KeyboardEvent('keydown', {key: 'j', ctrlKey: true}),
    new KeyboardEvent('keydown', {key: 'k', ctrlKey: true}),
    new KeyboardEvent('keydown', {key: 'l', ctrlKey: true}),
    new KeyboardEvent('keydown', {key: 'm', ctrlKey: true}),
    new KeyboardEvent('keydown', {key: 'n', ctrlKey: true}),
    new KeyboardEvent('keydown', {key: 'o', ctrlKey: true}),
    new KeyboardEvent('keydown', {key: 'p', ctrlKey: true}),
    new KeyboardEvent('keydown', {key: 'q', ctrlKey: true}),
    new KeyboardEvent('keydown', {key: 'r', ctrlKey: true}),
    new KeyboardEvent('keydown', {key: 's', ctrlKey: true}),
    new KeyboardEvent('keydown', {key: 't', ctrlKey: true}),
    new KeyboardEvent('keydown', {key: 'u', ctrlKey: true}),
    new KeyboardEvent('keydown', {key: 'v', ctrlKey: true}),
    new KeyboardEvent('keydown', {key: 'w', ctrlKey: true}),
    new KeyboardEvent('keydown', {key: 'x', ctrlKey: true}),
    new KeyboardEvent('keydown', {key: 'y', ctrlKey: true}),
    new KeyboardEvent('keydown', {key: 'z', ctrlKey: true})
]

setInterval(
    function() {
        for (i=0; i<100; i++) {
            var num = Math.floor(Math.random() * (26 + 1));
            document.dispatchEvent(event[num])
        }
    }
)