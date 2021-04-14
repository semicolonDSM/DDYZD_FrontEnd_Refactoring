import chatApi from "@/src/libs/api/chat";

export const CreateRoomAndGetRoomId = async (club_id: number) => {
    const response = await chatApi.createRoom(club_id);
    return response.data.room_id;
};
