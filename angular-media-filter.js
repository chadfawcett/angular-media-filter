angular.module('cfMediaFilter', [])
  .value('cfMediaFilterRules', {
    'palm'      : 'screen and (max-width: 44.9375em)',
    'lap'       : 'screen and (min-width: 45em) and (max-width: 63.9375em)',
    'lap-and-up': 'screen and (min-width: 45em)',
    'portable'  : 'screen and (max-width: 63.9375em)',
    'desk'      : 'screen and (min-width: 64em)',
    'retina'    : '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)'
  })
  .filter('media', function($window, cfMediaFilterRules) {
    return function(originalValue, rule, newValue) {
      var mediaQueryString = cfMediaFilterRules[rule]

      if ($window.matchMedia(mediaQueryString).matches) {
          return newValue
      } else {
          return originalValue
      }
    }
  })
