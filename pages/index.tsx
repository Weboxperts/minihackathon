import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navs from "../comp/navs";
import IhOme from "../comp/IhOme";
import type { AppProps } from "next/app";
import Store from "../redux/store";
import { Provider } from "react-redux";
import { Card, Button, Col, Container, Row } from 'react-bootstrap';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <IhOme />
    </>
  )
}
