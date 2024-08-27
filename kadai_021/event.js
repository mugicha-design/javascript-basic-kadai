const pushBtn = document.getElementById('btn');
const pushText = document.getElementById('text');

btn.addEventListener('click', () => {
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
        console.log(btn);    
    }, 2000);
});