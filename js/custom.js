$(function () {
  $('.navbar-collapse a').on('click',function(){
    $(".navbar-collapse").collapse('hide');
  });
  AOS.init({
    disable: 'mobile',
    duration: 800,
    anchorPlacement: 'center-bottom'
  });
  $(function() {
    $('.navbar a, .hero-text a').on('click', function(event) {
      let $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });
});

const tabButton = document.getElementsByClassName("result");
let tabPanels = document.getElementsByClassName("tabPanel");

function showPanel(panelIndex) {
  for (let i = 0; i < tabButton.length; i++) {
    tabButton[i].style.color = ""
    tabButton[i].style.background = ""
  }
  tabButton[panelIndex].style.background = "#f13a11";
  tabButton[panelIndex].style.color = "#ffffff";
  tabButton[panelIndex].style.borderRadius = "10px";
  for (let i = 0; i < tabPanels.length; i++) {
    tabPanels[i].style.display = "none";
  }
  tabPanels[panelIndex].style.display = "block";
}
showPanel(0);
