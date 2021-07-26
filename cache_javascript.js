var localCache = {
    data: localStorage.getItem("search_data") ? JSON.parse(localStorage.getItem("search_data")) : {},
    remove: function(e) {
        delete localCache.data[e]
    },
    exist: function(e) {
        return localCache.data.hasOwnProperty(e) && null !== localCache.data[e]
    },
    get: function(e) {
        return localCache.data[e]
    },
    set: function(e, t, a) {
        localCache.remove(e),
        localCache.data[e] = t,
        $.isFunction(a) && a(t)
    }
};
function sethtmlsearch(e) {
    localStorage.setItem("search_data", JSON.stringify(localCache.data))
}