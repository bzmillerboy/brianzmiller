module.exports = {
    files: "_site/stylesheets/*.css",
    ghostMode: {
        links: true,
        forms: true,
        scroll: true
    },
    proxy: {
        host: "http://10.0.1.6:4000/" // your existing vhost
    }
};