Explanation
Readable Stream:
Generates data chunks (Node.js Streams are powerful!).
Ends the stream with null.

Writable Stream:
Accepts data and writes it somewhere (logs it to the console in this case).

Duplex Stream:
Combines Readable and Writable capabilities.
Writes data (Duplex Writing: ...) and also reads (Duplex Reading!).

Transform Stream:
Transforms data (converts it to uppercase) while passing it between streams.