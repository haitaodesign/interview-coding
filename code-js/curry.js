const add = (fn, ...args) => {
    if (args.length >= fn.length) {
        return fn(...args)
    } else {
        return (..._args) => add(fn, ...args, ..._args)
    }
}

export const curry3 = add(function(x, y, z){
    return x + y + z
})
