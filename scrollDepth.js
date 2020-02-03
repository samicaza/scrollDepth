/*
 * Usage
 *    This function fires custom events at different scroll depth milestones.
 */

  // Variables to prevent continuous firing of custom events

  var scrollTwentyFive = true;
  var scrollFifty = true;
  var scrollSeventyFive = true;
  var scrollOneHundred = true;

  // Create the scrollPercentage

window.onscroll = function(){

      window.scrollPercent = window.scrollY / document.body.scrollHeight *100

      // Conditional code we'll use to fire events based on scrollPercentage.

      if (window.scrollPercent >= 25 && scrollTwentyFive) {
          window['optimizely'] = window['optimizely'] || [];
          window['optimizely'].push({type: "event", eventName: "scroll25"});
          scrollTwentyFive = false;
      }

      if (window.scrollPercent >= 50 && scrollFifty) {
          window['optimizely'] = window['optimizely'] || [];
          window['optimizely'].push({type: "event", eventName: "scroll50"});
          scrollFifty = false;
      }

      if (window.scrollPercent >= 75 && scrollSeventyFive) {
          window['optimizely'] = window['optimizely'] || [];
          window['optimizely'].push({type: "event", eventName: "scroll75"});
          scrollSeventyFive = false;
      }

      if (window.scrollPercent >= 100 && scrollOneHundred) {
          window['optimizely'] = window['optimizely'] || [];
          window['optimizely'].push({type: "event", eventName: "scroll100"});
          scrollOneHundred = false;
      }

}
