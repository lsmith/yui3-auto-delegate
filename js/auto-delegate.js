YUI.add('auto-delegate', function (Y) {

var ET_ON = Y.EventTarget.prototype.on;

Y.Node.prototype.on = function (type) {
    var args = Y.Array(arguments,0,true),
        m    = type.match(/(.+?\|)?(.+)?\s*:\s*([^:]+)$/),
        meth = ET_ON;

    if (m) {
        meth    = this.delegate;
        args[0] = (m[1] || '') + m[3];
        args.splice(2,0,m[2]);
    }

    return meth.apply(this, args);

};

},'0.0.1',{requires:['node']});
