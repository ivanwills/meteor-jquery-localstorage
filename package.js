Package.describe({
    summary: "JQuery localStorage plugin"
});

Package.on_use(function(api) {
    api.use('jquery', ['client']);
    api.use('jquery-cookie', ['client']);

    api.add_files('jquery.storage.js/jquery.storage.js', ['client']);
});

