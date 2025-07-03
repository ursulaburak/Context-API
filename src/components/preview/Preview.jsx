import React from 'react'

const Preview = ({id, list}) => {
  if (!id) return null;
  const data = findItemById([list], id);

  return  (
    <div> 
      {data.type==="folder" && (
        <>Sub Item Count: {data.subitems?.length || 0} </>
    )}

    {data.type==="image" && <img src={data.image} />}
    </div>
  );
};

export default Preview