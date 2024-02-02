import styled from 'styled-components'

const Promos = () => {
  return (
    <div className='sticky right-0 top-0 z-20 flex h-screen w-fit  flex-col justify-between gap-8 overflow-auto border-l border-l-dark-4 bg-dark-2 px-10 pb-4 pt-8 max-xl:hidden '>
 <Wrapper>
      <OfferCard>
        <Title>Yield earned</Title>
        <Description>Earn up CO 2.84% APY on your crypto</Description>
        <Placeholder />
        <Additional style={{ fontSize: '1.5rem' }}>
          $0.000066 <span>2.84% APY</span>
        </Additional>
      </OfferCard>

      <OfferCard>
        <Title>Learn and Earn</Title>
        <Description>Earn up CO 2.84% APY on your crypto</Description>
        <Placeholder />
        <Additional style={{ color: '#3773f5' }}>Verify Identity</Additional>
      </OfferCard>
    </Wrapper>
    </div>
   
  )
}

export default Promos

const Wrapper = styled.div`
  margin-top: 2rem;
  padding-right: 1rem;
  width: 30vw
`

const OfferCard = styled.div`
  width: 21rem;
  height: 11rem;
  border: 1px solid #282b2f;
  margin-bottom: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 0.1rem;
`

const Description = styled.div`
  font-size: 1.1rem;
`

const Placeholder = styled.div`
  flex: 1;
`

const Additional = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > span {
    color: #8a919e !important;
    font-size: 1rem;
  }
`
