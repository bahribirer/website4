export interface TeamMember {
  name: string
  title: string
  image: string
  expertise?: string
  about: string
  slug: string
}

import halilImg from '../assets/person/halil.webp'
import muhImg from '../assets/person/muh.webp'
import recImg from '../assets/person/recai.webp'
import tolImg from '../assets/person/tolga.webp'
import canImg from '../assets/person/cansu.webp'
import mugImg from '../assets/person/muge.webp'
import hatImg from '../assets/person/hatice.webp'
import furImg from '../assets/person/furkan.webp'
import selImg from '../assets/person/selin.webp'
import hakImg from '../assets/person/hakki.webp'
import hayImg from '../assets/person/hayrun.webp'
import ataImg from '../assets/person/ata.webp'














export const teamMembers: TeamMember[] = [
  {
    name: 'team.halil.name',
    title: 'team.halil.title',
    image: halilImg,
    slug: 'halil-cenk-akdogan',
    about: 'team.halil.about'
  },
  {
    name: 'team.muhammed.name',
    title: 'team.muhammed.title',
    image: muhImg,
    slug: 'muhammed-murat-kaplan',
    about: 'team.muhammed.about'
  },
  {
    name: 'team.recai.name',
    title: 'team.recai.title',
    image: recImg,
    slug: 'recai-aytac-akbay',
    about: 'team.recai.about'
  },
  {
    name: 'team.tolga.name',
    title: 'team.tolga.title',
    image: tolImg,
    slug: 'tolga-erkockar',
    about: 'team.tolga.about'
  },
  {
    name: 'team.cansu.name',
    title: 'team.cansu.title',
    image: canImg,
    slug: 'cansu-ısıksal',
    about: 'team.cansu.about'
  },
  {
    name: 'team.muge.name',
    title: 'team.muge.title',
    image: mugImg,
    slug: 'muge-yavuz',
    about: 'team.muge.about'
  },
  {
    name: 'team.hatice.name',
    title: 'team.hatice.title',
    image: hatImg,
    slug: 'hatice-yazar',
    about: 'team.hatice.about'
  },
  {
    name: 'team.furkan.name',
    title: 'team.furkan.title',
    image: furImg,
    slug: 'furkan-uslu',
    about: 'team.furkan.about'
  },
  {
    name: 'team.selin.name',
    title: 'team.selin.title',
    image: selImg,
    slug: 'selin-alcık',
    about: 'team.selin.about'
  },
  {
    name: 'team.hayrun.name',
    title: 'team.hayrun.title',
    image: hayImg,
    slug: 'hayrunnisa-neslihan-varli',
    about: 'team.hayrun.about'
  },
  {
    name: 'team.hakki.name',
    title: 'team.hakki.title',
    image: hakImg,
    slug: 'hakki-taylan-yurtaydın',
    about: 'team.hakki.about'
  },
  {
    name: 'team.ata.name',
    title: 'team.ata.title',
    image: ataImg,
    slug: 'ata-tasman',
    about: 'team.ata.about'
  }
]

