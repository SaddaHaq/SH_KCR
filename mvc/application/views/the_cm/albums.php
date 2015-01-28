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
        <a id="main-mnu" class="main-mnu" href="#"><img src="<?=DOMAIN?>/assets/img/logo_kcr.png" width="100" height="100" /></a>
        <div id="ad-mnu" class="ad-mnu transition">
            <h3 class="men-title">The CM-Initiatives</h3>
            <section>
                <div class="diamond" data-tag="My policies towards a developed Telangana">
                    <a href="<?=DOMAIN?>/the_cm/initiatives">
                        <div class="in-dmnd transition in"></div>
                        <div class="txt-dmnd">
                            <div class="txt">Initiatives</div>
                        </div>
                    </a>
                </div>
                <div class="diamond" data-tag="Photos and videos">
                    <a href="<?=DOMAIN?>/the_cm/albums">
                        <div class="in-dmnd transition in"></div>
                        <div class="txt-dmnd">
                            <div class="txt">Gallery</div>
                        </div>
                    </a>
                </div>
                <div class="diamond" data-tag="My take on people, policies and politics">
                    <a href="<?=DOMAIN?>/the_cm/blog">
                        <div class="out-dmnd"></div>
                        <div class="in-dmnd transition in"></div>
                        <div class="txt-dmnd">
                            <div class="txt">Blog</div>
                        </div>
                    </a>
                </div>
                <div class="diamond" data-tag="Donate for a better Telangana">
                    <a href="#" target="_blank">
                        <div class="in-dmnd transition in"></div>
                        <div class="txt-dmnd adj-top">
                            <div class="txt">CM <br> Relief Fund</div>
                        </div>
                    </a>
                </div>
                <div class="diamond" data-tag="My journey from a common man to a freedom fighter">
                    <a href="<?=DOMAIN?>/the_cm/news">
                        <div class="out-dmnd"></div>
                        <div class="in-dmnd transition in"></div>
                        <div class="txt-dmnd">
                            <div class="txt">News</div>
                        </div>
                    </a>
                </div>
                <div class="diamond shw-top-mnu" id="shw-top-mnu">
                    <div class="out-dmnd"></div>
                    <a href="<?=DOMAIN?>">
                        <div class="in-dmnd transition in"></div>
                        <div class="txt-dmnd adj-top">
                            <div class="txt">Back<br>to home</div>
                        </div>
                    </a>
                </div>
            </section>
            <p class="tag"></p>
        </div>
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