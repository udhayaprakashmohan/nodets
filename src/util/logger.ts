import { createLogger, format, transports } from 'winston';


export const logger = createLogger({

    format: format.combine(
        format.json(),
        format.timestamp(),
        format.printf(info => `${info.timestamp}  ${info.level}: ${info.message}`),
        format.printf(error => `${error.timestamp}  ${error.level}: ${error.message}`)
    ),
    transports: [
        new transports.File({
            maxsize: 5120000,
            maxFiles: 5,
            filename: `logs/log-api.log`
        }),

    ]
});
