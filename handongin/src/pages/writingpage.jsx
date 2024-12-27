import styled from 'styled-components'
import Header from '../components/writingpage/header'
import Title from '../components/writingpage/title'
import Select from '../components/writingpage/select';

function WritingPage() {

  return (
    <>
    <Div>
    <Header/>
    <Title/>
    <Select/>
    </Div>
    </>
  )
}

export default WritingPage;

const Div = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`
