import morgan, { StreamOptions } from "morgan";
import config from 'config';
import Logger from '../../config/logger';

const stream: StreamOptions = {
    write: (message) => Logger.http(message),
};

const skip = () => {
    const env = config.get<string>("env") || "development";
    return !(env !== "developemt"); //acoxambra pois não funciona conforme código do Matheus.
};

const morganMiddleware = morgan(
    ":method :url :status :res[content-length] - :response-time ms",
    { stream, skip }
);

export default morganMiddleware;