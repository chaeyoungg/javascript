/* global gsap */


export const shake = gsap.to('#nameField', {
    duration: 0.1,
    x: -10,
    repeat: 5,
    yoyo: true,
    clearProps: 'x',
    paused: true //애니메이션 불러오자마자 실행하는 것을 막기 위해 일시정지
}) 