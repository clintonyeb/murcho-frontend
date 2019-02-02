module.exports = {
  pluginOptions: {
    s3Deploy: {
      awsProfile: 'default',
      region: 'us-east-2',
      bucket: 'murcho.com',
      createBucket: true,
      staticHosting: true,
      staticIndexPage: 'index.html',
      staticErrorPage: 'index.html',
      assetPath: 'dist',
      assetMatch: '**',
      deployPath: '/',
      acl: 'public-read',
      pwa: true,
      pwaFiles: 'service-worker.js',
      enableCloudfront: false,
      uploadConcurrency: 5,
      pluginVersion: '3.0.0'
    }
  },
  devServer: {
    https: true
  }
}
