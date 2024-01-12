document.addEventListener('DOMContentLoaded', () => {
    let loadingBar = document.getElementById('loading-bar');
    let loadingPercent = document.getElementById('loading-percent');
    let percent = 0;

    let loadingInterval = setInterval(() => {
        percent++;
        loadingBar.style.width = percent + '%';
        loadingPercent.innerText = percent + '%';

        if (percent === 100) {
            clearInterval(loadingInterval);
            document.getElementById('loading').style.display = 'none';
        }
    }, 40);

    setTimeout(() => {
        clearInterval(loadingInterval);
        percent = 99;
        loadingBar.style.width = percent + '%';
        loadingPercent.innerText = percent + '%';
    }, 3960);
});
