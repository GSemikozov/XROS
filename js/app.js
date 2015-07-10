/**
 * Created by gera on 09.07.15.
 */
/*======================= full columns height ========================*/
$(document).ready(function() {
    function setEqualHeight(columns) {
        var tallestcolumn = 0;
        columns.each(
            function()
            {
                currentHeight = $(this).height();
                if(currentHeight > tallestcolumn)
                {
                    tallestcolumn  = currentHeight;
                }
            }
        );
        columns.height(tallestcolumn);
    }
    setEqualHeight($(".columnsHeight > div"));
});
/*===================== toogle left side menu =========================*/
$(window).load(function(){
    $("[data-toggle]").click(function() {
        var toggle_el = $(this).data("toggle");
        $(toggle_el).toggleClass("open-sidebar");
    });
});
/*===================== active class for left content menu ============*/
$(function() {
    $('.left-side-menu li').hover(
        function(){
            $(this).find('.fa').addClass('fa-star').removeClass('fa-star-o');
        },
        function() {
            $(this).find('.fa').addClass('fa-star-o').removeClass('fa-star');
        }
    );
});
/*============= activate plugin for the form elements =================*/
$(function() {
    //switchery
    var elem = document.querySelector('.js-switch');
    var switchery = new Switchery(elem, { size: 'small', color: '#999',
        secondaryColor: '#666', jackColor: '#fff', jackSecondaryColor: '#666' });
});
/*================ activate search input in modal window ===============*/
$(function() {
    $('.modal-add-btn').on('click', function () {
        $('#search-members').removeClass('hidden').addClass('visible');
        $(this).remove();
    });
});
/*====================== autocomplete ui widget ========================*/
$(function() {
    var availableTags = [
        "James Horton",
        "Tair Barkay",
        "Danny Degashvili",
        "Harry White",
        "Name",
        "C++",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "JavaScript",
        "Lisp",
        "PHP",
        "Ruby",
        "Scala"
    ];

    $( ".autocomplete" ).autocomplete({
        source: availableTags
    });
});
