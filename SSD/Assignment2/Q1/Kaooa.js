const $b1 = $("#box1");
const $b2 = $("#box2");
const $line = $("line");
const padding = 7;
const coordinates = function() {
    const x1 = $b1.offset().left + $b1.width()/2-padding;
    const y1 = $b1.offset().top + $b1.height()/2-padding;
    const x2 = $b2.offset().left + $b1.width()/2-padding;
    const y2 = $b2.offset().top + $b1.height()/2-padding;

    $line.attr("x1", x1);
    $line.attr("y1", y1);
    $line.attr("x2", x2);
    $line.attr("y2", y2);
}
coordinates();


$('#box1').draggable({
    drag: coordinates
});

$('#box2').draggable({
    drag: coordinates
});