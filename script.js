// document.addEventListener("DOMContentLoaded", () => {
//     const hamburger = document.querySelector('.hamburger');
//     const cross = document.querySelector('.cross');
//     const sidebar = document.querySelector('.sidebar');

//     cross.style.display = 'none';

//     hamburger.addEventListener("click", () => {
//         sidebar.classList.toggle('sidebarGo');
//         hamburger.style.display = 'none';
//         cross.style.display = 'block';
//     });

//     cross.addEventListener("click", () => {
//         sidebar.classList.toggle('sidebarGo');
//         cross.style.display = 'none';
//         hamburger.style.display = 'block';
//     });

//     if (sidebar.classList.contains('sidebarGo')) {
//         document.querySelector('.ham').style.display = 'inline';
//         document.querySelector('.cross').style.display = 'none';
//     } else {
//         document.querySelector('.ham').style.display = 'none';
//         document.querySelector('.cross').style.display = 'inline';
//     }
// })


document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger');
    const cross = document.querySelector('.cross');
    const sidebar = document.querySelector('.sidebar');

    cross.style.display = 'none';

    hamburger.addEventListener("click", () => {
        sidebar.classList.toggle('sidebarGo');
        hamburger.style.display = 'none';
        cross.style.display = 'block';
        updateDisplayStyles();
    });

    cross.addEventListener("click", () => {
        sidebar.classList.toggle('sidebarGo');
        cross.style.display = 'none';
        hamburger.style.display = 'block';
        updateDisplayStyles();
    });

    function updateDisplayStyles() {
        if (sidebar.classList.contains('sidebarGo')) {
            document.querySelector('.ham').style.display = 'inline';
            document.querySelector('.cross').style.display = 'none';
        } else {
            document.querySelector('.ham').style.display = 'none';
            document.querySelector('.cross').style.display = 'inline';
        }
    }
});
