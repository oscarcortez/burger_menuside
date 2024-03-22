import { IconType } from "react-icons";
import { AiFillFire } from "react-icons/ai";

interface ListItem {
    icon?: IconType;
    label: string;
    isTitle?: boolean;
  };

export const items:ListItem[] = [
    { label: "Kurv", icon: AiFillFire },
    { label: "Mine Annoncer" },
    { label: "Mine GenbrugNU salg" },
    { label: "Mine favoritter" },
    { label: "Mine beskeder" },
    { label: "Mine oplysninger" },
    { label: "Log ud" },
    { label: "Kontakt Gul&Gratis", isTitle: true }
  ];