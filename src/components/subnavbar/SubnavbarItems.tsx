import { Icon } from "@/assets/icons/Icon";
import React from "react";
import Trending from '@/assets/imgs/fire.jpg'
import Artic from '@/assets/imgs/caves.jpg'
import Room from '@/assets/imgs/room.jpg'
import Tower from '@/assets/imgs/beach.jpg'
import Castle from '@/assets/imgs/container.jpg'
import Church from '@/assets/imgs/church.jpg'
import Chef from '@/assets/imgs/chef.jpg'
import Home from '@/assets/imgs/house.jpg'
import Cave from '@/assets/imgs/caves.jpg'
import Antartica from '@/assets/imgs/artic.jpg'
import Trophical from '@/assets/imgs/trophical.jpg'
import Ski from '@/assets/imgs/beach.jpg'

export type NavbarItems = {
  icon?: React.ReactNode;
  label: string;
  image?: string;
};

export const navbarItems: NavbarItems[] = [
  {
    image: Trending?.src,
    label: "Trending",
  },
  {
    image: Artic?.src,
    label: "Rooms",
  },
  {
    image: Home?.src,
    label: "Tower",
  },
  {
    image: Cave?.src,
    label: "Castle",
  },
  {
    image: Trophical?.src,
    label: "Lakefront",
  },
  {
    image: Antartica?.src,
    label: "Ski-in/out",
  },
  {
    image: Trophical?.src,
    label: "Beach",
  },
  {
    image: Ski?.src,
    label: "Houseboats",
  },
  {
    image: Room?.src,
    label: "Shepherd's hut",
  },
  {
    image: Chef?.src,
    label: "Houseboats",
  },
  {
    image: Tower?.src,
    label: "Trophical",
  },
  {
    image: Castle?.src,
    label: "Arctic",
  },
  {
    image: Church?.src,
    label: "Cabins",
  },
  {
    image: Trending?.src,
    label: "National parks",
  },
  {
    image: Trending?.src,
    label: "Countryside",
  },
  {
    image: Trending?.src,
    label: "Desert",
  },
  {
    image: Trending?.src,
    label: "Earth homes",
  },
  {
    image: Trending?.src,
    label: "Boats",
  },
  {
    image: Trending?.src,
    label: "Island",
  },
  {
    image: Trending?.src,
    label: "Play",
  },
];

export const lowerItems: NavbarItems[] = [
  {
    label: 'Explore',
    icon: <Icon type="bigSearch" />
  },
  {
    label: "Wishlists",
    icon: <Icon type="heart" />
  },
  {
    label: 'Log in',
    icon: <Icon type="man" />
  }
]