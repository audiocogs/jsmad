Mad.BinaryStrings.StringStream = function(string) {
    this.state = { offset: 0, buffer: string, amountRead: string.length, length: string.length };
}

Mad.BinaryStrings.StringStream.prototype = new Mad.BinaryStrings.ByteStream();

Mad.BinaryStrings.StringStream.prototype.absoluteAvailable = function(n, updated) {
    return n < this.state['amountRead'];
}

Mad.BinaryStrings.StringStream.prototype.seek = function(n) {
    this.state['offset'] += n;
}

Mad.BinaryStrings.StringStream.prototype.read = function(n) {
    var result = this.peek(n);
    
    this.seek(n);
    
    return result;
}

Mad.BinaryStrings.StringStream.prototype.peek = function(n) {
    if (this.available(n)) {
        var offset = this.state['offset'];
        
        var result = this.get(offset, n);
        
        return result;
    } else {
        throw 'TODO: THROW PEEK ERROR!';
    }
}

Mad.BinaryStrings.StringStream.prototype.get = function(offset, length) {
    if (this.absoluteAvailable(offset + length)) {
        return this.state['buffer'].slice(offset, offset + length);
    } else {
        throw 'TODO: THROW GET ERROR!';
    }
}
