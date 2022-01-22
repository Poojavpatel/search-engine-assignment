import { devConfig } from './dev';

let config = {};
switch (process.env.APP_ENV) {
  case "dev":
    config = devConfig;
    break;
  default:
    config = devConfig;
    break;
}

export {config}