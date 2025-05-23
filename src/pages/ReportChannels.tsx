import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import { callSharp } from "ionicons/icons";
import "./ReportChannels.css";

const emergencyNumbers = [
  { name: "Polícia", number: "190" },
  { name: "Bombeiros", number: "193" },
  { name: "Samu", number: "192" },
  { name: "Delegacia das Mulheres", number: "180" },
  { name: "Disque Direitos Humanos", number: "100" },
];

const ReportChannels: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/tab1" />
          </IonButtons>
          <IonTitle className="center-title">Canais de Denúncia</IonTitle>
          <IonButtons slot="end">
            <div style={{ width: "44px" }} />{" "}
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="report-channels-content">
        <div className="report-channels-container">
          {emergencyNumbers.map((channel, index) => (
            <a
              key={index}
              href={`tel:${channel.number}`}
              className="report-card"
            >
              <IonIcon icon={callSharp} className="report-icon" />
              <div className="info-card-channel">
                <h3>{channel.name}</h3>
                <p>{channel.number}</p>
              </div>
            </a>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ReportChannels;
