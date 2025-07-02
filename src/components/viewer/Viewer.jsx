

import Item from "../item/Item";

const Viewer = ({ activeFolderId, list, changeFolder }) => {
    const data = findItemById([list], activeFolderId);
    const handleBack = () => {
    changeFolder(backFolderId);
};
return (
    <>
    {backFolderId && <button onClick={handleBack}>Back</button>}
    <div className="viewer">
        {data?.subitems?.map((item) => {})}
            return (
              <item
                key={item.id}
                id={item.id}
                changeFolder={changeFolder}
                title={item.title}
                type={item.type}
                image={item.image}
    </div>
    );
};

export default Item;