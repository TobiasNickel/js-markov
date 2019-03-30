// Copyright (c) 2019 Edwin Pratt
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

var output = document.getElementById('output');
var generateButton = document.getElementById('generate');
var numStates = document.getElementById('number-of-states');

// eslint-disable-next-line no-undef
var markov = new Markov();

window.onload = function() {
  generateButton.style.visibility = 'hidden';

  markov.addState([
    'backbone-devtools',
    'ui-progress-bar',
    'bootstrap-xtra',
    'thingler',
    'water',
    'rye',
    'jhere',
    'ember-json-api',
    'cartodb',
    'esperanto',
    'psy',
    'backbone-support',
    'Object.observe',
    'jqtpl',
    'grunt-taceur',
    'angular-placeholders',
    'hn-reader',
    'polypage',
    'animatic',
    'RiftSketch',
    'bitcoin-trading-dca',
    'TuxedoJS',
    'reactuate',
    'WebIntents',
    'lmd',
    'quick',
    'angular-semantic-ui',
    'meteor-router',
    'node-drawille-canvas',
    'knockout-postbox',
    'tttfi',
    'ui-progress-bar',
    'framer-modules',
    'gmailr',
    'testling',
    'kwicks',
    'node-xml',
    'music.js',
    'graphitus',
    'ng-classify',
    'nodrr',
    'express',
    'evee.js',
    'rawkets',
    'titanium-jasmine',
    'speaking-jpg',
    'grunt-closure-compiler',
    'hivermind',
    'FiltrES.js',
    'validator.js',
    'grunt-express-server',
    'jquery.stacky',
    'electrode-explorer',
    'Markup.js',
    'isomorphic-webpack',
    'forever-webui',
    'expounder',
    'relevancy.js',
    'ground-control',
    'status-page',
    'ploy',
    'tests',
    'ember-rest',
    'AppScroll.js',
    'edison.js',
    'triggerTracker',
    'hackynote',
    'nested-view',
    'neo4js',
    'joint',
    'xkcd-pixels',
    'Bootstrap-Scroll-Modal',
    'meteor-tupperware',
    'match',
    'message',
    'tether',
    'Reactive.js',
    'echowaves',
    'node-steam-trade',
    'picnic',
    'scrobMaster',
    'jq-tiles',
    'grunt-markdown',
    'kenburns',
    'co-monk',
    'grasshopper',
    'photoshopr',
    'node-osx-notifier',
    'typist-jquery',
    'grunt-env',
    'fixto',
    'core',
    'Slicer',
    'meteor-template-extension',
    'steamgraph.js',
    'MarkdownPresenter',
    'node-cloudfiles',
    'isomorphic-hot-loader',
    'hog-descriptor',
    'haz',
    'generator-firefox-os',
    'queuer.js',
    'react-flexbox',
    'tx-content-assist',
    'awesomes',
    'frodo',
    'ember-skeleton',
    'wpilot',
    'jquery-carousel-lite',
    'ember-touch',
    'tempalias',
    'node-hashish',
    'd3-react-squared',
    'hotdot',
    'ISIS.js',
    'sapling',
    'esbox',
    'FilteredPaste.js',
    'wrapjs',
    'sky-edit',
    'loader-js',
    'grunt-contrib-jst',
    'craft',
    'kwargsjs',
    'propagit',
    'async-task',
    'backbone-pouch',
    'embedjs',
    'squishy',
    'jr-crop',
    'hyperglue',
    'webspecter',
    'steam-transcoder.js',
    'dragon',
    'better.js',
    'redux-tiny-router',
    'meteorhunt',
    'smokescreen',
    'node-sqlite',
    'react-metaform',
    'glossary',
    'google-fastbutton',
    'spazcore',
    'tasklets',
    'ecology',
    'jungle',
    'angular-lazyload',
    'ember-material-design',
    'ember-resource',
    'trendicity',
    'kiwi',
    'datacouch',
    'angular-retina',
    'angular',
    'react',
    'vue',
    'babel',
    'webpack',
    'js-markov',
    'asteroid',
    'hovermenu',
    'hyperspace',
    'pigeon',
    'Bookmarker',
    'grunt-css',
    'responsivepx',
    'soulmate.js',
    'minitrello',
    't1-runtime',
    'json-git',
    'backbone.basicauth',
    'quay',
    'launch',
    'ss-angular',
    'menubar-docker',
    'tile5',
    'tinyoacle',
    'toast',
    'postgres-js',
    'sproutcore-ui',
    'grunt-hashres',
    'spinal',
    'zoom-image',
    'kill-switch',
    'cropzoom',
    'heroku-sails',
    'moment-datepicker',
    'Freebase.js',
    'ajour',
    'categorizr.js',
    'djsreader',
    'mustekala',
    'neptunejs',
    'challenger',
    'thaumaturgy',
    'patcher.js',
    'timePicker',
    'reapp-ui',
    'hydra',
    'tailbone',
    'shapado',
    'webpack-require',
    'sink.js',
    'typescript-tools',
    'oddworks',
    'typescript',
    'Kizzy',
    'particle-dev',
    'vagueTime.js',
    'node-twilio',
    'systemjs-seed',
    'swipeshow',
    'metaframe',
    'rubyception',
    'memdiff',
    'Humane-Dates',
    'pulley',
    'connect-mongodb',
    'peeler.js',
    'history.js',
    'rip_mobello',
    'titanium',
    'Absolution',
    'postmark.js',
    'webspecter',
    'ragadjust',
    'pintura',
    'Notifier.js',
    'sculejs',
    'css-razor',
    'realm',
    'octobox',
    'slush-angular',
    'pebbles',
    'react-backbone',
    'tiler',
    'finalengine',
    'transformer',
    'bower-webpack-plugin',
    'cloudsave',
    'ng-rest-api',
    'stackvm',
    'ladda-angular',
    'jack',
    'jslitmus',
    'atmosphere',
    'marilyn',
    'bugger',
    'postcss-media-minmax',
    'node-worker',
    'node-router',
    'node-cloudservers',
    'photoshop-web',
    'inputex',
    'gillie',
    'riot-bootstrap',
    'kitchensink',
    'roo',
    'html-now'
  ]);

  markov.train();

  numStates.textContent = markov.getStates().length;

  generateButton.style.visibility = 'visible';
};

generateButton.addEventListener('click', function() {
  output.textContent = markov.generate();
});
