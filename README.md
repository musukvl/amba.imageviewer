# amba.imageviewer
JS image vierwer lightbox with zooming on scroll

demo: http://aiv.musuk.info

## Usage 

Html:
```
<a href="http://aiv.musuk.info/img/ship.jpg" class="popup" data-group="1">
   <img src="http://aiv.musuk.info/img/ship_small.jpg" alt="" />
</a>
```
*data-group* - attribute with group id for gallery.

JS:
```
$('.popup').ambaImageViewer();
```

## Bower
```
bower install amba.imageviewer --save
```

