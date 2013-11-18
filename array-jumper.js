module.exports = function jumper(array, currentItem, jumpArg) {
    // fill in any missing
    if (arguments.length === 1) {
        currentItem = array[0];
        jump = 0;
    } else if (arguments.length === 2) {
        jump = 1;
    } else {
        jump = typeof jumpArg !== 'undefined' ? jumpArg : 1;
    }
    var len = array.length;
    var index = array.indexOf(currentItem);
    var newIndex;

    // handle case where not found
    if (index === -1) {
        if (jump === 1) {
            newIndex = 0;
        } else {
            newIndex = jump - 1;
        }
    } else {
        newIndex = index + jump;
    }

    // we jumped too far
    if (newIndex > (len - 1)) {
        newIndex = newIndex % len;
    }

    // we're negative
    if (newIndex < 0) {
        newIndex = len + (newIndex % len);
        if (newIndex === len) {
            newIndex = 0;
        }
    }

    // return our new item
    return array[newIndex];
};
