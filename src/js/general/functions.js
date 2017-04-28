
export function _getParents (el, parentClass) {
    let parent = el.parentNode;
    while (parent !== document.body) {
        if (parent && (parent.classList.contains(parentClass))) {
            return parent;
        } else {
            parent = parent.parentNode;
        }
    }
    return null;
}

export function _findChidren (el, childClass) {
    let children = el.children;
    for (let i = 0; i < children.length; i++) {
        if (children[i] && children[i].classList.contains(childClass)) {
            return children[i];
        }
    }
    return null;
}
