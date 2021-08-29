/*
 PopCat.Click AutoClicker v1.0

 <Developer>
 miniprime1 (규민이)
 
 <How to use>
 (1) Open 'https://popcat.click'
 (2) Open console (F12 or Fn+F12)
 (3) Insert code and run
*/

var event = new KeyboardEvent('keydown', {key: 'j', ctrlKey: true})

setInterval(
    function() {
        for (i=0; i<100; i++) {
            document.dispatchEvent(event)
        }
    }
)
