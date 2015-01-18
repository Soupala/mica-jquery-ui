Package.describe({
  name: "mica:jquery-ui",
  summary: "Simple lightweight pull-in for jQuery UI in Meteor, adapted from mizzao:juery-ui",
  version: "0.0.0",
  git: "https://github.com/mizzao/meteor-jqueryui.git"
});

Package.onUse(function (api) {
  api.versionsFrom("1.0");

  api.use('jquery', 'client');

  api.use("mizzao:build-fetcher@0.2.0", 'client');

  api.add_files('jqueryui.fetch.json', 'client');
});
