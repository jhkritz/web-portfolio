const withTM = require("next-transpile-modules")(["gsap"]);
module.exports = withTM();

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
  },
};
