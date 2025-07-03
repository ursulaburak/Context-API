export function findItemById(items, id) {

    let foundItem = items.find((item) => item.id === id);

    if (!foundItem) {
        items.some((item) => {
            if (item.subitems?.length > 0) {
                foundItem = findItemById(item.subitems, id);
                return foundItem != null;
            }
            return false;
        });
    }

    return foundItem;
}