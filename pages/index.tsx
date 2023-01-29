import type {GetStaticProps, GetStaticPropsContext, NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from "axios";
import {useEffect, useState} from "react";
import ItemList from "../src/component/ItemList";
import {Dimmer, Divider, Header, Loader, Segment} from "semantic-ui-react";
import {GetServerSideProps, GetServerSidePropsContext} from "next";
import HeadInfo from "../src/component/HeadInfo";

const Home: NextPage = ({list}:any) => {
    return (
        <div className={styles.container}>
            <HeadInfo/>
            <>
                <Header as={"h3"} style={{paddingTop: 40}}>베스트 상품</Header>
                <Divider/>
                <ItemList list={list.slice(0, 9)}/>
                <Header as={"h3"} style={{paddingTop: 40}}>신상품</Header>
                <Divider/>
                <ItemList list={list.slice(9, list.length)}/>
            </>
        </div>
    )
}

export default Home


//정적 파일로 생성
export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const apiUrl = process.env.api_url as string
    const res = await axios.get(apiUrl)
    const data = res.data

    return {
        props: {
            list: data,
        }
    }
}