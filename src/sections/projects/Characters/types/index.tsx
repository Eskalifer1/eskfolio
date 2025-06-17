import { HeroAnimationType } from "@/components/Sprites/HeroAdventure/consts";

export interface HeroAdventureRefAPI {
  playAnimationOnce: (key: HeroAnimationType) => void;
}
