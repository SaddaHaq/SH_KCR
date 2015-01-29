<body>
        <div id="lightbox"></div>
        <div id="prw" class="transition in">
            <a href="#"><i class="fa icon-remove"></i></a>
            <section>
                <div class="img"></div>
                <div class="prv"></div>
                <div class="nxt"></div>
            </section>
        </div>
        <?php require APP_PATH.'/layout/submenu_thecm.php'; ?>
        <div id="wrapper">
            <div id="container" class="glry">
                <div id="albums">
                    <div class="demo">
                        
                       <a href="<?=DOMAIN?>/the_cm/gallery/CM-kCR-launches-aasara-scheme" class="item">
                            <div class="intro transition in">
                                <section>
                                    <p class="ttl">CM-kCR launches aasara scheme</p>
                                </section>
                            </div>
                            <img src="<?=DOMAIN?>/assets/img/gallery/the_cm/CM-kCR-launches-aasara-scheme/albm-img.jpg"/>
                        </a>
                        
                       <a href="gallery.html#KCR-visit-warangal" class="item">
                            <div class="intro transition in">
                                <section>
                                    <p class="ttl">KCR visit warangal</p>
                                </section>
                            </div>
                            <img src="<?=DOMAIN?>/assets/img/gallery/the_cm/KCR-visit-warangal/albm-img.jpg"/>
                        </a>
                        
                        <a href="gallery.html#CM-KCR-Mahabubnagar-visit" class="item">
                            <div class="intro transition in">
                                <section>
                                    <p class="ttl">CM KCR Mahabubnagar visit</p>
                                </section>
                            </div>
                            <img src="<?=DOMAIN?>/assets/img/gallery/the_cm/CM-KCR-Mahabubnagar-visit/albm-img.jpg"/>
                        </a>
                        
                        <a href="gallery.html#KCR-visit-to-Bibinagar-NIMS" class="item">
                            <div class="intro transition in">
                                <section>
                                    <p class="ttl">KCR visit to Bibinagar NIMS</p>
                                </section>
                            </div>
                            <img src="<?=DOMAIN?>/assets/img/gallery/the_cm/KCR-visit-to-Bibinagar-NIMS/albm-img.jpg"/>
                        </a>
                        
                        <a href="gallery.html#Republic-Day-Celebrations-2015" class="item">
                            <div class="intro transition in">
                                <section>
                                    <p class="ttl">Republic Day Celebrations 2015</p>
                                </section>
                            </div>
                            <img src="<?=DOMAIN?>/assets/img/gallery/the_cm/Republic-Day-Celebrations-2015/albm-img.jpg"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!--Main wrapper-->


        <!--Javascript plugins-->
        <script type="text/javascript" src="<?=DOMAIN?>/assets/js/vendors/jquery-1.11.0.min.js"></script>
        <!-- main js engine -->
        <script type="text/javascript" src="<?=DOMAIN?>/assets/js/jquery.diamonds.js"></script>
        <script type="text/javascript" src="<?=DOMAIN?>/assets/js/custom.js"></script>
        <script type="text/javascript">
            $("#albums .demo").diamonds({
              size: 320, // Size of diamonds in pixels. Both width and height. 
              gap: 8, // Pixels between each square.
              hideIncompleteRow: false, // Hide last row if there are not enough items to fill it completely.
              autoRedraw: true, // Auto redraw diamonds when it detects resizing.
              itemSelector: ".item" // the css selector to use to select diamonds-items.
            });
        </script>        