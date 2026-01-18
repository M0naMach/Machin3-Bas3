/**
 * Opal Cards Showcase Data
 * Edit this file to customize the opaline components section
 */

import { getOpalTexture, getCopperTexture } from "@/components/portfolio/OpalTextures";

export const opalShowcase = {
  title: "Opaline Components",
  description: "Iridescent UI modules with copper accents and emerald-tinted glassmorphism",
  getOpalTexture,
  getCopperTexture,
  
  cards: [
    {
      title: "Cleymmire",
      tag: "Eff68",
      description: "Cinone style Opal Fire sompraste tinod Preacrourso ant ertho tpseou.",
      actionLabel: "Gave",
      onAction: () => console.log("Gave clicked"),
      icon: "Flame",
      size: "medium" as const,
      copperAccent: true,
    },
    {
      title: "Tlapper",
      tag: "Gleaknpe",
      size: "medium" as const,
      icon: "Zap",
      decorative: true,
      copperAccent: true,
      opalTexture: getOpalTexture(1),
      copperTexture: getCopperTexture(2),
    },
    {
      title: "Gusesse Aiiny",
      description: "Whenna groups opally Ciocjea opnaind you preecoung orient yrom granit silyera aoule.ad sour stermey fonmericad.",
      actionLabel: "Gicw",
      onAction: () => console.log("Gicw clicked"),
      icon: "Leaf",
      size: "medium" as const,
      decorative: true,
    },
    {
      title: "Buspercs",
      description: "Diary ont Claneinne style Oiercal Fire a sompeaning the peice duffnopal exercital",
      size: "medium" as const,
      icon: "Droplet",
      decorative: true,
      copperAccent: true,
      accentBarTexture: getCopperTexture(0),
    },
  ],
};