//  Khi bấm nút next | previous để chuyển trang
const pageTurnBtn = document.querySelectorAll(".next-previout-btn");
pageTurnBtn.forEach((element, index) => {
    element.onclick = () => {
        const pageTurnId = element.getAttribute('data-page');
        console.log("pageTurnBtn.forEach - pageTurnId:", pageTurnId)
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500)
        }
    }
})

const pages = document.querySelectorAll('.book-page.page-right'); // danh sách pages
let totalPages = pages.length;
let pageNumber = 0;
const contactMessage = document.querySelector('.back-profile'); // nút gửi liên hệ

function revergePageIndex() {
    pageNumber--;
    if (pageNumber < 0)
        pageNumber = totalPages - 1;
}

// Bấm nút thông tin cá nhân
contactMessage.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            revergePageIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                revergePageIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)
        }, (index + 1) * 200 + 100);
    })
}

// Show animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100);

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800);

setTimeout(() => {
    pageLeft.style.zIndex = 20;
}, 3200);

pages.forEach((_, index) => {
    setTimeout(() => {
        revergePageIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            revergePageIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500)
    }, (index + 1) * 200 + 2100);
})







