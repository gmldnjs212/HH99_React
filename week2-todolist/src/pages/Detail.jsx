import React, {useEffect} from 'react'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { getTodoById } from '../redux/modules/todoList';

function Detail() {
    const navigate = useNavigate();
    const param = useParams();
    const dispatch = useDispatch();
    const todoItem = useSelector((state) => state.todoList.todos);
    useEffect(() => {
        dispatch(getTodoById(parseInt(param.id)));
    }, [])

    return (
        <Layout>
            <Container>
                <div>
                    <Header>
                        {/* todo 아이템의 아이디값 넣어주기 */}
                        <div>ID : {param.id}</div> 
                        <PrevButton
                            onClick={()=>navigate("/")}>
                                이전으로
                        </PrevButton>
                    </Header>

                    {/* todo 아이템의 title값 넣어주기 */}
                    <Title>{todoItem[param.id].title}</Title>

                    {/* todo 아이템의 content값 넣어주기 */}
                    <Content>{todoItem[param.id].content}</Content>
                </div>
            </Container>
        </Layout>
    )
}

export default Detail

const Layout = styled.div`
    border: 2px solid rgb(238, 238, 238);
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Container = styled.div`
    width: 600px;
    height: 400px;
    border: 1px solid rgb(238, 238, 238);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Title = styled.h1`
    padding: 0px 24px;
`
const Content = styled.div`
    padding: 0px 24px;
`
const Header = styled.div`
    display: flex;
    height: 80px;
    justify-content: space-between;
    padding: 0px 24px;
    align-items: center;
`
const PrevButton = styled.button`
    border: 1px solid rgb(221, 221, 221);
    height: 40px;
    width: 120px;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
    cursor: pointer;
`