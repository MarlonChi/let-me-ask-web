import { Route, Routes } from "react-router-dom";
import { CreateRoom } from "./pages/create-room";
import { Room } from "./pages/room";
import { RecordRoomAudio } from "./pages/record-room-audio";

export function App() {
  return (
    <Routes>
      <Route index element={<CreateRoom />} />
      <Route element={<Room />} path="/rooms/:roomId" />
      <Route element={<RecordRoomAudio />} path="/room/:roomId/audio" />
    </Routes>
  );
}
