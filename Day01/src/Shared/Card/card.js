// const Card = ({ imageSrc, content }) => (
//     <div className="card">
//       <div className="card-body">
//         {content}
//       </div>
//     </div>
//   );
  
//   export default Card;
  
import './Card.css';

const Card = ({ content }) => (
  <div className="card">
    <div className="card-body">
      {content}
    </div>
  </div>
);

export default Card;