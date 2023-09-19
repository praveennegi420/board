import React from 'react';
import DetailCard from './DetailCard';
import likes from '../assets/likes.png';
import revenue from '../assets/revenue.png'
import transaction from '../assets/transactions.png'
import users from '../assets/users.png'

const TopCard = () => {
  const data=[
    { id:"1", image: revenue, name:"Total Revenues", number: "$2,129,430", change:"2.5" },
    { id:"2", image: transaction, name:"Total Transactions", number: "1,520", change:"1.7" },
    { id:"3", image: likes, name:"Total Likes", number: "9,721", change:"1.4" },
    { id:"4", image: users, name:"Total Users", number: "9,721", change:"4.2" }
  ]

  return (
    <div className="coins__card__container">
      {data.map((details) => {
        return <DetailCard data={details} key={details?.id} />;
      })}
    </div>
  );
}

export default TopCard;