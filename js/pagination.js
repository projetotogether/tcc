$(document).ready(function() {
    const pages = $('.page');
    const prevBtn = $('.prev-btn');
    const nextBtn = $('.next-btn');
    
    let currentPage = 0;
    
    function showPage(pageNumber) {
        pages.hide();
        pages.eq(pageNumber).show();
    }
    
    function updatePaginationButtons() {
        prevBtn.prop('disabled', currentPage === 0);
        nextBtn.prop('disabled', currentPage === pages.length - 1);
    }
    
    prevBtn.on('click', function() {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
            updatePaginationButtons();
        }
    });
    
    nextBtn.on('click', function() {
        if (currentPage < pages.length - 1) {
            currentPage++;
            showPage(currentPage);
            updatePaginationButtons();
        }
    });
    
    showPage(currentPage);
    updatePaginationButtons();
});