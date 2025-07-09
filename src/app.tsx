import { Route, Routes } from "react-router-dom";
import { CreateRoom } from "./pages/create-room";
import { Room } from "./pages/room";

export function App() {
  return (
    <Routes>
      <Route index element={<CreateRoom />} />
      <Route element={<Room />} path="/rooms/:roomId" />
    </Routes>
  );
}
