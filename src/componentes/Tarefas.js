import React, { useState, useEffect, Component, Fragment } from "react";
import { Avatar, Button, Card, Col, Input, Layout, List, Row, Skeleton, } from 'antd';
import { SideContent, H2 } from "./styles";
import 'antd/dist/antd.css';
import "./styles.css"

const Tarefas = (props) => {

    const [tarefa, setTarefa] = useState("");
    const [tarefas, setTarefas] = useState([]);
    const [loarding, setLoading] = useState(false);

    const adicionaTarefa = () => {
        setTarefa("");
        setTarefas([].concat(tarefas, tarefa))
    }

    const handleChange = (event) => {
        setTarefa(event.target.value);
    }

    return (
        <>
        

            <div className="site-layout-content">

                <Input onChange={(e) => handleChange(e)} value={tarefa} />
                <Button style={{left: 442 , marginTop:10 , marginBottom:10}} onClick={(e) => adicionaTarefa(e)}>Adicionar </Button>
                <Button style={{left: 280 }}onClick={(e) => adicionaTarefa(e)}>Voltar </Button>
                <SideContent>                    
                    <List
                        loading={loarding}
                        itemLayout="horizontal"
                        dataSource={tarefas}
                        renderItem={(item, index) => (
                            <List.Item>
                                <Card title={index} style={{ width: '100%' }}>
                                    <Row style={{ placeContent: 'center' }}>
                                        <Col><p>{item}</p></Col>
                                    </Row>
                                    <Row style={{ placeContent: 'center' }}>
                                        <Button>Remover</Button>
                                    </Row>
                                </Card>
                            </List.Item>
                        )}
                    />
                </SideContent>
            </div>

        </>
    );
}

export default Tarefas;

