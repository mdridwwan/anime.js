anime({

    targets: 'div.box.red',
    translateX: 50,
    rotate: '4turn',
    backgroundColor: 'green',
    duration: 90000,
});
anime({
    targets: 'div.box.yellow',
    left: '240px',
    backgroundColor: 'red',
    borderRadius: ['0%', '50%'],
    easing: 'easeInOutQuad'
});
anime({

    targets: 'div.box.pink',
    borderRadius: ['0', '50%'],
    rotate: '1turn',
    delay: 2000,
    loop: true,

});
anime({
    targets: 'div.box.green,.orange',
    translateX: [-0, 465], // from 100 to 250
    rotate: '1turn',
    delay: 1000,
    direction: 'alternate',
    loop: true
});
anime({

    targets: 'div.box.blue',
    translateX: [-70, 465],
    delay: 500,
    direction: 'alternate',
    loop: true,

});
anime({

    targets: 'div.box.pink4,.red1,.blue2,.orang3,.green5,.yellow6',
    borderRadius: ['0', '50%'],
    rotate: '1turn',
    delay: 2000,
    loop: true,

});
anime({
    targets: 'div.boxA.box-6',
    translateX: 270,
    loop: 3,
    easing: 'easeInOutSine'
});

anime({
    targets: 'div.boxA.box-5',
    translateX: 270,
    loop: true,
    easing: 'easeInOutSine'
});

anime({
    targets: 'div.boxA.box-4',
    translateX: 270,
    loop: 3,
    direction: 'reverse',
    easing: 'easeInOutSine'
});

anime({
    targets: 'div.boxA.box-1',
    translateX: 270,
    direction: 'reverse',
    loop: true,
    easing: 'easeInOutSine'
});

anime({
    targets: 'div.boxA.box-2',
    translateX: 270,
    loop: 3,
    direction: 'alternate',
    easing: 'easeInOutSine'
});

anime({
    targets: 'div.boxA.box-3',
    translateX: 270,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
});