
Mad.ArrayBuffers.FileStream = Mad.ArrayBuffers.ByteStream.extend({
    init: function (file, callback) {
        this.state = { offset: 0 };

        // Check for the various File API support.
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            // Great success! All the File APIs are supported.
        } else {
            alert('The File APIs are not fully supported in this browser.');
            return null;
        } 
        
        var self = this;
        var reader = new FileReader();
        reader.onload = function () {
          console.log("Just read whole file!");
          self.state.buffer        = reader.result;
          self.state.mainView      = new Uint8Array(self.state.buffer);
          self.state.amountRead    = self.state.buffer.byteLength;
          self.state.contentLength = self.state.buffer.byteLength;
          
          self.length = self.state.amountRead;
          
          callback(self);
        }
        
        reader.onerror = function () {
            console.log("Error loading file " + file);
        }


        // Only supported from Firefox 7 and Chrome 'Something'
        reader.readAsArrayBuffer(file);
    },

    substream: function (offset, length) {
        return new Mad.SubStream(this, offset, length);
    },

    absoluteAvailable: function(n, updated) {
        return n < this.state.amountRead;
    },

    getU8: function(offset, bigEndian) {
        return this.state.mainView[offset];
    },

    seek: function(n) {
        this.state.offset += n;
    },

    read: function(n) {
        var result = this.peek(n);
        
        this.seek(n);
        
        return result;
    },

    peek: function(n) {
        if (this.available(n)) {
            var offset = this.state.offset;
            
            var result = this.get(offset, n);
            
            return result;
        } else {
            throw 'TODO: THROW PEEK ERROR!';
        }
    },

    get: function(offset, length) {
        if (offset + length < this.state.contentLength) {
            return new Uint8Array(this.state.buffer, offset, length);
        } else {
            throw 'TODO: THROW GET ERROR!';
        }
    }
});
