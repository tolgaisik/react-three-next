import { useRef } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/config'
import Layout from '@/components/dom/Layout'
import '@/styles/index.css'

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: true })

export default function App({ Component, pageProps = { title: 'index' } }) {
  return (
    <Scene className='pointer-events-none' eventPrefix='client'>
            {Component.canvas(pageProps)}
    </Scene>
  )
}
