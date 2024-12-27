const { Readable, Writable, Duplex, Transform } = require('stream');

// 1. Readable Stream
const readableStream = new Readable({
  read() {
    this.push('Node.js ');
    this.push('Streams ');
    this.push('are powerful!');
    this.push(null); // Signals the end of the stream
  }
});

// 2. Writable Stream
const writableStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(`Writing: ${chunk.toString()}`);
    callback(); // Indicate that the writing is complete
  }
});

// 3. Duplex Stream
const duplexStream = new Duplex({
  write(chunk, encoding, callback) {
    console.log(`Duplex Writing: ${chunk.toString()}`);
    callback();
  },
  read() {
    this.push('Duplex Reading!');
    this.push(null);
  }
});

// 4. Transform Stream
const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback(); // Indicate the transformation is complete
  }
});

// Usage
console.log('Readable to Writable:');
readableStream.pipe(writableStream);

console.log('\nDuplex Stream:');
duplexStream.write('Hello Duplex!');
duplexStream.on('data', (chunk) => {
  console.log(`Duplex Reading: ${chunk.toString()}`);
});

console.log('\nReadable to Transform to Writable:');
readableStream.pipe(transformStream).pipe(writableStream);
