
Mad.BinaryStrings.SubStream = function(stream, offset, length) {
    this.state = { 'offset': 0 };
    
    this.state['start'] = offset;
    
    this.parentStream = stream;
    
    this.length = length;
}

Mad.BinaryStrings.SubStream.prototype = new Mad.BinaryStrings.ByteStream;

Mad.BinaryStrings.SubStream.prototype.substream = function (offset, length) {
    return new Mad.BinaryStrings.SubStream(this.parentStream, this.state.start + offset, length);
}


Mad.BinaryStrings.SubStream.prototype.absoluteAvailable = function(n) {
    return this.parentStream.absoluteAvailable(this.state['start'] + n);
}

Mad.BinaryStrings.SubStream.prototype.seek = function(n) {
    this.state['offset'] += n;
}

Mad.BinaryStrings.SubStream.prototype.read = function(n) {
    var result = this.peek(n);
    
    this.seek(n);
    
    return result;
}

Mad.BinaryStrings.SubStream.prototype.peek = function(n) {
    return this.get(this.state['offset'], n);
}

Mad.BinaryStrings.SubStream.prototype.get = function(offset, length) {
    return this.parentStream.get(this.state['start'] + offset, length);
}

Mad.BinaryStrings.SubStream.prototype.slice = function(start, end) {
    return this.parentStream.get(this.state['start'] + start, end - start);
}

Mad.BinaryStrings.SubStream.prototype.requestAbsolute = function(n, callback) {
    this.parentStream.requestAbsolute(this.state['start'] + n)
}

Mad.BinaryStrings.SubStream.prototype.request = function(n, callback) {
    this.parentStream.requestAbsolute(this.state['start'] + this.state['offset'] + n)
}
