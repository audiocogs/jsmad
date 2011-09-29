Mad.FileStream = function(file, callback) {
    this.state = { 'offset': 0 };
    
    var self = this, reader = new FileReader();
    
    reader.onload = function () {
      console.log("Read whole file!");
      self.state.buffer        = reader.result;
      self.state.mainView      = new Uint8Array(self.state.buffer);
      self.state.amountRead    = self.state.buffer.byteLength;
      self.state.contentLength = self.state.buffer.byteLength;
      
      self.length = self.state.amountRead;
      
      callback(self);
    }
    
    reader.onerror = function () {
        console.log("Error!");
    }
    
    reader.readAsArrayBuffer(file);
}

Mad.FileStream.prototype = new Mad.ByteStream();

Mad.FileStream.prototype.absoluteAvailable = function(n, updated) {
    return n < this.state.amountRead;
}

Mad.FileStream.prototype.getU8 = function(offset, bigEndian) {
    return this.state.mainView[offset];
}


Mad.FileStream.prototype.seek = function(n) {
    this.state.offset += n;
}

Mad.FileStream.prototype.read = function(n) {
    var result = this.peek(n);
    
    this.seek(n);
    
    return result;
}

Mad.FileStream.prototype.peek = function(n) {
    if (this.available(n)) {
        var offset = this.state.offset;
        
        var result = this.get(offset, n);
        
        return result;
    } else {
        throw 'TODO: THROW PEEK ERROR!';
    }
}

Mad.FileStream.prototype.get = function(offset, length) {
    if (offset + length < this.state.contentLength) {
        return new Uint8Array(this.state.buffer, offset, length);
    } else {
        throw 'TODO: THROW GET ERROR!';
    }
}
