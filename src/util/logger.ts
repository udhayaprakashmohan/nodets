import { createLogger, format, transports } from 'winston';


export const logger = createLogger({
    format: format.combine(
        format.json(),
        format.timestamp(),
        format.printf(info => `${info.timestamp}  ${info.level} ${info.message}`)
    ),
    transports: [
        new transports.File({
            maxsize: 5120000,
            maxFiles: 5,
            filename: `&{_dirname}/../logs/log-api.log`
        }),

    ]
});
