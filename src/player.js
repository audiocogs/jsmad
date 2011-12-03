
Mad.Player = function (stream) {
    this.stream = stream;
    this.mp3 = new Mad.MP3File(stream);
    this.id3  = this.mp3.getID3v2Stream();
    this.mpeg = this.mp3.getMpegStream();

    this.totalLength = ~~this.id3.toHash()['Length'];

    // default onProgress handler
    this.onProgress = function (playtime, total, preloaded) {
        console.log("playtime = " + playtime + " / " + total + ", preloaded = " + preloaded);
    }
};

// Create a device.
Mad.Player.prototype.createDevice = function() {
    var synth = new Mad.Synth();
    this.frame = new Mad.Frame();
    this.frame = Mad.Frame.decode(this.frame, this.mpeg);
    if (this.frame === null) {
        if (this.mpeg.error === Mad.Error.BUFLEN) {
            console.log("End of file!");
        }

        console.log("First error! code = " + this.mpeg.error + ", recoverable ? = " + Mad.recoverable(this.mpeg.error));
        return;
    }

    this.channelCount = this.frame.header.nchannels();
    this.sampleRate = this.frame.header.samplerate;

    console.log("this.playing " + this.channelCount + " channels, samplerate = " + this.sampleRate + " audio, mode " + this.frame.header.mode);

    this.offset = 0;
    this.absoluteFrameIndex = 0;
    synth.frame(this.frame);

    this.lastRebuffer = Date.now();
    this.playing = false;
    this.progress();

    var self = this;	
    var MAX_FRAMES_IN_BUFFER = 40;

    this.refill = function (sampleBuffer) {
        //console.log("delta = " + (Date.now() - self.lastRebuffer) + ", asked for " + sampleBuffer.length);
        self.lastRebuffer = Date.now();

        if(!self.playing) return; // empty sampleBuffer, no prob

        var index = 0;

        while (index < sampleBuffer.length) {
            for (var i = 0; i < self.channelCount; ++i) {
                sampleBuffer[index++] = synth.pcm.samples[i][self.offset];
            }

            self.offset++;

            if (self.offset >= synth.pcm.samples[0].length) {
                self.offset = 0;

                self.frame = Mad.Frame.decode(self.frame, self.mpeg);
                if (self.frame === null) {
                    if (self.stream.error === Mad.Error.BUFLEN) {
                        console.log("End of file!");
                    }
                    console.log("Error! code = " + self.mpeg.error);
                    self.playing = false;
                    self.onProgress(1.0, 1.0, 1.0);
                    self.dev.kill();
                } else {
                    synth.frame(self.frame);
                    self.absoluteFrameIndex++;
                }
            }
        }

        if (self.onPostProcessing) {
            self.onPostProcessing.apply(this, arguments);
        }

    };

    this.reinitDevice();
};

Mad.Player.prototype.reinitDevice = function() {
    if(this.dev) this.dev.kill();
    var preBufferSize = 65536 * 4096;
    var self = this;
    this.dev = Sink(function(){
            return self.refill.apply(this, arguments);
            }, this.channelCount, preBufferSize, this.sampleRate);

    this.dev.on && this.dev.on('error', function (e) {
        console.log(e);
    });
}

Mad.Player.prototype.setPlaying = function(playing) {
    this.playing = playing;
    if(playing) {
        this.onPlay();
    } else {
        this.onPause();
    }
}

Mad.Player.prototype.destroy = function() {
    clearTimeout(this.progressTimeout);
    if(this.dev) {
        this.dev.kill();
    }
}

Mad.Player.prototype.progress = function () {
    var delta = Date.now() - this.lastRebuffer;

    var playtime = ((this.absoluteFrameIndex * 1152 + this.offset) / this.sampleRate) + delta / 1000.0;
    //console.log("delta = " + delta + ", contentLength = " + this.stream.contentLength + ", this.offset = " + this.mpeg.this_frame);
    var total = this.totalLength ? this.totalLength : playtime * this.stream.contentLength / this.mpeg.this_frame;
    var preloaded = this.stream.amountRead / this.stream.contentLength;
    //console.log("amountRead = " + this.stream.amountRead + ", preloaded = " + preloaded);
    this.onProgress(playtime, total, preloaded);

    var that = this;
    var nextCall = function() { that.progress(); };
    this.progressTimeout = setTimeout(nextCall, 250);
}

Mad.Player.fromFile = function (file, callback) {
    new Mad.FileStream(file, function (stream) {
            callback(new Mad.Player(stream));
            });
};

Mad.Player.fromURL = function (url, callback) {
    var stream = new Mad.AjaxStream(url);
    stream.requestAbsolute(1 * 1024, function () {
            callback(new Mad.Player(stream));
            });
};
