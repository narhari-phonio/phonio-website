"use client";

import {
  DisconnectButton,
  RoomAudioRenderer,
  RoomContext,
  VoiceAssistantControlBar,
  useVoiceAssistant,
} from "@livekit/components-react";
import { Room, RoomEvent } from "livekit-client";
import { useCallback, useEffect, useState } from "react";
import type { ConnectionDetails } from "../../app/api/connection-details/route";
import { Phone, X } from "lucide-react";
import "./agent.css";

export default function VoiceAgent() {
  const [room] = useState(new Room());

  const onConnectButtonClicked = useCallback(async () => {
    const url = new URL("/api/connection-details", window.location.origin);
    const response = await fetch(url.toString());
    const connectionDetailsData: ConnectionDetails = await response.json();

    await room.connect(
      connectionDetailsData.serverUrl,
      connectionDetailsData.participantToken
    );
    await room.localParticipant.setMicrophoneEnabled(true);
  }, [room]);

  useEffect(() => {
    room.on(RoomEvent.MediaDevicesError, onDeviceFailure);

    return () => {
      room.off(RoomEvent.MediaDevicesError, onDeviceFailure);
    };
  }, [room]);

  return (
    <main className="fixed bottom-4 right-4 z-50 w-fit bg-purple-50 px-3 py-2 h-12 flex items-center rounded-full ">
      <RoomContext.Provider value={room}>
        <div className="lk-room-container flex items-center">
          <SimpleVoiceAssistant
            onConnectButtonClicked={onConnectButtonClicked}
          />
        </div>
      </RoomContext.Provider>
    </main>
  );
}

function SimpleVoiceAssistant(props: { onConnectButtonClicked: () => void }) {
  const { state: agentState } = useVoiceAssistant();

  return (
    <>
      {agentState === "disconnected" ? (
        <button
          onClick={() => props.onConnectButtonClicked()}
          className="flex items-center gap-2 text-sm text-purple-600 font-medium"
        >
          <Phone width={16} height={16} />
          Try Phonio Now!
        </button>
      ) : (
        <div className="flex items-center gap-2">
          <div className="control-btn">
            <VoiceAssistantControlBar controls={{ leave: false }} />
            <DisconnectButton>
              <X />
            </DisconnectButton>
          </div>

          <RoomAudioRenderer />
        </div>
      )}
    </>
  );
}

function onDeviceFailure(error: Error) {
  console.error(error);
  alert(
    "Error acquiring camera or microphone permissions. Please make sure you grant the necessary permissions in your browser and reload the tab"
  );
}
