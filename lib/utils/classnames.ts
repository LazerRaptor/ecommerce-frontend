/** object of type classname: boolean -> string */
const classnames = (obj) => {
    let list = Object.keys(obj).filter(key => obj[key])
    return list.join(' ')
}


export {
    classnames
}