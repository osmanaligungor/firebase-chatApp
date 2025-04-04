import { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage";
import RoomPage from "./pages/RoomPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import ChatPage from "./pages/ChatPage";

const App = () => {
  // kullanıcının yetkisi var mı
  const [isAuth, setIsAuth] = useState(false);

  // hangi odaya girildi state'i
  const [room, setRoom] = useState(null);

  // sayfa yenilendiğinde kullanıcı oturum bilgisini al
  useEffect(() => {
    // kullanıcının oturum durumu her değiştiğinde güncel bilgileri alıp getirir
    onAuthStateChanged(auth, (user) => {
      setIsAuth(user ? true : false);
    });
  }, []);

  // yetkisi yoksa login sayfasına yönlendireceğiz
  if (!isAuth) return <LoginPage />;

  // yetkisi varsa oda seçme sayfasına yönlendireceğiz
  return (
    <div className="container">
      {room ? (
        <ChatPage room={room} setRoom={setRoom} />
      ) : (
        <RoomPage setRoom={setRoom} />
      )}
    </div>
  );
};

export default App;
