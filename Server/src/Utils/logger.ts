import dayjs from "dayjs";
import logger from "pino";

export default logger({
  transport: {
    target: "pino-pretty",
    options: { colorize: true },
  },
  base: { pid: false },
  timestamp: () => `,"time":"${dayjs().format()}"`,
});