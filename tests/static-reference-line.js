// It requires "Detailed Mortality by Cause" application (see staging)

const TIMEOUT = 10000
const ELEMENTS = {
  staticReferenceLabel: '.chart:nth-child(1) .c3-ygrid-line:nth-child(1) text',
}

module.exports = {
  afterEach: (client, done) => client.globals.report(client, done),

  '[default] Static reference line':
    (client) => {
      client
        .url(`${client.launch_url}/querytool/public/detailed-mortality-by-cause`)
        .waitForElementVisible(ELEMENTS.staticReferenceLabel, TIMEOUT)
        .assert.containsText(ELEMENTS.staticReferenceLabel, 'Static Reference')
        .end();
    },

};
