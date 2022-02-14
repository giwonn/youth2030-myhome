/// <reference types="vite/client" />

interface userOptsType {
  /** if you are using mock, specify a mockPath, default value is '/dev-mock',  */
  mockPath?: string;

  /** proxyTable can be a proxyTable.js path string or proxyTable object  */
  proxyTable: proxyTableType;

  /** public host config (if you have a host name for your develop environment,such as "xxx-dev.xxx.com", you can set it here, which will be much easier for your to click the link and open the page on browser)  */
  publicHost?: string;
}
