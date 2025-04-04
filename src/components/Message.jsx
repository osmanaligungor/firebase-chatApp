import { auth } from "../firebase";
import generateColor from "../utils/generateColor";

const Message = ({ data }) => {
  // eğer mesajı oturumu açık olan kullanıcı attıysa : sağ tarafta
  if (auth.currentUser.uid === data.author.id) {
    return <p className="msg-user">{data.text}</p>;
  }

  // eğer mesajı farklı bir kullanıcı attıysa : sol tarafta
  return (
    <div className="msg-other">
      <img src={data.author.photo} />
      <div>
        <span
          style={{
            color: generateColor(data.author.id),
          }}
        >
          {data.author.name}
        </span>
        <p className="msg-text">{data.text}</p>
      </div>
    </div>
  );
};

export default Message;
