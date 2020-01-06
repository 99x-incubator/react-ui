export function validateProps(componentProps, combinedAttributes) {
    var props = { ...componentProps };
    
    Object.keys(props).forEach((key)=> {
        if (!combinedAttributes.includes(key)) {
            delete props[key]
        }
    });

    return props;
}