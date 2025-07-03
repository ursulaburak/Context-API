import React from 'react';
import { findItemById } from "../../helpers/utilis";
import Item from "../item/Item";
import Preview from "../preview/Preview";

const Viewer = ({ selectedId, select, backFolderId, activeFolderId, list, changeFolder }) => {
    const data = findItemById([list], activeFolderId);
    const handleBack = () => {
        changeFolder(backFolderId);
    };
    return (
     <>
        {backFolderId && <button onClick={handleBack}>Back</button>}
        <div className="container">
        <div className="viewer">
            {data?.subitems?.map((item) => {
            return (
            <item
                onClick={() => select(item.id)}
                isSelected={item.id === selectedId}
                key={item.id}
                id={item.id}
                changeFolder={changeFolder}
                title={item.title}
                type={item.type}
                image={item.image}
                />
            );
          })}
        </div>
        <div className="preview-host">
            <Preview id={selectedId} select={select} list={list}/>
        </div>
        </div>
        </>
    );
};

export default Viewer;