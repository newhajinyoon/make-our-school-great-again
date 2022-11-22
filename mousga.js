//윤하진의 학교 조작코드

var event = new KeyboardEvent('keydown', {
key: 'g',
ctrlKey: true
});

setInterval(function(){
for (i = 0; i < 1; i++) {
document.dispatchEvent(event);
}
}, 5);
