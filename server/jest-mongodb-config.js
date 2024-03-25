module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      port: 27018, // Utilisez un port différent du port par défaut
    },
    binary: {
      version: "4.0.3", // Utilisez la version de MongoDB que vous préférez
      skipMD5: true,
    },
    autoStart: false,
  },
};
