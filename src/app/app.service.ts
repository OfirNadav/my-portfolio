import { Injectable } from '@angular/core';
import * as scrollReveal from 'src/lib/scrollReveal.min.js';

declare const $: any;
declare global {
  interface Window {
    sr: any;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() {
  }

  hideBackTop() {
    $('#back-top').hide();
  }

  fadeInBackTop() {
    const windowEl = $(window);
    windowEl.scroll(() => {
      if (windowEl.scrollTop() > 400) {
        $('#back-top').fadeIn();
      } else {
        $('#back-top').fadeOut();
      }
    });
  }

 // scroll body to 0px on click
  scrollToTop() {
    $('html, body').animate({scrollTop: 0}, 1000);
  }

  typed() {
    const elm = $('.element');
    if (elm.length > 0) {
      elm.typed({
        strings: ['Full-Stack Developer'],
        typeSpeed: 70,
        showCursor: false
      });
    }
  }

  slippry() {
    const sliderEl = $('#slider');
    if (sliderEl.length > 0) {
      sliderEl.slippry({
        transition: 'kenburns',
        useCSS: true,
        speed: 5000,
        pause: 9000,
        auto: true,
        controls: false,
        preload: 'visible',
        autoHover: false
      });
    }
  }

  scrollReveal() {
    window.sr = window.sr || null;
    window.sr = new scrollReveal({
      reset: false,
      move: '50px',
      mobile: false
    });
  }
}
