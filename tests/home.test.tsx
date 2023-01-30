import {render , screen} from "@testing-library/react"
import '@testing-library/jest-dom'

import Home from "../pages/index"
import TestComponent from "../pages/test";
import {HomeItem} from "../pages/index";
import axios from "axios";

beforeAll(()=>{
    const list = [

    ]
})

describe("props test", ()=>{
    it('Test Component props 전달 테스트',()=>{
        const {container}=render(<TestComponent name={"Kang"} age={32}/>)

        const age = screen.getByText(/32/)
        const name = screen.getByText(/Kang/)
        screen.logTestingPlaygroundURL()
        //jest를 사용한 함수로 이 함수를 테스트하고자할때 jest-dom을 import 해야 정상적으로 테스트가 진행된다
        expect(age).toBeInTheDocument()
        expect(name).toBeInTheDocument()

        expect(container).toMatchSnapshot()

    })
})


describe("Home 화면",()=>{
    it('베스트 상품이 표출 되는가?', async()=>{

        const res = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
        const data =res.data

        const {container} = render(<Home list={data}/>);

        const best = screen.getByText(/베스트/)
        expect(best).toBeInTheDocument();
        expect(container).toMatchSnapshot()
    })
})