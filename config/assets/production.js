'use strict';

module.exports = {
  client: {
    lib: {
      css: [
        // bower:css
        'public/lib/bootstrap/dist/css/bootstrap.min.css',
        'public/lib/bootstrap/dist/css/bootstrap-theme.min.css'
        // endbower
      ],
      js: [
        // bower:js
        'public/lib/angular/angular.min.js',
        'public/lib/angular-resource/angular-resource.min.js',
        'public/lib/angular-cookies/angular-cookies.min.js', 
        'public/lib/angular-animate/angular-animate.min.js',
        'public/lib/angular-touch/angular-touch.min.js', 
        'public/lib/angular-sanitize/angular-sanitize.min.js', 
        'public/lib/angular-messages/angular-messages.min.js',
        'public/lib/angular-ui-router/release/angular-ui-router.min.js',
        'public/lib/angular-ui-utils/ui-utils.min.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
        'public/lib/angular-file-upload/dist/angular-file-upload.min.js',
        'public/lib/d3/d3.min.js',
        'public/lib/nvd3/nv.d3.min.js',
        'public/lib/angularjs-nvd3-directives/dist/angularjs-nvd3-directives.min.js',
        'public/lib/owasp-password-strength-test/owasp-password-strength-test.js'
        // endbower
      ]
    },
    css: 'public/dist/application.min.css',
    js: 'public/dist/application.min.js'
  }
};
