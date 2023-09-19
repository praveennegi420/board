import React from 'react'


const DetailCard = ({data}) => {

  return (
    <div className="card__wrapper">
      <div className="coin__img">
        <img src={data.image} alt={data?.name} />
      </div>

       <h4>{data.name}</h4>

      <div className="price__status">
        <h3>{data.number}</h3>
          <p className="status__positive">+{data.change}%</p>
      </div> 
    </div>
  );
}

export default DetailCard;