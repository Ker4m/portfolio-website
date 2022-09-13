$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Engineering Student", "Software Developer", "Front End Developer", "IT lover"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Student", "Developer", "IT lover"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    // mo.js animation on click
    const dur = 1500,
    dur2 = dur - 500,
    posL = 0,
    posT = 0;

    const pos_opts = {
    top: 0,
    left: 0
    }

    const burst1 = new mojs.Burst({
    ...pos_opts,
    radius:   { 0: 70 },
    count:    12,
    children: {
    shape:      'cross',
    stroke:     { 'cyan' : 'grey' },
    strokeWidth: { 4 : 1 },
    radius:     30,
    angle:      { 360: 0 },
    duration:   dur
    }
    });

    const burst2 = new mojs.Burst({
    ...pos_opts,
    radius:   { 0: 70 },
    count:    15,
    children: {
    shape:        'zigzag',
    points:       6, 
    fill:         'none',
    stroke:       { 'crimson' : 'grey' },
    strokeWidth:  { 3 : 1 },
    radius:       30,
    angle:        { '-360' : 0 },
    duration:     dur
    }
    });

    const burst3 = new mojs.Burst({
    ...pos_opts,
    radius:   { 0: 150 },
    count:    8,
    children: {
    shape:        'rect',
    fill:         { 'yellow' : 'grey' },
    radius:       20,
    radiusY:      { 5 : 1 },
    duration:     dur
    }
    });

    const burst4 = new mojs.Burst({
    ...pos_opts,
    radius:   { 0: 50 },
    angle:    { 70 : 0 },
    children: {
    oapcity:      { 1 : 0 },
    radius:       5,
    duration:     dur2
    }
    });

    const circ_opts = {
    ...pos_opts,
    shape:    'circle',
    fill:      'none',
    stroke:    { 'yellow' : 'black' },  
    strokeWidth: { 10 : 1},
    duration:  dur2
    };

    const circ = new mojs.Shape({
    ...pos_opts,
    ...circ_opts,
    radius:   { 0: 150 },
    opacity:    { 1 : 0 }
    });

    const circ2 = new mojs.Shape({
    ...pos_opts,
    ... circ_opts,
    opacity:    { 0.5 : 0 },
    radius:     { 0: 100 },
    delay: 300
    });

    const master = new mojs.Timeline()
    .add( burst1, burst2, burst3, burst4, circ, circ2 );

    var clickHandler = ('ontouchstart' in document.documentElement ? "touchstart" : "click");

    document.addEventListener(clickHandler, function(e) {
    const coords = { x: e.pageX, y: e.pageY };

    burst1.tune(coords);
    burst2.tune(coords);
    burst3.tune(coords);
    burst4.tune(coords);
    circ.tune(coords);
    circ2.tune(coords);

    master.replay();
    }, false);



    const DURATION = 1000;

    const scalePath = mojs.easing.path('M0, 0 C0, 0 16.857142857142854, -5.248486282060085e-15 31.142857142857142, 0 C30.80272108843543, -113.14285714285715 50, -100 50, -100 C50, -100 65.31357300419697, -100.13604825191986 70, -0.2857142857142857 C84.28506645158541, -0.14966603379441404 100, 0 100, 0 ');

    const CUTSOM_PROPERTIES = {
    originY: 50,
    draw (el, props) {
        el.style.transformOrigin = `50% ${props.originY}%`;
    }
    }

    const SQUARE_OPTS = {
    customProperties: CUTSOM_PROPERTIES,
    y:  { [-200]: -200, curve: 'M0, 0 C16.815811159807826, -3.2443825883792443 27.57166399691211, 35.51058598192055 30, 100 C31.90230129013731, 99.91798544665086 67.88545167517314, 99.9146334942176 70, 100 C72.54311975339816, 46.08536650578238 87.89847455447789, 2.672954016950679 100, 0 ' },
    scaleX: { 1: 1, curve: scalePath },
    scaleY: { 1: 1, curve: function (k) {
        return 1 + (1-scalePath(k))/1.5;
        }
    },
    originY: { 100: 100, curve: 'M0, 50 C0, 50 30, 50 30, 50 C30, 50 31.559139784946236, 0 31.559139784946236, 0 C31.559139784946236, 0 55.71492892960311, -0.1355624091374383 70, 0 C74.60765171555815, 54.42127669485172 100, 50 100, 50 ' },
    duration: DURATION
    }

    const square1 = new mojs.Html({
    ...SQUARE_OPTS,
    el: '#js-el',
    angleZ: { 90: 90, curve: 'M0, 100 C0, 100 30, 0 30, 0 C30, 0 30, 100 30, 100 C30, 100 70, 100 70, 100 C70, 100 100, 0 100, 0 ' }
    });

    const square2 = new mojs.Html({
    ...SQUARE_OPTS,
    el: '#js-el-small',
    y:  { [-300]: -300, curve: 'M0, 0 C10.101525445522112, -1.5300968740935288 24.578551642263555, 1.7142857142857142 30, 87.42857142857143 C33.06687772061731, 107.14285714285714 50, 107 50, 107 C50, 107 62.917147228930936, 104.99294035155644 70, 87.14285714285714 C74.31276966857592, 6.435631077014981 90.03697870960255, 0.67295401695068 100, 0 ' },
    angleZ: { [-90]: [-90], curve: 'M0, 100 C0, 100 30, 0 30, 0 C30, 0 30, 100 30, 100 C30, 100 70, 100 70, 100 C70, 100 100, 0 100, 0 ' }
    });

    const FILLS = [ '#7b7b7b', '#6b6b6b', '#5b5b5b', '#4a4a4a' ];

    const DUST_OPTS = {
    parent: '#js-scene',
    count:  5,
    top: '100%',
    left: '15%',
    x:     { 0: 150, easing: 'cubic.in' },
    degree: 10,
    angle: { 90: 10, easing: 'cubic.inout' },
    radius: {0: 150},
    opacity: .35,
    timeline: { speed: .75 },
    children: {
        fill:   FILLS,
        radius: 'rand(12,18)',
        direction: 1,
        pathScale: 'rand(.5, .75)',
        scale: { 1: 0, easing: 'cubic.inout' },
        isSwirl: true,
        swirlSize: 'rand(10, 17)',
        swirlFrequency: 'rand(2,4)',
        duration: 'stagger(300, 35)',
        delay: 235
    }
    }

    const dust1 = new mojs.Burst({
    ...DUST_OPTS
    });

    const dust2 = new mojs.Burst({
    ...DUST_OPTS,
    left:  '70%',
    angle: { [-90]: -10, easing: 'cubic.inout' },
    x:     { 0: -150, easing: 'cubic.in' },
    children: {
        ...DUST_OPTS.children,
        direction: -1
    }
    });

    dust1.el.style.zIndex = 3;
    dust2.el.style.zIndex = 3;

    const shadow = new mojs.Html({
    el: '#js-shadow',
    opacity: { 1: 1, curve: function (k) {
        return Math.max( (scalePath(k)-1)/4, .05 );
        }
    },
    scaleX: { 1: 1, curve: function (k) {
        return 1.35*scalePath(k);
        }
    },
    duration: DURATION
    });

    const timeline = new mojs.Timeline({ speed: .63, onComplete:function() {
        timeline.replay();
    } });
    timeline.add( square1, square2, dust1, dust2, shadow );

    timeline.replay()
    
});


$(document).bind('keyup', function(e){
    if(e.which==78) {
      // "n"
        
    }
    if(e.which==83) {
      // "s"
    }
});
