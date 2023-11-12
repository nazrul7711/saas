let EventEmitter = require("events").EventEmitter;
let fs = require("fs").promises;
let eInstance = new EventEmitter();

class CustomEmitter extends EventEmitter {
  constructor(regex) {
    super();
    this.regex = regex;
    this.files = [];
  }
}
let custom = new CustomEmitter(/hello/g);
let khamma = new EventEmitter();
khamma.on("hello", () => {
  console.log("selsello");
});
khamma.emit("hello");
console.log(process.argv[2])

/*
what is option to blocking i/o operation , starting a new thread ?explain its cons?

what is the second option where we dont have multiple thread but continuous loop over the sources?

what process.nexTick(callback does),setImmediate?

difference between buffer and stream?






*/
