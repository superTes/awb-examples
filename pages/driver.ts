import * as awb from 'awb'
import { Conf } from 'awb'

const conf: Conf = {
  withStandalone: true,
  host: 'localhost',
  port: 4444,
  desiredCapabilities: {
    browserName: 'chrome'
  }
}

const { element, elements, client } = awb(conf)

export { element, elements, client }
