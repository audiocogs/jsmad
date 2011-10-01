
Mad.SubStream = Mad.ByteStream.extend({
    init: function(stream, offset, length) {
        this.state = { 'offset': 0 };
        
        this.state.start = offset;
        
        this.parentStream = stream;
        
        this.length = length;
    },

    substream: function (offset, length) {
        return new Mad.SubStream(this.parentStream, this.state.start + offset, length);
    },

    getU8: function(offset, bigEndian) {
        return this.parentStream.getU8(this.state.start + offset, bigEndian);
    },

    getU16: function(offset, bigEndian) {
        return this.parentStream.getU16(this.state.start + offset, bigEndian);
    },

    getU32: function(offset, bigEndian) {
        return this.parentStream.getU32(this.state.start + offset, bigEndian);
    },

    absoluteAvailable: function(n) {
        return this.parentStream.absoluteAvailable(this.state.start + n);
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
        return this.get(this.state.offset, n);
    },

    get: function(offset, length) {
        return this.parentStream.get(this.state.start + offset, length);
    },

    slice: function(start, end) {
        return this.parentStream.get(this.state.start + start, end - start);
    },

    requestAbsolute: function(n, callback) {
        this.parentStream.requestAbsolute(this.state.start + n)
    },

    request: function(n, callback) {
        this.parentStream.requestAbsolute(this.state.start + this.state.offset + n)
    }
});
