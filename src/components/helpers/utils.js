export function findItemById(items, id) {

    let function = items.find((item) => item)

    if (!foundItem) {
        items.some((item) => {
            if (item.subitems && item.subitems.)
                foundItem = findItemById(item.sub)
            return foundItem != null;
            }
            return false;
        });
    }

    return foundItem;
}