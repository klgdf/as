export const server = (done) => {
  app.plugins.browsersync.init({
    open: "external",
    // host: "wp4.local",
    // proxy: "wp4.local",
    server: {
     baseDir: `${app.path.build.html}`,
    },
    notify: false,
    port: 3000,
  });
};
