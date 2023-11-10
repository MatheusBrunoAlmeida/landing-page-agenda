import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import styles from '../styles/home.module.scss'
import { Banner } from '@/components/Banner'
import { Info } from '@/components/Info'
import { SpecialPrize } from '@/components/SpecialPrize'
import { Product } from '@/components/Product'

export default function Home() {
  return (
    <>
      <Banner />
      <Info />
      <SpecialPrize />
      <Product />
    </>
  )
}
