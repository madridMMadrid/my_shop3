<!DOCTYPE html>
<!--[if IE]><![endif]-->
<!--[if IE 8 ]>
<html dir="<?php echo $direction; ?>" lang="<?php echo $lang; ?>" class="ie8"><![endif]-->
<!--[if IE 9 ]>
<html dir="<?php echo $direction; ?>" lang="<?php echo $lang; ?>" class="ie9"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
<html dir="<?php echo $direction; ?>" lang="<?php echo $lang; ?>">
<!--<![endif]-->
<!-- head -->
<head>
    <meta charset="UTF-8" />
    <link rel="apple-touch-icon" sizes="57x57" href="/image/catalog/icon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/image/catalog/icon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/image/catalog/icon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/image/catalog/icon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/image/catalog/icon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/image/catalog/icon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/image/catalog/icon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/image/catalog/icon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/image/catalog/icon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/image/catalog/icon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/image/catalog/icon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/image/catalog/icon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/image/catalog/icon/favicon-16x16.png">
    <link rel="manifest" href="/image/catalog/icon/manifest.json">
    <meta name="msapplication-TileColor" content="#9fc669">
    <meta name="msapplication-TileImage" content="/image/catalog/icon/ms-icon-144x144.png">
    <meta name="theme-color" content="#9fc669">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title><?php echo $title; ?></title>
    <base href="<?php echo $base; ?>" />
	<?php if ( $description ) { ?>
        <meta name="description" content="<?php echo $description; ?>" />
	<?php } ?>
	<?php if ( $keywords ) { ?>
        <meta name="keywords" content="<?php echo $keywords; ?>" />
	<?php } ?>
    <meta property="og:title" content="<?php echo $title; ?>" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="<?php echo $og_url; ?>" />
	<?php if ( $og_image ) { ?>
        <meta property="og:image" content="<?php echo $og_image; ?>" />
	<?php } else { ?>
        <meta property="og:image" content="<?php echo $logo; ?>" />
	<?php } ?>
    <meta property="og:site_name" content="<?php echo $name; ?>" />
    <link href="catalog/view/javascript/main/css/app.0bb138933898dc1ec1ff.css" rel="stylesheet">
	<?php foreach( $styles as $style ) { ?>
        <link href="<?php echo $style['href']; ?>" type="text/css" rel="<?php echo $style['rel']; ?>"
              media="<?php echo $style['media']; ?>" />
	<?php } ?>
	<?php foreach( $links as $link ) { ?>
        <link href="<?php echo $link['href']; ?>" rel="<?php echo $link['rel']; ?>" />
	<?php } ?>
    <!--/ {* Default Style Opencart/Ocstore *}
    <script src="catalog/view/javascript/jquery/jquery-2.1.1.min.js" type="text/javascript"></script>
    <link href="catalog/view/javascript/bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen" />
    <script src="catalog/view/javascript/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
    <link href="catalog/view/javascript/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <link href="//fonts.googleapis.com/css?family=Open+Sans:400,400i,300,700" rel="stylesheet" type="text/css" />
    <link href="catalog/view/theme/default/stylesheet/stylesheet.css" rel="stylesheet">
    <script src="catalog/view/javascript/common.js" type="text/javascript"></script>
    / -->

	<?php /* foreach( $analytics as $analytic ) {  echo $analytic; } */?>
    <!-- Yandex.Metrika counter -->
    <script>
        (function (m, e, t, r, i, k, a) {
            m[i] = m[i] || function () {
                (m[i].a = m[i].a || []).push(arguments)
            };
            m[i].l = 1 * new Date();
            k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode
                .insertBefore(k, a)
        })
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(27855237, "init", {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true,
            ecommerce: "dataLayer"
        });
    </script>
    <noscript>
        <div><img src="https://mc.yandex.ru/watch/27855237" style="position:absolute; left:-9999px;" alt=""/></div>
    </noscript>
    <!-- /Yandex.Metrika counter -->
</head>
<!-- /head -->
<body id="layout_body" class="<?php echo $class; ?>">

<!-- mobile-nav -->
<nav class="mobile-nav">
    <div class="mobile-nav__layout">
        <div class="mobile-nav__nav">
            <div class="mobile-nav__menu">
                <a href="#menu" class="mobile-nav__menu-link js-navTggl menu-burger">
                    <span class="menu-burger__bar"></span>
                    <span class="menu-burger__bar"></span>
                </a>
            </div>
            <div class="mobile-nav__contacts">
                <a href="tel:%CITY_PHONE%"
                   class="mobile-nav__contacts-link">
                    <svg class="svg-icon icon-phone">
                        <use xlink:href="catalog/view/javascript/skin/images/svg-sprite.svg#phone"></use>
                    </svg>
                </a>
            </div>
        </div>
        <div class="mobile-nav__logo">
            <a href="<?php echo $home; ?>" title="Prime Wood">
                <img src="catalog/view/javascript/skin/images/logo_s.svg" alt="Prime Wood">
            </a>
        </div>

        <div class="mobile-nav__favorite">
            <a href="#" class="header-actions__item header-favorite">
                <svg class="svg-icon icon-favorite favorite-not-added">
                    <use xlink:href="#favorite-icon"></use>
                </svg>
                <svg class="svg-icon icon-favorite favorite-added">
                    <use xlink:href="#favorite-icon-filled"></use>
                </svg>
                <span id="favorite_count">0</span>
            </a>
        </div>

        <div class="mobile-nav__basket">

            <a href="<?php echo $new_cart; ?>" class="nav-basket">
                <svg class="svg-icon icon-basket nav-basket__icon">
                    <use xlink:href="catalog/view/javascript/skin/images/svg-sprite.svg#basket"></use>
                </svg>
                <span class="nav-basket__count" id="js_mob_cart_count"><?php echo $cart_count_products; ?></span>
            </a>
        </div>
    </div>
</nav>
<!-- /mobile-nav -->

<div class="container">
    <header id="header" class="header-sticky" itemscope itemtype="http://schema.org/Organization">
        <div class="header-sticky__container">
            <div class="wrapper">
                <div class="header_wrapper clearfix">

                    <div class="logo-sticky">
                        <a href="<?php echo $home; ?>" title="Prime Wood">
                            <img src="catalog/view/javascript/skin/images/logo_s.svg" alt="Prime Wood">
                        </a>
                    </div>

                    <div class="left">
                        <div class="panel-top">
                            <div class="top_contacts">
                                <span class="phone green_phone">
                                    <a itemprop="telephone" class="mgo-number"
                                       href="tel:%CITY_PHONE%">%CITY_PHONE%
                                    </a>
                                </span>
                                <span class="worktime green_worktime worktime_long_text">Работаем 24/7</span>
                            </div>
                            <div class="header-actions">
                                <a class="header-actions__item header-favorite">
                                    <svg class="svg-icon icon-favorite favorite-not-added">
                                        <use xlink:href="#favorite-icon"></use>
                                    </svg>
                                    <svg class="svg-icon icon-favorite favorite-added">
                                        <use xlink:href="#favorite-icon-filled"></use>
                                    </svg>
                                    <div class="header-actions-hint">Избранное</div>
                                    <span id="favorite_count">0</span>
                                </a>

                                <a class="header-actions__item header-compare">
                                    <svg class="svg-icon icon-compare">
                                        <use xlink:href="#compare-icon"></use>
                                    </svg>
                                    <div class="header-actions-hint">Сравнить</div>
                                    <span id="compare_count">0</span>
                                </a>
                            </div>

                            <div class="location">
                                <span class="location-text"> Ваш город:</span>
                                <div class="prmn-cmngr"><?php echo $prmn_cmngr; ?></div>
                            </div>
                        </div>


                        <div class="mobile-menu js-navTgglBlock" data-nav_id="menu">
                            <div class="mobile-menu__top">
                                <ul class="top_menu">
                                    <li class="">
                                        <a href="/about/">О компании</a>
                                    </li>
                                    <li class="">
                                        <a href="/servis/otzyvy">Отзывы</a>
                                    </li>
                                    <li class="">
                                        <a href="/jobs/">Вакансии</a>
                                    </li>
                                    <li class="">
                                        <a href="/nashi_raboty/">Наши работы</a>
                                    </li>
                                    <li class="">
                                        <a href="/kontakty">Контакты</a>
                                    </li>
                                    <li class="">
                                        <a href="/servis/klientskaya-podderzhka">Клиентская поддержка</a>
                                    </li>
                                </ul>
								<?php echo $search; ?>
                            </div>
                            <div class="helpful_wrap">
                                <ul class="helpful horizontal">
                                    <li>
                                        <a href="/dizain_proekt/"><i class="design_ic"></i>
                                            <span>Дизайн проект</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/dostavka/"><i class="delivery_ic"></i>
                                            <span>Доставка</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/sborka/"><i class="fitting_ic"></i>
                                            <span>Сборка мебели</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <!-- metrika-goal-->
                        <div class="contact_bttns">
                            <a href="#callback" class="open_dialog green_btn" data-title="Заказ обратного звонка"
                               onclick="yaCounter27855237.reachGoal('ring'); return true;">Заказать
                                звонок
                            </a>
                            <a href="#send_message" class="open_dialog seagreen_btn"
                               data-title="Написать нам сообщение" onclick="yaCounter27855237.reachGoal('mail'); return true;">Написать нам
                            </a>
                        </div>
                        <!--/metrika-goal-->
                        <div class="basket" id="js_header_cart">
							<?php echo $cart; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mobile-nav-shadow"></div>
    </header>
