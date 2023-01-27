import {Header} from "semantic-ui-react";
import Gnd from "./Gnd";

const Top = () => {
    return (
        <div>
            <div style={{display : "flex", paddingTop: 20}}>
                <div style={{flex : "100px 0 0"}}>
                    <img src="/images/icon.jpg" alt="logo"
                         style={{display:"block",width:80}}
                    />

                </div>
                <Header as="h1">메이데이</Header>
            </div>
            <Gnd/>
        </div>

    )
}

export default Top