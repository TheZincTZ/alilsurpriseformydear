var images = [
    { src: '/puzzlepic/pic1.jpg', title: 'Image 1' },
    { src: '/puzzlepic/pic2.jpg', title: 'Image 2' },
    { src: '/puzzlepic/pic9.jpg', title: 'Image 3' },
    { src: '/puzzlepic/pic11.jpg', title: 'Image 4' },
    { src: '/puzzlepic/pic12.jpg', title: 'Image 5' }
];

$(function () {
    var gridSize = $('#levelPanel :radio:checked').val();
    imagePuzzle.startGame(images, gridSize);
    $('#newPhoto').click(function () {
        var gridSize = $('#levelPanel :radio:checked').val();
        imagePuzzle.startGame(images, gridSize);
    });

    $('#levelPanel :radio').change(function (e) {
        var gridSize = $(this).val();
        imagePuzzle.startGame(images, gridSize);
    });
});
function rules() {
    alert('Rearrange the pieces so that you get a sample image. \nThe steps taken are counted');
}