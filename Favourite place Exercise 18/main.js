// Visit worlds favourite places, Think of atleast five places,
// make a list array(not in alphabetical order)
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Dubai", "Islamabad", "Kashmir", "capetown", "Switzerland"];
console.log("original :" + places);
// print array in alphabetical order without modifying the actual list.
console.log('copy' + __spreadArray([], places, true).sort());
